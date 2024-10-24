import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import { MaterialIcons} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/Ionicons';
import BottomButtons from './ButtomButon';

const OtherKarrot = () => {
  return (
    <View style={styles.container}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#FC9D4F', fontSize: 18}}>My Karrot Shop</Text>
            <View style={{ flexDirection: 'row', marginRight: 15, justifyContent: 'space-between' }}>
                <TouchableOpacity 
                    style={{backgroundColor: '#ff5733', borderRadius: 10, padding: 4, marginRight: 10}}
                    >
                    {/* <Button title='Shop Settings' /> */}
                    <Text style={{ color: 'white', padding: 6, textAlign: 'center', fontSize: 16 }}>Shop Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{marginTop: 4, width: '40%', backgroundColor: '#F8C193', borderRadius: 6}}>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', padding: 4, borderRadius: 10}}>
                <MaterialIcons name="store" size={24} color="#ff7637" />
                <Text style={{marginLeft: 4, color: '#000'}}>Shop Product</Text>
            </TouchableOpacity>
        </View>
        <View style={{marginTop: 10, marginBottom: 10}}>
            <Text style={{marginBottom: 10, color: '#FC9D4F'}}>Support</Text>
            <View style={{flexDirection: 'row', backgroundColor: '#F8C193', alignItems: 'center', padding: 6, borderRadius: 6}}>
                <MaterialIcons name="store" size={24} color="#ff7637" />
                <Text>  Get Support</Text>
            </View>
        </View>
        <Text style={{color: 'red', fontSize: 14}}>Account Status</Text>
        <Text style={{textDecorationLine: 'underline', marginTop: 10, textDecorationColor: 'red', color: 'red'}}>See why you could be banned</Text>

        <View style={{marginTop: 10}}>
            <Text style={{marginBottom: 10, color: '#FC9D4F'}}>Earn with Karrot</Text>
            <View style={{flexDirection: 'row', backgroundColor: '#F8C193', alignItems: 'center', padding: 6, borderRadius: 6}}>
                <MaterialIcons name="attach-money" size={24} color="#ff7637" />
                <Text>  Referral Program</Text>
            </View>
        </View>
        {/* <BottomButtons />  */}
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        // paddingTop: 1,
        backgroundColor: '#fff',
      },
})

export default OtherKarrot