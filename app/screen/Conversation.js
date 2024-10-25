import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useAuth } from '../context/authContext';
import Chat from './chat';
import { db } from '../../firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import {getAllUsers} from '../service/userService'


const Conversation = () => {
  const { user } = useAuth();
 const navigation = useNavigation(); 
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    if (!user) return;
    const q = query(
      collection(db, 'conversations'),
      where('participants', 'array-contains', user.uid)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedConversations = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setConversations(fetchedConversations);
    });

    return () => unsubscribe();
  }, [user]);


  if (!user) return (
    <View style={styles.elseContainer}>
        <Text style={{marginBottom: 10}}>Please log in to view your chats.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            {/* <Button title='Login' /> */}
            <Text style={styles.buttonText} onPress={() => navigation.navigate('Login')}>Login</Text>
        </TouchableOpacity>
    </View>
  );

  const chatUser = {
    id: user.uid,
    uid: user.uid,
    name: user.displayName || 'Anonymous',
    email: user.email || '',
    createdAt: user.metadata?.creationTime ? new Date(user.metadata.creationTime) : new Date(),
    updatedAt: user.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime) : new Date(),
    darkModeEnabled: false, // Default value
    notificationSettings: {
      email: false,
      push: false,
      sms: false,
    }, // Default all to false
    savedAds: [], // Default empty array
    postedAds: [], // Default empty array
  };

  return (
    <View style={styles.container}>
      <Chat conversations={conversations} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Equivalent to bg-orange-100
  },
  elseContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 20,
    color: '#4093DD'
  }
});

export default Conversation;
