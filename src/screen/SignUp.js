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

import Logo from '../assets/logo.png';
import LoginScreen from './login';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('LogIn');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Text style={styles.foodPuppy}>FOOD PANDA</Text>
          <Image style={styles.img} source={Logo} />
        </View>

        <View style={styles.textInputView}>
          <TextInput
            value={name}
            onChangeText={txt => setName(txt)}
            style={styles.textInput}
            placeholderTextColor="grey"
            placeholder="Full Name"
          />

          <TextInput
            value={email}
            onChangeText={txt => setEmail(txt)}
            style={styles.textInput}
            placeholderTextColor="grey"
            placeholder="Email"
          />

          <TextInput
            value={password}
            onChangeText={txt => setPassword(txt)}
            style={styles.textInput}
            placeholderTextColor="grey"
            placeholder="Password"
          />
        
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity
            onPress={createUser}
            style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{navigation.navigate("LogIn")}}
            style={styles.button}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
          </View>

        </View>
        <View style={styles.hungerTextView}>
          <Text style={styles.titleText}>Hey Hungers</Text>
          <Text style={styles.titleDesc}>Grab Your Favourite Food!</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  //==============main view(container)=====================
  container: {
    backgroundColor: '#B1184E',
    flex: 1,
    justifyContent: 'center',
  },

  //==============first child of main view==============================
  imgContainer: {
    flex: 0.3,
    justifyContent: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  foodPuppy: {
    color: '#fff',
    fontSize: 20,
  },

  img: {
    width: '40%',
    height: '100%',
    objectFit: 'contain',
  },

  // =================second child of main view=====================
  textInputView: {
    flex: 0.45,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  //child of text input view
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

  //===================third child of main view=======================
  hungerTextView: {
    flex: 0.2,
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
});

export default SignUpScreen;
