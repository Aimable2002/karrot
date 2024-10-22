import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'


const CategoryList = () => {

    const initialCategories = [
        { name: 'post ad', icon: <MaterialIcons name="note-add" size={24} color="black" />, count: 0 },
        { name: 'vehicles', icon: <MaterialIcons name="directions-car" size={24} color="black" />, count: 0 },
        { name: 'property', icon: <MaterialIcons name="house" size={24} color="black" />, count: 0 },
        { name: 'Phones & Tablets', icon: <Ionicons name="phone-portrait-outline" size={24} color="black" />, count: 0 },
        { name: 'Electronics', icon: <MaterialIcons name="usb" size={24} color="black" />, count: 0 },
        { name: 'Home Appliiance & Furniture', icon: <MaterialIcons name="chair" size={24} color="black" />, count: 0 },
        { name: 'Health & Beauty', icon: <Ionicons name="medkit-outline" size={24} color="black" />},
        { name: 'Fashion', icon: <Ionicons name="shirt-outline" size={24} color="black" />, count: 0 },
        { name: 'Sports, Art & Outdoor', icon: <Ionicons name="american-football-outline" size={24} color="black" />, count: 0 },
        { name: 'Services', icon: <MaterialIcons name="support-agent" size={24} color="black" />, count: 0 },
        { name: 'Jobs', icon: <Ionicons name="bag-handle-outline" size={24} color="black" />, count: 0 },
        { name: 'Pets', icon: <Ionicons name="logo-snapchat" size={24} color="black" />, count: 0 },
        { name: 'Babies', icon: <Ionicons name="happy-outline" size={24} color="black" />, count: 0 },
        { name: 'Repair', icon: <Ionicons name="hammer-outline" size={24} color="black" />, count: 0 },
        { name: 'Equipment', icon: <Ionicons name="cube-outline" size={24} color="black" />, count: 0 },
        // Add other categories similarly...
      ];


  return (
    <View style={styles.Category}>
              {initialCategories.map((category, index) => (
        <View key={index} style={styles.Column}>
          {category.icon}
          <Text style={{ color: '#000', textAlign: 'center' }}>{category.name}</Text>
        </View>
      ))}
        </View>
  )
}

const styles = StyleSheet.create({
    Category: {
        paddingHorizontal: 14, 
        padding: 20, 
        marginTop:2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      Column: {
        width: '30%',
        minHeight: 100,
        backgroundColor: '#fff',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 16,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#F9F6F6',
      }
})

export default CategoryList