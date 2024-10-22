import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

import { MaterialIcons} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/Ionicons';


const ProductGrid = () => {

  const images = [
    'https://nextui.org/images/card-example-6.jpeg',
    'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
  ];

  return (
    // <View style={styles.Category}>
    //     <View style={styles.Column}>
    //         <View style={{flexDirection: 'column'}}>
    //             <View>
    //                 <Image />
    //             </View>
    //             <View>
    //                 <Text>This is title</Text>
    //                 <Text>this is h2</Text>
    //             </View>
    //         </View>
    //     </View>
    // </View>

    <View style={styles.recommendedGrid}>
          {images.map((img, index) => (
            <TouchableOpacity key={index} style={styles.recommendedItem}>
              <Image source={{ uri: img }} style={styles.recommendedImage} />
              <View style={styles.recommendedTextContainer}>
                <Text style={styles.recommendedTitle}>AC Camera</Text>
                <View style={styles.recommendedAmountContainer}>
                  <Text style={{color: '#FC9D4F'}}>46,000 RWF</Text>
                  <Text style={styles.text}></Text>
                </View>
                <View style={{backgroundColor: '#E0DCD9', borderRadius: 5, padding: 2}}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <MaterialIcons name="place" size={15} color="black" /> 
                      <Text>Kigali</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <MaterialIcons name="local-offer" size={15} color="black" />
                      <Text>new</Text>
                    </View>
                  </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', padding: 2}}>
                  <Icon name="person-outline" size={20} style={{ alignSelf: 'center', color: '#FC9D4F' }} />
                  <Text style={{color: '#FC9D4F', marginLeft: 4}}>karrot</Text>
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