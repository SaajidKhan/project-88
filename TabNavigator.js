import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from '../components/AppStackNavigator';
import Exchange from '../screens/Exchange';


export const TabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon :   <Image source={require("../assets/home-icon.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "HomeScreen",
    }
  },
  ExchangeRequest: {
    screen: Exchange,
    navigationOptions :{
      tabBarIcon :<Image source={require("../assets/ads-icon.png")} style={{width:20, height:20,}} />,
      tabBarLabel : "Exchange",
    }
  }
});
