import { doc, setDoc, updateDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

// Create a user
export const createUser = async (userId, userData) => {
  try {
    const userRef = doc(db, "users", userId);
    const newUser = {
      id: userId,
      name: userData.name || "",
      email: userData.email || "",
      createdAt: new Date(),
      updatedAt: new Date(),
      darkModeEnabled: false,
      notificationSettings: {
        email: true,
        push: true,
        sms: false,
      },
      savedAds: [],
      postedAds: [],
      ...userData
    };

    await setDoc(userRef, newUser);
    console.log("User created successfully");
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user profile. Please try again.");
  }
};

// Get user by ID
export const getUserById = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      // Ensure the id field is set correctly
      return { ...userData, id: userId };
    } else {
      console.log("No user found with the given ID");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed to fetch user data. Please try again.");
  }
};

// Update notification settings
export const updateNotificationSettings = async (userId, settings) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, { notificationSettings: settings });
    console.log("Notification settings updated successfully");
  } catch (error) {
    console.error("Error updating notification settings:", error);
    throw new Error("Failed to update notification settings. Please try again.");
  }
};


export const getAllUsers = async () => {
  try {
    const usersCollection = collection(db, "users");
    const userSnap = await getDocs(usersCollection);
    
    const users = userSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data() // Spread operator to include all fields from the user document
    }));
    
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users. Please try again.");
  }
};

