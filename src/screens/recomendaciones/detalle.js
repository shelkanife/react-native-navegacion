import React, { useState } from 'react';

 import {
   StyleSheet,
   View,
   Text,
   TextInput,
   TouchableOpacity,
   ToastAndroid,
  Image,
  Button,
  Container,
  Content,
  
  Input,
  Item,
  Label,
  Textarea,
  Icon,
  Header,
  Left,
  Body,
  Title,
} from 'react-native';

 
 

 
const RDetalle = ({navigation,route}) => {

    const [val, SetValue]=useState('');
    const [submitted, SetSubmitted]=useState(false);
    const onPressHandler = ()=>{
      if(val.length > 3){
        SetSubmitted(!submitted);
      } else {
        
      ToastAndroid.show('Ingrese una cantidad valida',
      ToastAndroid.LONG
      )
      }
      
    }

   return (
    <View style={styles.container}>
        
       <Text style={styles.title}>
         
        Recomendaciones
      </Text>

      <Text style={styles.text}>Crear presupuesto</Text>
      <Image
        style={styles.image} 
        source={require('./images/icon.png')}
        resizeMode='stretch'
        />
     
    
      <TextInput style={styles.input}
        placeholder='Presupuesto'
        onChange={(value)=>SetValue(value)}
        keyboardType='default'
        maxLength={7}
      />
     <Text style={styles.text}>
        Compras
      </Text>        
      
     <Text style={styles.textc}>
        Precio M.N.
      </Text>
      
     
      <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.5}
      >
        <Text style={styles.textb}>
          {submitted? 'Borrar' : 'Pagar'}
        </Text>
       </TouchableOpacity>
      
       <Text style={styles.textp}>
        Pago de servicios
      </Text>   
        
       <TextInput style={styles.input2}
        placeholder='Buscar servicio'
        keyboardType='default'
        maxLength={20}
      />
       
      
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#E5E5E5',
    // alignItems: 'center',
     //justifyContent: 'center',
   },
   text: {
     color: '#151515',
     fontSize: 20,
     margin: 10,
   },
   textb: {
     color: '#ffffff',
     fontSize: 20,
     margin: 10,
     left: 20,
   },
   textc: {
    width: 133,
    left: 20,
    fontSize: 20,
   },
    textp: {
     color: '#151515',
     fontSize: 20,
     margin: 10,
    top: 50,
   },
   title:{
     color: '#ffffff',
     fontSize: 40,
     fontWeight: '500',
     margin: 10,
     backgroundColor: '#5EC2E1',
     width: 395,
     height: 51,
     left: -10,
     top: -10,

   },
   button:{
    backgroundColor:'#1E63CB',
    borderWidth: 1,
    borderRadius: 12,
    borderColor:'#1E63CB',
     width: 125,
     height: 50,
     top: 15,
     left: 10
   },
   
   input:{
    width: 238,
    height: 43,
    left: 12,
    borderColor: '#646464',
    fontSize: 20,
    marginBottom: 10,
   },
   input2:{
    width: 238,
    height: 43,
    left: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#646464',
    fontSize: 20,
    marginBottom: 10,
    top: 50,
   },
   
   presico:{
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
   image: {
     width: 25,
     height: 25,
     left: 180,
     top: -35,
  },
 });
 
 export default RDetalle;