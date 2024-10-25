import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from '../TabNavigation.jsx';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from  '../../app/screen/SplashScreen.js'
import LoadingScreen from '../../app/screen/LoadingScreen.js'
import Chat from '../../app/screen/chat.jsx';
import Wallet from '../../app/screen/wallet.jsx';
import Notification from '../../app/screen/Notification.jsx';
import PostAdd from '../../app/screen/PostAdd.jsx';
import Vehicle from '../../app/BackScreen/Vehicle.jsx';
import Electronics from '../../app/BackScreen/Electronics.jsx';
import Sport from '../../app/BackScreen/Sport.jsx';
import Fashion from '../../app/BackScreen/Fashion.jsx';
import ChatRoom from '../../app/BackScreen/ChatRoom.jsx';
import Conversation from '../../app/screen/Conversation.js';
import Login from '../../app/screen/Login.jsx';
import Register from '../../app/screen/Register.jsx';
import SeeProduct from '../../app/BackScreen/SeeProduct.jsx';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='LoadingScreen' component={LoadingScreen} options={{ headerShown: false }}/>
        <Stack.Screen 
        name="TabNavigator"
        component={TabNavigator}
        options={({ navigation }) => ({
            headerTitle: '',
          headerLeft: () => (
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('NotificationPage')}
                    style={{backgroundColor: '#fff', borderRadius: 50, padding: 4, marginLeft: 10}}
                    >
                    <Icon name="notifications-outline" size={25} style={{ alignSelf: 'center', color: '#ff7637' }} />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 15, justifyContent: 'space-between' }}>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Notification')}
                style={{backgroundColor: '#fff', borderRadius: 50, padding: 4, marginRight: 10}}
                >
                <Icon name="notifications-outline" size={25} style={{ alignSelf: 'center', color: '#ff7637' }} />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Chat Room')}
                style={{backgroundColor: '#fff', borderRadius: 50, padding: 4, marginRight: 10}}
                >
                <Icon name="chatbox-outline" size={25} style={{ alignSelf: 'center', color: '#ff7637' }} />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => navigation.navigate('wallet')}
                style={{backgroundColor: '#fff', borderRadius: 50, padding: 4, marginRight: 10}}
                >
                <Icon name="wallet-outline" size={25} style={{alignSelf: 'center', color: '#ff7637'}} />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => navigation.navigate('account')}
                style={{backgroundColor: '#fff', borderRadius: 50, padding: 4, marginRight: 10}}
                >
                <Icon name="person-outline" size={25} style={{ alignSelf: 'center', color: '#ff7637' }} />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Post')}
                style={{backgroundColor: '#fff', borderRadius: 50, padding: 4, marginRight: 10}}
                >
                <Icon name="add-outline" size={25} style={{ alignSelf: 'center', color: '#ff7637' }} />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            backgroundColor: '#ece7e4',
          },
        })}
      />
      <Stack.Screen name='Chat Room' component={Conversation} options={{headerShown: true}} />
      <Stack.Screen name='Notification' component={Notification} options={{headerShown: true}} />
      <Stack.Screen name='wallet' component={Wallet} options={{headerShown: true}} />
      <Stack.Screen name='Post' component={PostAdd} options={{headerShown: true}} />
      <Stack.Screen name='Vehicle' component={Vehicle} options={{headerShown: true}} />
      <Stack.Screen name='Electronics' component={Electronics} options={{headerShown: true}} />
      <Stack.Screen name='Sport' component={Sport} options={{headerShown: true}} />
      <Stack.Screen name='Fashion' component={Fashion} options={{headerShown: true}} />
      <Stack.Screen name='Start Chatting' component={ChatRoom} options={{headerShown: true}} />
      <Stack.Screen name='Login' component={Login} options={{headerShown: true}} />
      <Stack.Screen name='Register' component={Register} options={{headerShown: true}} />
      <Stack.Screen name='View' component={SeeProduct} options={{headerShown: true}} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
