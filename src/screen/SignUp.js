import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

import Logo from '../assets/logo.png';
import LoginScreen from './login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const SignUpScreen = ({navigation}) => {
    return(
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>
        <View style={styles.container}>

            <View style = {styles.imgContainer}>
                <Text style= {styles.foodPuppy}>FOOD PANDA</Text>
            <Image style={styles.img} source={Logo} />
            </View>

            <View style = {styles.textInputView}>
                <TextInput style={styles.textInput} placeholderTextColor="grey" placeholder="Full Name" />
                <TextInput style={styles.textInput} placeholderTextColor="grey" placeholder="Email" />
                <TextInput style={styles.textInput} placeholderTextColor="grey" placeholder="Password" />
                <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText} onPress={()=> navigation.navigate("LogIn")}>SIGN UP</Text>
      </TouchableOpacity>
           
            </View>
            <View style = {styles.hungerTextView}>
            <Text style={styles.titleText}>Hey Hungers</Text>
         <Text style={styles.titleDesc}>Grab Your Favourite Food!</Text>
            </View>
            
        </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    //==============main view(container)=====================
    container : {
        backgroundColor: '#B1184E',
        flex: 1,
        justifyContent: "center",    
    },

    //==============first child of main view==============================
    imgContainer:{
        
        flex: 0.30,
        justifyContent: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        
    },

    foodPuppy: {
       color: '#fff',
       fontSize: 20
       
    
    },
    
    img: {
        
        width: '40%',
        height: '100%',
        objectFit: 'contain',
      },

      // =================second child of main view=====================
    textInputView:{
         flex: 0.45,
         justifyContent: 'space-evenly',
         alignItems: 'center',
         
         
    }, 
    //child of text input view
    textInput:{
     borderWidth: 2,  
     width: '90%',
     borderRadius:30,
     backgroundColor:'#000',
    
    },

    button: {
        borderWidth:2,
        alignItems: 'center',
        padding: 10,
        width:'25%',
        backgroundColor:'white',
        borderRadius: 30,

      },

      buttonText:{
       color: 'black',
    //    font: 'bold'
      },
    
      //===================third child of main view=======================
      hungerTextView:{
         flex: 0.20,
        //   backgroundColor: "black",

      },
      titleText: {
            marginTop: 10,
            color: '#fff',
            textAlign: 'center',
            fontSize: 20,
            
          },
          titleDesc: {
            marginTop: 10,
            color: '#fff',
            textAlign: 'center',
            padding: 5,
            fontSize: 15,
            
          },

})


export default SignUpScreen;