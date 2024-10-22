import React from 'react'
import { Text, View, Image } from 'react-native'
import ProductGrid from '../components/ProductGrid'
import { ScrollView } from 'react-native-gesture-handler'

const MyLocal = () => {
  return (
    <View>
        <ScrollView>
            <Text style={{marginTop: 10, fontSize: 20, fontWeight: 300, textAlign: 'center'}}>Local marketplaces-Near You</Text>
            <View style={{ height: 200, overflow: 'hidden', marginTop: 10, marginBottom: 10, justifyContent: 'center'}}> 
                <Image 
                source={{ uri: 'https://i0.wp.com/blog.karrotmarket.com/wp-content/uploads/2024/10/discover-the-joy-of-local-deals-with-karrot-1.webp?fit=2048%2C1024&ssl=1' }} 
                style={{ width: '100%', height: '100%', resizeMode: 'contain' }} // Add styles as needed
            />
            </View>
            <ProductGrid />
        </ScrollView>
    </View>
  )
}

export default MyLocal