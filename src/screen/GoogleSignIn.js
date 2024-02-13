import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert, 
} from 'react-native';

import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


GoogleSignin.configure({
    webClientId: '637878582535-4nl9j7u0a397s5m9aud3nu8sla3numn5.apps.googleusercontent.com',
});
const GoogleSigninScreen = () => {
    useEffect(()=> {
     
        
    },[])

    async function onGoogleButtonPress() {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        console.log('idToken==>',idToken)
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      }


    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text>SIGN IN WITH GOOGLE</Text>

            <TouchableOpacity
            onPress={()=>onGoogleButtonPress()}
            style={styles.button}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={''}
            style={styles.button}>
            <Text style={styles.buttonText}>SIGN OUT</Text>
          </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        alignItems: 'center',
        padding: 10,
        width: '25%',
        backgroundColor: 'white',
        borderRadius: 30,
      },
    
      buttonText: {
        color: 'black',
        //    font: 'bold'
      },
})


export default GoogleSigninScreen;