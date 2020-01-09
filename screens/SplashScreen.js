import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Logo from '../assets/logo_jekfood.png'
import * as firebase from 'firebase';

export default class SplashScreen extends React.Component{

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'App' : 'Auth')
        })
    }

    render(){
        return(
            <View style={styles.content}>
                <Image source={Logo}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        backgroundColor:'#FEC84B',
        justifyContent:'center',
        alignItems:'center'
    }
})