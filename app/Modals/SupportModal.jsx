import React from 'react';
import { Modal, View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';

const SupportModal = ({ isSupportModal, setIsSupportModal }) => {
  const [inputValue, setInputValue] = React.useState({ Title: '', Description: '', Phone_number: '' });

  const handleChange = (field, text) => {
    setInputValue(prev => ({ ...prev, [field]: text }));
  };

  return (
    <Modal
      transparent={true}
      animationType='slide'
      visible={isSupportModal}
      onRequestClose={() => setIsSupportModal(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => setIsSupportModal(false)}>
            <Text style={{ textAlign: 'right' }}>Close</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, textAlign: 'center', marginBottom: 20 }}>Support Request</Text>
          {['Title', 'Phone_number'].map((field) => (
            <TextInput
              key={field}
              value={inputValue[field]}
              onChangeText={(text) => handleChange(field, text)}
              placeholder={field === 'Title' ? 'Enter Title' : 'Enter Phone Number'}
              style={{ borderColor: '#ccc', borderWidth: 1, marginBottom: 20, padding: 10, borderRadius: 6 }}
              placeholderTextColor="darkgray"
              keyboardType={field === 'Phone_number' ? 'phone-pad' : 'default'}
            />
          ))}
          <TextInput
            value={inputValue.Description}
            onChangeText={(text) => handleChange('Description', text)}
            placeholder='Enter Description'
            style={{ 
              borderColor: '#ccc', 
              borderWidth: 1, 
              marginBottom: 20, 
              padding: 10, 
              borderRadius: 6, 
              height: 100, // Adjust height for 5 rows
              textAlignVertical: 'top' // Align text to the top
            }}
            placeholderTextColor="darkgray"
            multiline={true}
            numberOfLines={5}
          />
          <View style={{ marginTop: 10 }}>
            <Button title='Submit' onPress={() => { /* Handle Submit logic */ }} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default SupportModal;
