import MenuSlider from "../components/Menu";
import * as React from 'react';
import {View} from 'react-native';


const FoodDashboard = (navigation) => {

    return(

        <View style={{flex:1}}>

            <View style={{flex: 1}}>
                <MenuSlider/>
            </View>
            {/* <View style={{flex: 0.40}}></View>
            <View style={{flex: 0.20}}></View> */}
            

        </View>
           
    )
}


export default FoodDashboard;