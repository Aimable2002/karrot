import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>My App</Text>
      <TouchableOpacity>
        <Icon name="search" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeHeader;
