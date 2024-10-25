import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useAuth } from '../context/authContext.js'; // Ensure the context is adapted for React Native
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await login(email, password);
      navigation.navigate('Local'); // Adjust this to your navigation structure
    } catch (err) {
      Alert.alert('Login Failed', 'Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
        
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Adjust this value based on your header height if needed
            >
                <ScrollView>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    required
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    required
                />
                <Button
                    title={isLoading ? 'Processing...' : 'Login'}
                    onPress={handleSubmit}
                    disabled={isLoading}
                />
                {isLoading && <ActivityIndicator size="small" color="#0000ff" />}
                <Text style={styles.registerText}>
                    Don't have an account?{' '}
                    <Text
                    style={styles.link}
                    onPress={() => navigation.navigate('Register')} // Adjust this to your navigation structure
                    >
                    Register
                    </Text>
                </Text>
                </ScrollView>
        </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 8,
    marginBottom: 16,
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
  },
  link: {
    color: '#FF5733', // Customize your link color
    textDecorationLine: 'underline',
  },
});

export default Login;
