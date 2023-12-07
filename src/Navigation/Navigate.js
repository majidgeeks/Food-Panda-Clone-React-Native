import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screen/login.js';
import FoodDashboard from '../screen/Deshboard.js';
import {Button} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import LogInIcon from 'react-native-vector-icons/dist/AntDesign';
import SignUpScreen from '../screen/SignUp.js';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutUs from '../screen/About.js';
import ContactUs from '../screen/Contact.js';

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
    <Tab.Navigator>
      <Tab.Screen name="About" component={AboutUs} />
      <Tab.Screen name="Contact-Us" component={ContactUs} />
      <Tab.Screen name="Dashboard" component={FoodDashboard} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
