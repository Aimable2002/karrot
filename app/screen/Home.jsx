import React from 'react'
import { Text, View, StyleSheet, Image } from "react-native";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import CategoryList from '../components/CategoryList';
import ProductGrid from '../components/ProductGrid';
const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{marginBottom: 115}}>
        <View style={{backgroundColor: '#ff7332', paddingHorizontal: 14, padding: 10}}>
          <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: '#fff', fontSize: 20, fontWeight: 40}}>Find anything in</Text>
              <Text style={{color: "#fff", alignSelf: 'center'}}>Rwanda</Text>
          </View>
          <View style={{backgroundColor: '#fff', marginTop: 20, padding: 20, borderRadius: 10}}>
              <TextInput 
                  placeholder='I am looking for'
              />
          </View>
          <View style={styles.row}>
              <View style={styles.item}>
                  <Text style={{color: '#fff'}}>iPhone</Text>
              </View>
              <View style={styles.item}>
                  <Text style={{color: '#fff'}}>Jump</Text>
              </View>
              <View style={styles.item}>
                  <Text style={{color: '#fff'}}>Yoga</Text>
              </View>
              <View style={styles.item}>
                  <Text style={{color: '#fff'}}>Pants</Text>
              </View>
              <View style={styles.item}>
                  <Text style={{color: '#fff'}}>Wigs</Text>
              </View>
              <View style={styles.item}>
                  <Text style={{color: '#fff'}}>Bicycle</Text>
              </View>
          </View>
        </View>
        <View style={{ height: 200, overflow: 'hidden', marginTop: 10, justifyContent: 'center'}}> 
            <Image 
            source={{ uri: 'https://i0.wp.com/blog.karrotmarket.com/wp-content/uploads/2024/10/why-fast-shipping-matters-in-local-marketplaces.webp?fit=2048%2C1024&ssl=1' }} 
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }} // Add styles as needed
          />
        </View>
        <CategoryList style={{marginBottom: 50}} />
        <Text style={{fontSize: 25, fontWeight: 300, color: '#FC9D4F', marginBottom: 15, paddingHorizontal: 12}}>Trending ads</Text>
        <ProductGrid />
        </View>
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
    row: {
        flexDirection: 'row',
        marginTop: 20,
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      },
      item: {
        backgroundColor: '#9a3c10',
        padding: 5,
        borderRadius: 15,
        alignItems: 'center',
        width: '23%',
        marginBottom: 10, 
      },
      Category: {
        paddingHorizontal: 14, 
        padding: 10, 
        marginTop:10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      },
      Column: {
        width: '30%',
        backgroundColor: '#f0f0f0',
        padding: 16,
        alignItems: 'center',
        marginBottom: 16,
        border: 2
        
      }

})

export default Home