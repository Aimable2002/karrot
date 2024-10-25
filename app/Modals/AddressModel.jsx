import React from 'react'
import { Modal, View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';

const AddressModel = ({isAddressModal, setIsAddressModal}) => {

    const [inputValue, setInputValue] = React.useState({ Address: '' });

  const handleChange = (field, text) => {
    setInputValue(prev => ({ ...prev, [field]: text }));
  };
  return (
    <Modal
      transparent={true}
      animationType='slide'
      visible={isAddressModal}
      onRequestClose={() => setIsAddressModal(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => setIsAddressModal(false)}>
            <Text style={{ textAlign: 'right' }}>Close</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, textAlign: 'center', marginBottom: 20 }}>Edit Address</Text>
          {['Address'].map((field) => (
            <TextInput
              key={field}
              value={inputValue[field]}
              onChangeText={(text) => handleChange(field, text)}
              placeholder={field === 'Address' ? 'Enter Address' : null}
              style={{ borderColor: '#ccc', borderWidth: 1, marginBottom: 20, padding: 10, borderRadius: 6 }}
              placeholderTextColor="darkgray"
              keyboardType={field === 'Address' ? 'text' : null}
            />
          ))}
          <View style={{ marginTop: 10 }}>
            <Button title='Confirm' onPress={() => { /* Handle Cash Out logic */ }} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

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
  

export default AddressModel