import React from 'react';
import { View, Text, StyleSheet, Image, LayoutAnimation } from 'react-native';
import Doodle from '../assets/doodle_jekfood.png'
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component{
    static navigationOptions = {headerShown:false};

    state = {
        email:"",
        displayName:""
    }

    componentDidMount(){
        const {email,displayName} = firebase.auth().currentUser
        this.setState({ email, displayName });
    }

    render(){
        LayoutAnimation.easeInEaseOut();
        return(
        <View style={styles.content}>
            
            <Image resizeMode={'cover'} source={Doodle} style={styles.doodle_img}></Image>
            <Text  style={styles.name_user}> Halo, {this.state.displayName}! </Text>
            <View style={styles.menu_user}>

            </View>
        </View>
        )
    }
}

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
        elevation:5
    }
})