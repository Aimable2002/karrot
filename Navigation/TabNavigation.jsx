import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../app/screen/Home';
import MyLocal from '../app/screen/MyLocal';
import MyKarrot from '../app/screen/MyKarrot';
import Chat from '../app/screen/chat';
import Conversation from '../app/screen/Conversation';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Local') {
            iconName = 'map-outline';
          } else if (route.name === 'Explore') {
            iconName = 'eye-outline';
          } else if (route.name === 'chat') {
            iconName = 'chatbubble-outline';
          } else if (route.name === 'account'){
            iconName = 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        // activeTintColor: 'tomato',
        activeTintColor: '#F9F6F6',
        inactiveTintColor: 'gray',
      })}
    //   tabBarOptions={{
        
    //   }}
    >
      <Tab.Screen name="Home" options={{ headerShown: false }} component={Home} />
      <Tab.Screen name="Local" options={{ headerShown: false }} component={MyLocal} />
      <Tab.Screen name="Explore" options={{ headerShown: false }} component={Home} />
      <Tab.Screen name="chat" options={{ headerShown: false }} component={Conversation} />
      <Tab.Screen name="account" options={{ headerShown: false }} component={MyKarrot} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
