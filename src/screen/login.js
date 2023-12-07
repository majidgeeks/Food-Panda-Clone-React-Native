import React from 'react';
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
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const LoginScreen = () => {
  const navigation = useNavigation();

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
            style={styles.textInput}
            placeholderTextColor="grey"
            placeholder="Username"
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor="grey"
            placeholder="Password"
          />
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() =>
                navigation.navigate('Home', {
                  screen: 'Dashboard',
                })
              }>
              LOG IN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{fontSize: 15, color: 'white'}}>
              Dont Have Account?
              <Text
                style={{color: 'blue', fontWeight: 'bold'}}
                onPress={() => navigation.navigate('SignUp')}>
                Sign Up
              </Text>
            </Text>
          </TouchableOpacity>
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

export default LoginScreen;

// export default function LoginScreen() {
//   return (
//     <View style={styles.containerLogin}>
//       <View style= {{flex: 0.5}}>
//         <Image style={styles.img} source={Logo} />
//         <Text style={styles.titleText}>Foodi</Text>
//         <Text style={styles.titleDesc}>Grab Your Favourite Food!</Text>
//       </View>

//       <View style={{flex : 0.5}}>
//         <KeyboardAvoidingView
//           behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//           style={styles.container}>
//           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//             <View style={styles.inner}>
//               <TextInput placeholder="Username" style={styles.textInput} />
//               <TextInput placeholder="Password" style={styles.textInput} />
//               <TouchableOpacity
//                 style={{
//                   width: 100,
//                   height: 50,
//                   borderWidth: 1,
//                   borderColor: '#121212',
//                 }}>
//                 <Text style={{color: '#fff'}}>click</Text>
//               </TouchableOpacity>
//               {/* <View style={styles.btnContainer}> */}
//               {/* <Button title="Submit" onPress={() => null} >Submit</Button> */}
//               {/* </View> */}
//             </View>
//           </TouchableWithoutFeedback>
//         </KeyboardAvoidingView>
//       </View>

//       {/* <View>
//           <View style={{marginTop: 10}}>
//             <TextInput
//               style={styles.inputText}
//               placeholder="Enter Your Email!"></TextInput>
//           </View>
//           <View style={{marginTop: 10}}>
//             <TextInput
//               style={styles.inputText}
//               placeholder="Enter Your Password"></TextInput>
//           </View>
//         </View> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   containerLogin: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItem: 'center',

//     backgroundColor: '#B1184E',
//     width: '100%',
//   },
//   img: {
//     width: '50%',
//     height: 300,
//     borderWidth: 1,
//     objectFit: 'contain',
//   },
//   titleText: {
//     marginTop: 10,
//     color: '#fff',
//     textAlign: 'center',
//     width: '60%',
//   },
//   titleDesc: {
//     marginTop: 10,
//     color: '#fff',
//     textAlign: 'center',
//     padding: 5,
//   },

//   //    KeyboardAvoidingView
//   container: {
//     flex: 1,
//   },
//   inner: {
//     width: '100%',
//     padding: 24,
//     flex: 1,
//     justifyContent: 'space-evenly',
//     borderWidth: 2,
//   },

//   textInput: {
//     height: 50,
//     width: '100%',
//     borderColor: '#fff',
//     borderBottomWidth: 1,
//     marginBottom: 36,
//   },
//   btnContainer: {
//     backgroundColor: 'white',
//     marginTop: 12,
//     width: '100%',
//     height: 20,
//     color: 'white',
//   },
// });
