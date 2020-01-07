import React, { Component } from 'react';
import {
    createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import { 
    View, 
    StyleSheet, 
    Text,
    Image
 } from 'react-native';
import Payment from '../component/PaymentScreen';
import Food from '../component/FoodScreen';
import Account from '../component/AccountScreen';
import Doodle from '../component/images/doodle_jekfood.png';

class Beranda extends Component {
  render() {
    return(
        <View style={styles.content}>
            
            <Image resizeMode={'cover'} source={Doodle} style={styles.doodle_img}></Image>
            <Text  style={styles.name_user}> Halo, User! </Text>
            <View style={styles.menu_user}>

            </View>
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
    alignItems: 'center',
},
doodle_img:{
    position:'absolute',
    width: '100%'
},
name_user:{
    fontSize: 23,
    marginTop: 20
},
menu_user:{
    width:300,
    height:200,
    backgroundColor:'white',
    borderRadius: 4,
    opacity:0.9,
    marginTop:22,
    shadowColor: '#000',
    shadowOffset: {width: 0, height:4},
    shadowOpacity:0.8,
    shadowRadius:4,
    elevation:1
}
})