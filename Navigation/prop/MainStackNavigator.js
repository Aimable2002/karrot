import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from '../TabNavigation.jsx';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from  '../../app/screen/SplashScreen.js'
import LoadingScreen from '../../app/screen/LoadingScreen.js'

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
                onPress={() => navigation.navigate('NotificationPage')}
                style={{backgroundColor: '#fff', borderRadius: 50, padding: 4, marginRight: 10}}
                >
                <Icon name="notifications-outline" size={25} style={{ alignSelf: 'center', color: '#ff7637' }} />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => navigation.toggleDrawer()}
                style={{backgroundColor: '#fff', borderRadius: 50, padding: 4, marginRight: 10}}
                >
                <Icon name="chatbox-outline" size={25} style={{ alignSelf: 'center', color: '#ff7637' }} />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => navigation.navigate('NotificationPage')}
                style={{backgroundColor: '#fff', borderRadius: 50, padding: 4, marginRight: 10}}
                >
                <Icon name="wallet-outline" size={25} style={{alignSelf: 'center', color: '#ff7637'}} />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => navigation.toggleDrawer()}
                style={{backgroundColor: '#fff', borderRadius: 50, padding: 4, marginRight: 10}}
                >
                <Icon name="person-outline" size={25} style={{ alignSelf: 'center', color: '#ff7637' }} />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => navigation.navigate('NotificationPage')}
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
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
