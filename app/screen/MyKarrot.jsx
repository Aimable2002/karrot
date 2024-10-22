import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons} from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';

const MyKarrot = () => {

    const initialCategories = [
        { name: 'Favorites', icon: <MaterialIcons name="favorite" size={24} color="#FC9D4F" />, count: 0 },
        { name: 'My Listings', icon: <MaterialIcons name="format-list-bulleted" size={24} color="#FC9D4F" />, count: 0 },
        { name: 'Purchase', icon: <MaterialIcons name="business-center" size={24} color="#FC9D4F" />, count: 0 },
        { name: 'Savings', icon: <MaterialIcons name="savings" size={24} color="#FC9D4F" />, count: 0 },
        { name: 'Events', icon: <MaterialIcons name="savings" size={24} color="#FC9D4F" />, count: 0 },
        { name: 'Whats New', icon: <MaterialIcons name="description" size={24} color="#FC9D4F" />, count: 0 },
    ]
  return (
    <View style={styles.container}>
        <ScrollView>
        <View style={{ height: 150, overflow: 'hidden', marginTop: 10, justifyContent: 'center'}}> 
            <Image 
            source={{ uri: 'https://downloadr2.apkmirror.com/wp-content/uploads/2023/02/30/63ec3579b1618.png' }} 
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }} // Add styles as needed
          />
        </View>
        <View style={{ overflow: 'hidden', marginBottom: 10, justifyContent: 'center', alignItems: 'center'}}> 
            <View>
                <Text style={{textAlign: 'center', fontSize: 25, color: '#FC9D4F'}}>Gadget Dealers</Text>
                <Text style={{textAlign: 'center', color: '#7C7C7C'}}>karrot@gmail.com</Text>
            </View>
        </View>
        <View style={{ height: 200, borderRadius: 10, overflow: 'hidden', marginTop: 10, justifyContent: 'center'}}> 
            <Image 
            source={{ uri: 'https://i0.wp.com/blog.karrotmarket.com/wp-content/uploads/2024/08/the-ethical-side-of-secondhand-shopping-how-honesty-and-community-can-transform-your-experience.webp?fit=1792%2C1024&ssl=1' }} 
            style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 10 }} // Add styles as needed
          />
        </View>
        <View style={{paddingHorizontal: 12}}>
            <Text style={{marginTop: 20, fontSize: 20, color: '#FC9D4F', fontWeight: 300}}>Recently viewed</Text>
            <Text style={{color: '#FC9D4F', marginTop: 10}}>No recently viewed</Text>
        </View>
        <View>
          <View style={styles.Category}>
              {initialCategories.map((category, index) => (
                  <View key={index} style={styles.Column}>
                  {category.icon}
                  <Text style={{ color: '#000', textAlign: 'center', paddingLeft: 4 }}>{category.name}</Text>
                  </View>
              ))}
          </View>
        </View>
        <View style={{marginBottom: 20, paddingHorizontal: 12,}}>
          <Text style={{fontSize: 18, fontWeight: 200, color: '#944616'}}>Settings</Text>
          <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#FC9D4F'}}>Edit Profile</Text>
            <View style={{ flexDirection: 'row', marginRight: 15, justifyContent: 'space-between' }}>
            <TouchableOpacity 
                style={{backgroundColor: '#F1E4CA', borderRadius: 50, padding: 4, marginRight: 10}}
                >
                <MaterialIcons name="save-alt" size={24} color="#ff7637" />
              </TouchableOpacity>
              <TouchableOpacity 
                style={{backgroundColor: '#F1E4CA', borderRadius: 50, padding: 4, marginRight: 10}}
                >
                <Icon name="key-outline" size={25} style={{ alignSelf: 'center', color: '#ff7637' }} />
              </TouchableOpacity>
              <TouchableOpacity 
                style={{backgroundColor: '#F1E4CA', borderRadius: 50, padding: 4, marginRight: 10}}
                >
                <Icon name="call-outline" size={25} style={{ alignSelf: 'center', color: '#ff7637' }} />
              </TouchableOpacity>
              <TouchableOpacity 
                style={{backgroundColor: '#F1E4CA', borderRadius: 50, padding: 4, marginRight: 10}}
                >
                <MaterialIcons name="place" size={25} color="#ff7637" /> 
              </TouchableOpacity>
            </View>
          </View>
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
      recommendedGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      },
      Category: {
        paddingHorizontal: 14, 
        padding: 20, 
        marginTop:2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      Column: {
        width: '45%',
        minHeight: 6,
        backgroundColor: '#F8C193',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 16,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#F9F6F6',
        flexDirection: 'row'
      }

    })

export default MyKarrot