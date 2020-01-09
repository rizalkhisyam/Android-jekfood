
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import FoodScreen from './screens/FoodScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProfileScreen from './screens/ProfileScreen';

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBqHAu_ywlwkAFqX228XY-ny0PbLNNagpo",
  authDomain: "ojek-apps.firebaseapp.com",
  databaseURL: "https://ojek-apps.firebaseio.com",
  projectId: "ojek-apps",
  storageBucket: "ojek-apps.appspot.com",
  messagingSenderId: "1060042604495",
  appId: "1:1060042604495:web:98fb3ebe6f45e571e6dcba",
  measurementId: "G-0RKVP2D71T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomTabNavigator({
  Beranda:{
    screen:HomeScreen,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor}></Ionicons>
    }
  },
  Pembayaran:{
    screen:PaymentScreen,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-card" size={24} color={tintColor}></Ionicons>
    }
  },
  Makanan:{
    screen:FoodScreen,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-restaurant" size={24} color={tintColor}></Ionicons>
    }
  },
  Akun:{
    screen:ProfileScreen,
    navigationOptions:{
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-contact" size={24} color={tintColor}></Ionicons>
    }
  }
},{
  tabBarOptions:{
    activeTintColor:'#FEC84B'
  }
}
)

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator({
    Splash: SplashScreen,
    App: AppTabNavigator,
    Auth: AuthStack
  },{
    initialRouteName: "Splash"
  }
  )
)