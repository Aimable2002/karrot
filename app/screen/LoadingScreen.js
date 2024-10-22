import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate some loading task (e.g., fetching data)
    setTimeout(() => {
      navigation.replace('TabNavigator'); // Replace with the main app screen
    }, 3000); // 3 seconds delay
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default LoadingScreen;
