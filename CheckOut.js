import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { View, StyleSheet } from 'react-native';

const CheckOut = () => {
  return (
    <View style={styles.container}>
    <Image style={{ marginTop:57, marginLeft:20,}} source={require('./assets/Arrow3.png')}/>
    <View style={{flexDirection:'row', alignItems:'center'}}>
    <Text   style={{ fontSize:22,marginTop:30, marginLeft:25,}}>Checkout 💳</Text>
    <View>
    <Text style={{fontSize:20,color:'#25D482', marginTop:10,marginLeft:140,}}>₹ 1,527</Text>
    <Text style={{fontSize:14,color:'#B1B1B1',marginLeft:110,marginTop:15}}>Including GST (18%)</Text>
    </View>
    </View>
    <View style={{flexDirection:'row',width:331,  height:69,marginTop:20,marginLeft:20,}}>
    <View style={styles.leftSide}>
        <Image source={require('./assets/card.png')}/>
        <Text style={styles.text1}>Credit Card</Text>
      </View>
      <View style={styles.rightSide}>
      <Image source={require('./assets/apple.png')}/>
        <Text style={styles.text2}>ApplePay</Text>
      </View>
      </View>
      <Text   style={{ fontSize:16,marginTop:30, marginLeft:25,color:'#3A3C3F',fontWeight:'700'}}>Card Number </Text>
      <View style={{marginLeft:40,flexDirection:'row',alignItems:'center',marginTop:20 ,gap:25}} >
      <Text  style={{ fontSize:16}} >5261   4141   0151   8472 </Text>
      <Image style={{}} source={require('./assets/master.png')}/>
      <Image style={{}} source={require('./assets/card.png')}/>
      </View>
      <Text   style={{ fontSize:16,marginTop:30, marginLeft:25,color:'#3A3C3F',fontWeight:'700'}}>Cardholder name </Text>
      <Text  style={{ fontSize:16,marginLeft:40,marginTop:30}} >Christie Doe    </Text>
      <View style={{flexDirection:'row',marginTop:30, marginLeft:25,gap:60}}>
      <Text   style={{ fontSize:16,color:'#3A3C3F',fontWeight:'700'}}>Expiry date</Text>
      <Text   style={{ fontSize:16,color:'#3A3C3F',fontWeight:'700'}}>CVV / CVC</Text>
      </View>
      <View style={{flexDirection:'row',marginTop:30, marginLeft:25,gap:60}}>
      <Text   style={{ fontSize:16,color:'#424D59'}}>06   /   2024</Text>
      <Text   style={{ fontSize:16,color:'#424D59'}}>915 </Text>
      </View>
      <View style={{width:233,height:40,marginTop:50,justifyContent:'center',marginLeft:60}}>
      <Text style={{ fontSize:15,color:'#B1B1B1'}}>We will send you an order details to your email after the successfull payment</Text>
      </View>
      <TouchableOpacity style={styles.proceedButton}>
       <Image source={require('./assets/lock.png')}/>
        <Text style={styles.proceedButtonText}>Pay for the order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign:'center',
    marginLeft:10,
  },
  leftSide: {
    flexDirection:'row',
    width: '50%',
    backgroundColor: '#25D482',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
    gap:10,
  },
  rightSide: {
    gap:10,
    flexDirection:'row',
    width: '50%',
    backgroundColor: '#fff',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
  },
  text1: {
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight:'700',
  
  },
  text2: {
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight:'700',
  },
  proceedButton: {
    flexDirection:'row',
    gap:10,
    backgroundColor: '#25D482',
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

export default CheckOut;
