import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Wallet = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20}}>
        <Text style={{fontSize: 25}}>My Wallet</Text>
        <MaterialIcons name="account-balance-wallet" size={34} color="orange" />
      </View>
      <View style={styles.card}>
        <View style={{paddingVertical: 40}}>
          <Text style={{fontSize: 16}}>Current Balance</Text>
          <Text style={{marginTop: 10, color: 'orange'}}>0 RWF</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
        <View style={{borderWidth: 2, width: '45%', borderRadius: 6, borderColor: 'orange'}}>
          <Text style={{padding: 10, textAlign: 'center'}}>Top Up</Text>
        </View>
        <View style={{borderWidth: 2, width: '45%', borderRadius: 6, borderColor: 'orange', backgroundColor: 'orange'}}>
          <Text style={{padding: 10, textAlign: 'center'}}>Withdraw</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
        <TouchableOpacity>
          <Button title='Deposite History' />
        </TouchableOpacity>

        <TouchableOpacity>
          <Button title='Withdraw History' />
        </TouchableOpacity>
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
})

export default Wallet