import { collection, addDoc, updateDoc, doc, getDoc, getDocs, query, where, arrayUnion, arrayRemove, orderBy, limit } from "firebase/firestore";
import { db, auth } from "../../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ADS_CACHE_KEY = 'ads_cache';
const CACHE_EXPIRATION = 5 * 60 * 1000; // 5 minutes
const ITEMS_PER_PAGE = 200; // Define the number of items to load per page

export const postAd = async (adData) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error('User must be logged in to post an ad');
    }

    const newAd = {
      ...adData,
      userId: user.uid,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'active',
      views: 0,
      savedBy: []
    };

    const docRef = await addDoc(collection(db, "ads"), newAd);
    console.log("Ad posted successfully with ID: ", docRef.id);

    // Update cache
    const cachedAds = JSON.parse(localStorage.getItem(ADS_CACHE_KEY) || '[]');
    cachedAds.unshift({ id: docRef.id, ...newAd });
    await AsyncStorage.setItem(ADS_CACHE_KEY, JSON.stringify(cachedAds));
    await AsyncStorage.setItem('ads_cache_timestamp', Date.now().toString());

    return docRef.id;
  } catch (error) {
    console.error("Error posting ad:", error);
    throw error;
  }
};

export const getAds = async (page = 1) => {
  try {
    const adsRef = collection(db, "ads");
    const q = query(
      adsRef,
      orderBy("createdAt", "desc"),
      limit(ITEMS_PER_PAGE * page)
    );
    const querySnapshot = await getDocs(q);

    const ads = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Update cache
    await AsyncStorage.setItem(ADS_CACHE_KEY, JSON.stringify(ads));
    await AsyncStorage.setItem('ads_cache_timestamp', Date.now().toString());

    return ads;
  } catch (error) {
    console.error("Error fetching ads:", error);
    throw error;
  }
};

export const getUserAds = async (userId) => {
  try {
    const adsRef = collection(db, 'ads');
    const q = query(
      adsRef,
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    if (error.code === 'failed-precondition' || error.code === 'resource-exhausted') {
      console.error('Firestore index error:', error);
      throw new Error('Database index is being created. Please try again in a few minutes.');
    }
    throw error;
  }
};

export const getSavedAds = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error('User must be logged in to fetch saved ads');
    }

    const userRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      throw new Error('User document not found');
    }

    const savedAdIds = userDoc.data()?.savedAds || [];
    const savedAds = [];

    for (const adId of savedAdIds) {
      const adRef = doc(db, "ads", adId);
      const adDoc = await getDoc(adRef);
      if (adDoc.exists()) {
        savedAds.push({ id: adDoc.id, ...adDoc.data() });
      }
    }

    return savedAds;
  } catch (error) {
    console.error("Error fetching saved ads:", error);
    throw error;
  }
};

export const saveAd = async (adId) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error('User must be logged in to save an ad');
    }

    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      savedAds: arrayUnion(adId)
    });

    const adRef = doc(db, "ads", adId);
    await updateDoc(adRef, {
      savedBy: arrayUnion(user.uid)
    });
  } catch (error) {
    console.error("Error saving ad:", error);
    throw error;
  }
};

export const unsaveAd = async (adId) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error('User must be logged in to unsave an ad');
    }

    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      savedAds: arrayRemove(adId)
    });

    const adRef = doc(db, "ads", adId);
    await updateDoc(adRef, {
      savedBy: arrayRemove(user.uid)
    });
  } catch (error) {
    console.error("Error unsaving ad:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const adRef = doc(db, "ads", id);
    const adDoc = await getDoc(adRef);
    
    if (adDoc.exists()) {
      return { id: adDoc.id, ...adDoc.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

export const sendAdConfirmationEmail = async (email, ad, title) => {
  try {
    const response = await fetch('./api/send-ad-confirmation-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, ad, title }),
    });

    if (!response.ok) {
      throw new Error('Failed to send confirmation email');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
};