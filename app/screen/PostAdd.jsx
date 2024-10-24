import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';
import { categories } from '../components/Categories';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';

const PostAdd = () => {

  const [selectedValue, setSelectedValue] = useState("Homer");
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.TextStyle}>Title</Text>
          <TextInput style={styles.InputViewText}/>
        </View>
        <View>
          <Text style={styles.TextStyle}>Description</Text>
          <TextInput
            // style={styles.InputViewText} 
            style={styles.textarea}
            multiline
            numberOfLines={5}
            textAlignVertical="top"
          />
        </View>
        <View>
          <Text style={styles.TextStyle}>Price (USh)</Text>
          <TextInput style={styles.InputViewText}/>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
        <Checkbox
          // style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={{marginLeft: 4}}>Price is negotioable</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Checkbox
            // style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text style={{marginLeft: 4}}>New</Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 4}}>
            <Checkbox
            // style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text style={{marginLeft: 4}}>Old</Text>
          </View>
        </View>

        
        <View>
          <Text style={styles.TextStyle}>Title</Text>
          <TextInput style={styles.InputViewText}/>
        </View>

        <View>
          <Text style={styles.TextStyle}>Upload Image</Text>
          <TouchableOpacity>
            <Button title='Upload'/>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            <View style={styles.imageBoder}>
              <MaterialIcons name="cancel" size={30} color="red" />
              {/* <Icon name="notifications-outline" size={25} style={{ alignSelf: 'left', color: '#ff7637' }} /> */}
              <Image 
                source={{ uri: 'https://downloadr2.apkmirror.com/wp-content/uploads/2023/02/30/63ec3579b1618.png' }} 
                style={{ width: 100, height: 100, resizeMode: 'contain', padding: 4 }} // Add styles as needed
              />
            </View>
          </View>
        </View>

        <View style={{height: 100, marginTop: 10}}>
          <Text style={styles.TextStyle}>Category</Text>
        <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Pick your favorite Simpson" value="" enabled={false} />
        {categories.map((categ) => (

          <Picker.Item key={categ.name} label={categ.name} value={categ.name} />
        ))}
      </Picker>
        </View>
        
      </View>
      <View style={{marginTop: 150}}>
      <TouchableOpacity>
                          <Button 
                            title='Post '
                          />
                        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 40}}></View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // paddingTop: 1,
    backgroundColor: '#fff',
  },
  imageBoder: {
    width: '40%',
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'orange'
  },
  textarea: {
    height: 120, // Adjust height based on number of rows
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlignVertical: 'top', // Ensures text starts at the top
  },
  card: {
    paddingHorizontal: 20,
    // marginHorizontal: 2,
    width: '100%',
    // maxWidth: 350,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
  },
  checkbox: {
    // margin: 8,
    marginTop:20
  },
  checkbox2: {
    margin: 8,
    marginTop:10
  },
  checkbox2Label: {
    margin: 8,
    marginTop:60
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60
  },
  checkboxContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60
  },
  subContainer: {
    paddingHorizontal: 14,
    marginTop: 20,
    marginBottom: 40
  },
  InputViewText: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10
  },
  TextStyle: {
    marginBottom: 10,
    marginTop: 10
  },
  label: {
    // marginBottom: 10,
  },
  picker: {
    height: 10,
    width: '100%',
  },
  selectedText: {
    marginTop: 20,
    fontSize: 18,
  },
})

export default PostAdd;
