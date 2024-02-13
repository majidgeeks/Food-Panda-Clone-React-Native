import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screen/login.js';
import FoodDashboard from '../screen/Deshboard.js';
import {Button} from 'react-native';
import Entypo12 from 'react-native-vector-icons/Entypo';
import Info from 'react-native-vector-icons/AntDesign';
import Contact from 'react-native-vector-icons/AntDesign';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons'

import SignUpScreen from '../screen/SignUp.js';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutUs from '../screen/About.js';
import ContactUs from '../screen/Contact.js';
import GoogleSigninScreen from '../screen/GoogleSignIn.js';
import UpdatePassScreen from '../screen/UpdatePass.js';


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

// function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: true,
//         }}>
//         <Stack.Screen options={{}} name="SignUp" component={SignUpScreen} />

//         <Stack.Screen
//           options={({navigation}) => ({
//             headerRight: () => (
//               <Icon
//                 onPress={() => navigation.navigate('Dashboard')}
//                 name="menu"
//                 size={20}
//               />
//             ),
//             headerTitleAlign: 'center',

//             headerLeft: () => <LogInIcon name="login" size={20} />,
//           })}
//           name="LogIn"
//           component={LoginScreen}
//         />

//         <Stack.Screen options={{}} name="Dashboard" component={FoodDashboard} />
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: "blue",
      tabBarInactiveTintColor: "grey"
    }}>
      <Tab.Screen name="About" component={AboutUs} options={{
        tabBarIcon:({color, size})=>{
          
          // return <AntDesign name= 'info' color={color} size={size} />
          return <Info name= 'infocirlceo' color={color} size={size} />
      }
      }} />
      <Tab.Screen name="Contact-Us" component={ContactUs} options={{
        tabBarIcon:({color, size})=>{
         return <Contact name='contacts' color={color} size={size} />
        }
      }} />
      <Tab.Screen name="Dashboard" component={FoodDashboard} options={{
        tabBarIcon:({color, size})=>{
          return <Menu name='menu' color={color} size={size}/>
        }
      }} />
    </Tab.Navigator>
  );
}


function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="SignUp" component={SignUpScreen} />
      <Drawer.Screen name="LogIn" component={LoginScreen} />
    </Drawer.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="LogIn" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="GoogleSignIn" component={GoogleSigninScreen} />
        <Stack.Screen name="UpdatePassword" component={UpdatePassScreen} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
