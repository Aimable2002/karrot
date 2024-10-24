import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ActivityIndicator} from 'react-native'
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

import { MaterialIcons} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/Ionicons';
import { getAds } from '../service/adService';

const truncateString = (str, maxLength) => {
  if(str.length <= maxLength ){
    return str;
  }else{
    const truncatedString = str.slice(0, maxLength);
    return truncatedString + (truncatedString.endsWith('') ? '...' : '...');
  }
}

const ProductGrid = () => {

  const [loading, setLoading] = useState(true);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      setLoading(true); // Start loading
      try {
        const fetchedAds = await getAds(1);
        setAds(fetchedAds);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch ads', error.message);
      } finally {
        setLoading(false); // End loading
      }
    };
    fetchAds();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        {/* <Text>Loading...</Text> */}
      </View>
    );
  }
  return (

    <View style={styles.recommendedGrid}>
          { ads.length == 0 && !loading ? <Text>No ads shown</Text> : ads.map((ad, index) => (
            <TouchableOpacity key={index} style={styles.recommendedItem}>
              <Image source={{ uri: ad.images[0] }} style={styles.recommendedImage} />
              <View style={styles.recommendedTextContainer}>
                <Text style={styles.recommendedTitle}>{truncateString(ad.title, 21)}</Text>
                <View style={styles.recommendedAmountContainer}>
                  <Text style={{color: '#FC9D4F'}}>{ad.price.toLocaleString()} RWF</Text>
                  <Text style={styles.text}></Text>
                </View>
                <View style={{backgroundColor: '#E0DCD9', borderRadius: 5, padding: 2, marginTop: 2}}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <MaterialIcons name="place" size={15} color="black" /> 
                      <Text>{ad.location}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 4}}>
                      <MaterialIcons name="local-offer" size={15} color="#757373" />
                      <Text style={{color: '#757373'}}>{ad.condition}</Text>
                    </View>
                  </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', padding: 2, marginTop: 2}}>
                  <Icon name="person-outline" size={20} style={{ alignSelf: 'center', color: '#FC9D4F' }} />
                  <Text style={{color: '#FC9D4F', marginLeft: 4}}>GadgetDealer</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
  )
}
//<MaterialIcons name="place" size={24} color="black" /> 

const styles = StyleSheet.create({
  recommendedGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  recommendedItem: {
    width: width / 2 - 24,
    marginBottom: 16,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#F9F6F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // elevation: 5,
  },
  recommendedImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  recommendedTextContainer: {
    padding: 5,
  },
  recommendedTitle: {
    fontWeight: 'bold',
    fontSize: 12
  },
  recommendedAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
});


// const styles = StyleSheet.create({
//     Category: {
//         paddingHorizontal: 14, 
//         padding: 20, 
//         marginTop:10,
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'space-between',
//       },
//       Column: {
//         width: '50%',
//         minHeight: 250,
//         backgroundColor: '#fff',
//         padding: 16,
//         alignItems: 'center',
//         justifyContent: 'center',
//         alignSelf: 'center',
//         marginBottom: 16,
//         borderWidth: 2,
//         borderRadius: 8,
//         borderColor: '#F9F6F6',
//       }
// })

export default ProductGrid