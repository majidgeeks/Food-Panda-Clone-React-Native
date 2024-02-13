import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import auth, { firebase } from '@react-native-firebase/auth';




const UpdatePassScreen = () => {
    const [oldPassword, setOldPassword] = useState('');
    const[newPassword, setNewPassword] = useState('');

    const reauthenticate = (oldPassword) => {
     
        let user = firebase.auth().currentUser;
        let cred = firebase.auth.EmailAuthProvider.credential(user.email, oldPassword);
        return user.reauthenticateWithCredential(cred);
    }

    const changePassword = () => {

        reauthenticate(oldPassword).then(() => {

            let user = firebase.auth().currentUser;
        user.updatePassword(newPassword).then(()=> {
            console.log("password changed")

        }).catch((error)=> {
           console.log("error", error.message)
        })

        }).catch((error) => {

            console.log("error", error.message)

        })

        
    }



    return(

        <View>
             <TextInput
            value={oldPassword}
            onChangeText={(text)=>setOldPassword(text)}
            style={styles.textInput}
            placeholderTextColor="grey"
            placeholder="Old Password"
          />

          <TextInput
            value={newPassword}
            onChangeText={(text)=>setNewPassword(text)}
            style={styles.textInput}
            placeholderTextColor="grey"
            placeholder="New Password"
          />

          <TouchableOpacity
            onPress={()=>{changePassword()}}
            style={styles.button}>
            <Text style={styles.buttonText}>UPDATE PASSWORD</Text>
          </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    textInput: {
        borderWidth: 2,
        width: '90%',
        borderRadius: 30,
        backgroundColor: '#000',
        color: '#fff',
    },
    
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


export default UpdatePassScreen;