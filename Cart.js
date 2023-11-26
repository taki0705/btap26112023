import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Cart = () => {
   const navigation=useNavigation();
        const [quantity, setQuantity] = useState(0);
      const incrementQuantity = () => {
      setQuantity(quantity + 1);
        };
        const decrementQuantity = () => {
          if (quantity > 0) {
            
      setQuantity(quantity - 1);
          }};

          const [quantity2, setQuantity2] = useState(0);
          const incrementQuantity2 = () => {
            setQuantity2(quantity2 + 1);
            };
            const decrementQuantity2 = () => {
              if (quantity2 > 0) {
                
                setQuantity2(quantity2 - 1);
              }};

              const [quantity3, setQuantity3] = useState(0);
          const incrementQuantity3 = () => {
            setQuantity3(quantity3 + 1);
            };
            const decrementQuantity3 = () => {
              if (quantity3 > 0) {
                
                setQuantity3(quantity3 - 1);
              }};
              
  return (
    <View style={styles.container}>
        <Image style={{ marginTop:57, marginLeft:20,}} source={require('./assets/Arrow1.png')}/>
        <Text   style={{ fontSize:22,marginTop:30, marginLeft:25,}}>Your Cart 👍🏻</Text>
        <View style={styles.image1}>
                <Image style={{width:60,height:60,borderRadius:10,marginTop:10}} source={require('./assets/glass1.png')}/>
                <View style={{justifyContent:'center'}}>
                     <Text style={{fontSize:10,color:'#C2C2C2'}}>Lauren’s</Text>
                     <Text style={{fontSize:12,color:'#494949'}}>Orange Juice</Text>
                     <Text  style={{fontSize:16,color:'#F08F5F'}}>₹ 149</Text>
                </View>
                <View style={{flexDirection:'row',gap:10,alignItems:'center',marginLeft:70,marginTop:20}}>
                <TouchableOpacity onPress={decrementQuantity} >
                <Text style={{fontSize:18,color:'#F08F5F'}}>--</Text>
                 </TouchableOpacity>
                <Text style={{fontSize:18}}>{quantity}</Text>
                <TouchableOpacity onPress={incrementQuantity}>
                <Text style={{fontSize:18,color:'#F08F5F',}}>+</Text>
               </TouchableOpacity>
                </View>
                </View>
                <View style={styles.image1}>
                <Image style={{width:60,height:60,borderRadius:10,marginTop:10}} source={require('./assets/Rectangle32.png')}/>
                <View style={{justifyContent:'center'}}>
                     <Text style={{fontSize:10,color:'#C2C2C2'}}>Lauren’s</Text>
                     <Text style={{fontSize:12,color:'#494949'}}>Orange Juice</Text>
                     <Text  style={{fontSize:16,color:'#F08F5F'}}>₹ 149</Text>
                </View>
                <View style={{flexDirection:'row',gap:10,alignItems:'center',marginLeft:70,marginTop:20}}>
                <TouchableOpacity onPress={decrementQuantity2} >
                <Text style={{fontSize:18,color:'#F08F5F'}}>--</Text>
                 </TouchableOpacity>
                <Text style={{fontSize:18}}>{quantity2}</Text>
                <TouchableOpacity onPress={incrementQuantity2}>
                <Text style={{fontSize:18,color:'#F08F5F',}}>+</Text>
               </TouchableOpacity>
                </View>
                </View>
                <View style={styles.image1}>
                <Image style={{width:60,height:60,borderRadius:10,marginTop:10}} source={require('./assets/Rectangle45.png')}/>
                <View style={{justifyContent:'center'}}>
                     <Text style={{fontSize:10,color:'#C2C2C2'}}>Lauren’s</Text>
                     <Text style={{fontSize:12,color:'#494949'}}>Orange Juice</Text>
                     <Text  style={{fontSize:16,color:'#F08F5F'}}>₹ 149</Text>
                </View>
                <View style={{flexDirection:'row',gap:10,alignItems:'center',marginLeft:70,marginTop:20}}>
                <TouchableOpacity onPress={decrementQuantity3} >
                <Text style={{fontSize:18,color:'#F08F5F'}}>--</Text>
                 </TouchableOpacity>
                <Text style={{fontSize:18}}>{quantity3}</Text>
                <TouchableOpacity onPress={incrementQuantity3}>
                <Text style={{fontSize:18,color:'#F08F5F',}}>+</Text>
               </TouchableOpacity>
                </View>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:22,color:'##363636',marginLeft:30,marginTop:30}}>Total</Text>
                    <Text style={{fontSize:22,color:'#F08F5F',marginTop:30,marginLeft:200}}>₹ 1,527</Text>
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate('CheckOut')} style={styles.proceedButton}>
        <Text style={styles.proceedButtonText}>Proceed to checkout</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row',alignItems:'center',gap:40,marginTop:60,marginLeft:40}}>
      <Image style={{}} source={require('./assets/1.png')}/>
      <Image style={{}} source={require('./assets/2.png')}/>
      <Image style={{}} source={require('./assets/3.png')}/>
      <Image style={{}} source={require('./assets/4.png')}/>
      <Image style={{}} source={require('./assets/5.png')}/>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign:'center'
    
  },
  image1:{
    flexDirection:'row',
    gap:20,
    width:292,
    height:82,
    backgroundColor:'#F8F8FB',
    marginTop:40,
    marginLeft:30,
    borderRadius:20,
   
  },
  proceedButton: {
      backgroundColor: '#F08F5F',
      width: 335,
      height: 62,
      justifyContent: 'center',
      alignItems: 'center',
     borderRadius: 10,
      marginTop: 50,
      marginLeft:20, 
    },
    proceedButtonText: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
    },
 

}
);

export default Cart;
