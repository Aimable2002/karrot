import React, {useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Button } from 'react-native';
import { MaterialIcons} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/Ionicons';
import OrderModal from '../Modals/orderModel';

const SeeProduct = ({ route }) => {
  const { productDetails } = route.params;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isOrderModal, setIsOrderModal] = useState(false)

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>{productDetails.title}</Text>
      <Image 
        source={{ uri: productDetails.images[selectedImageIndex] }} 
        style={{ width: '100%', height: 300, borderRadius: 8, marginBottom: 16, resizeMode: 'contain' }} 
      />
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        {productDetails.images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedImageIndex(index)}>
            <Image 
              source={{ uri: image }} 
              style={{ width: 60, height: 60, marginRight: 8, borderRadius: 4, borderWidth: selectedImageIndex === index ? 2 : 0, borderColor: 'orange', resizeMode: 'contain' }} 
            />
          </TouchableOpacity>
        ))}
      </View>
      <Text style={{ fontSize: 20, color: 'orange' }}>{productDetails.price.toLocaleString()} Frw</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 12}}>
        <MaterialIcons name="place" size={15} color="black" /> 
        <Text style={{marginLeft: 4, color: '#909090'}}>{productDetails.location}</Text>
      </View>
      <Text style={{ marginVertical: 8 }}>{productDetails.description}</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <TouchableOpacity 
            style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#00bc47', borderRadius: 6, width: '70%', justifyContent: 'center', paddingVertical: 10}}
            onPress={() => setIsOrderModal(true)}
        >
            <MaterialIcons name="credit-card" size={25} color="black" /> 
            <Text style={{marginLeft: 6}}>Order Now</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Notification')}
                style={{backgroundColor: '#fff', borderRadius: 50, padding: 4, marginRight: 10}}
                >
                <MaterialIcons name="favorite" size={25} style={{ alignSelf: 'center', color: '#ff7637' }} />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Notification')}
                style={{backgroundColor: '#fff', borderRadius: 50, padding: 4, marginRight: 10}}
                >
                <MaterialIcons name="flag" size={25} style={{ alignSelf: 'center', color: '#ff7637' }} />
              </TouchableOpacity>
        </View>
      </View>
      {productDetails?.seller && (
        <View style={{ padding: 16, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Seller Information</Text>
          <Text>{productDetails.name}</Text>
          <Text>{productDetails.email}</Text>
        </View>
      )}
        <OrderModal isOrderModal={isOrderModal} setIsOrderModal={setIsOrderModal} />
      <View style={{marginBottom: 20, paddingVertical: 22}}></View>
    </ScrollView>
  );
};

export default SeeProduct;
