import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoadingScreen'); // Navigate to the next screen after 2 seconds
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <View style={styles.container}>
        <Image
            source={{uri: 'https://downloadr2.apkmirror.com/wp-content/uploads/2023/02/30/63ec3579b1618.png'}}
            style={styles.logo}
        />
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
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
