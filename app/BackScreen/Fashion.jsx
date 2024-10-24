import React, {useState, useEffect} from 'react'
import { Alert, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Image, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { getAds } from '../service/adService';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window');

const truncateString = (str, maxLength) => {
    if(str.length <= maxLength ){
      return str;
    }else{
      const truncatedString = str.slice(0, maxLength);
      return truncatedString + (truncatedString.endsWith('') ? '...' : '...');
    }
  }

const Fashion = () => {

    const [loading, setLoading] = useState(true);
  const [ads, setAds] = useState([]);
  const [ckeckClick, setCheckClick] = useState(false)

  useEffect(() => {
    const fetchAds = async () => {
      setLoading(true); // Start loading
      try {
        const fetchedAds = await getAds(1);
        const filtered = fetchedAds.filter(ad => ad.category === 'fashion');
        // Alert.alert(filtered)
        setAds(filtered);
        
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

  
  const handleClick = () => {
    setCheckClick(!ckeckClick)
  }

  const fields = [
    { label: 'Brand', placeholder: 'Enter Brand' },
    { label: 'Make', placeholder: 'Enter Make' },
    { label: 'Year', placeholder: 'Enter Year' },
];

  return (
    <View style={styles.container}>
        <ScrollView>
        <View style={{paddingHorizontal: 14}}>
            <TouchableOpacity
                onPress={handleClick}
                style={styles.tOne}>
                { !ckeckClick ?  <MaterialIcons name="keyboard-arrow-up" size={24} color="black" /> :
                <MaterialIcons name="expand-more" size={24} color="black" />}
                <Text> Show Filters</Text>
            </TouchableOpacity>
        </View>
        {ckeckClick && <View style={styles.card}>
            <Text style={{fontSize: 16}}>Advanced Search</Text>
            <View style={{flexDirection: 'column', marginTop: 20}}>
                <View>
                    <Text style={{marginBottom: 10}}>Price Range</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <TextInput style={styles.InputViewText} placeholder='Min Amount'/>
                        <Text> - </Text>
                        <TextInput style={styles.InputViewText} placeholder='Max Amount' />
                    </View>
                </View>
                {fields.map((field, index) => (
                    <View key={index} style={styles.inputContainer}>
                        <Text style={{marginTop: 10}}>{field.label}</Text>
                        <TextInput
                            style={styles.InputViewText2}
                            placeholder={field.placeholder}
                        />
                    </View>
                ))}
            </View>
            </View>
        }
        <View style={styles.recommendedGrid}>
          { ads.length == 0 && !loading ? <Text>No ads shown</Text> : ads.map((ad, index) => (
            <TouchableOpacity key={index} style={styles.recommendedItem}>
              <Image source={{ uri: ad.images[0]}} style={styles.recommendedImage} />
              <View style={styles.recommendedTextContainer}>
                <Text style={styles.recommendedTitle}>{truncateString(ad.title, 20)}</Text>
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
        <View style={{marginBottom: 40}}></View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      //   paddingHorizontal: 12,
        // paddingTop: 1,
        backgroundColor: '#fff',
      },
      InputViewText: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        width: '40%',
        borderRadius: 5
      },
      InputViewText2: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 5,
        marginTop: 10
      },
      tOne: {
        flexDirection: 'row', 
        alignItems: 'center', 
        width: '40%', 
        marginBottom: 20, 
        marginTop: 20,
        justifyContent: 'center',
        backgroundColor: 'red',
        borderRadius: 20,
        paddingVertical: 5
      },
      card: {
        paddingHorizontal: 20,
        // marginHorizontal: 2,
        width: '95%',
        // marginLeft: 10,
        // marginRight: 10,
        margin: 10,
        // maxWidth: 350,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 10,
        paddingVertical: 14
      },
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
})

export default Fashion