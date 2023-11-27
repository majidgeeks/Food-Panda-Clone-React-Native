
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/login.js';
import FoodDashboard from '../screen/Deshboard.js';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import LogInIcon from 'react-native-vector-icons/dist/AntDesign';



const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: true
  }}>
    

        <Stack.Screen options={({navigation})=> ( {headerRight:()=>
         <Icon onPress={()=> navigation.navigate("Dashboard")} name='menu' size={20}/>,
          headerTitleAlign:'center',
          headerLeft:()=> <LogInIcon name="login" size={20} />
            
          
            
      
        })} name="LogIn" component={LoginScreen} />
    
        <Stack.Screen options={{}} name="Dashboard" component={FoodDashboard} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;