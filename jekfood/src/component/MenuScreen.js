import React, { Component } from 'react';
import {
    createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import { View, StyleSheet, Text } from 'react-native';
import Payment from '../component/PaymentScreen';
import Food from '../component/FoodScreen';
import Account from '../component/AccountScreen';

class Beranda extends Component {
  render() {
    return(
        <View>
            <Text>Beranda cuy</Text>
        </View>
    );
  }
}

const BottomTabMaterial = createMaterialBottomTabNavigator({
    Beranda,
    Pembayaran:{
        screen:Payment
    },
    Makanan:{
        screen:Food
    },
    Akun:{
        screen:Account
    }
}, {
    headerMode:'none',
    shifting: false,
    activeColor: '#6200ee',
    inactiveColor: '#828792',
    barStyle: {
        backgroundColor: '#f8f7f9',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderStyle: 'solid',
        borderColor: '#d0cfd0',
    }
},{
    navigationOptions: {
        headerShown: false
    }
});

export default createAppContainer(BottomTabMaterial);

const styles = StyleSheet.create({
content:{
    flex :1,
    alignItems: 'center',
    justifyContent: 'center'
},
button_touch:{
    backgroundColor: '#FEC84B',
    width:200,
    height: 100,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
}
})