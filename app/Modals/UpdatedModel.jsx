import React from 'react'
import { Modal, View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';


const UpdateModal = ({isEditModal, setIsEditModal}) => {

    const [inputValue, setInputValue] = React.useState({ userName: '', Email: '' });

  const handleChange = (field, text) => {
    setInputValue(prev => ({ ...prev, [field]: text }));
  };


  return (
    <Modal
      transparent={true}
      animationType='slide'
      visible={isEditModal}
      onRequestClose={() => setIsEditModal(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => setIsEditModal(false)}>
            <Text style={{ textAlign: 'right' }}>Close</Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, textAlign: 'center', marginBottom: 20 }}>Edit Details</Text>
          {['userName', 'Email'].map((field) => (
            <TextInput
              key={field}
              value={inputValue[field]}
              onChangeText={(text) => handleChange(field, text)}
              placeholder={field === 'userName' ? 'Enter Username' : 'Enter Email'}
              style={{ borderColor: '#ccc', borderWidth: 1, marginBottom: 20, padding: 10, borderRadius: 6 }}
              placeholderTextColor="darkgray"
              keyboardType={field === 'userName' ? 'text' : 'text'}
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

export default UpdateModal