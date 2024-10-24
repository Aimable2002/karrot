import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const Notification = () => {
  return (
    <View styles={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
        <Text style={{fontSize: 25}}>Notification</Text>
        <MaterialIcons name="delete" size={40} color="gray" />
      </View>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <MaterialIcons name="delete" size={30} color="orange" />
            <Text>Welcome to karrot</Text>
          </View>
          <MaterialIcons name="close" size={24} color="black" />
        </View>
        <View style={styles.header}>
          <Text style={{padding: 1, fontSize: 14}}>All Our features are not open for use for now you can post or buy anytime thank you for choosing karrot</Text>
        </View>
        <View style={styles.header}>
          <Text>10/23/2024 PM</Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
    // paddingTop: 1,
    backgroundColor: '#fff',
  },
  card: {
    paddingHorizontal: 20,
    // marginHorizontal: 2,
    width: '100%',
    // maxWidth: 350,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
  },
  header: {
    padding: 10,
    // borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold'
  },
  cardBody: {

  }

})

export default Notification