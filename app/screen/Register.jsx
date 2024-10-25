import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useAuth } from '../context/authContext.js'; // Ensure this context is compatible with Expo
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigation = useNavigation();

  const handleSubmit = async () => {
    setLoading(true);

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      await register(name, email, password);
      navigation.navigate('Local'); // Adjust this to your navigation structure
    } catch (err) {
      Alert.alert('Error', err.message || 'Failed to create an account. Please try again.');
    } finally {
      setLoading(false);
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
            <Text style={styles.title}>Register</Text>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
                required
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
                required
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry
                required
                minLength={6}
            />
            <TextInput
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={styles.input}
                secureTextEntry
                required
                minLength={6}
            />
            <Button
                title={loading ? 'Registering...' : 'Register'}
                onPress={handleSubmit}
                disabled={loading}
            />
            <Text style={styles.link}>
                Already have an account?{' '}
                <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>
                Login
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
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  link: {
    marginTop: 16,
    textAlign: 'center',
  },
  linkText: {
    color: '#FF5722', // Customize your link color
  },
});

export default Register;
