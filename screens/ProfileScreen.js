import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import Doodle from '../assets/doodle_jekfood.png';
import Logo_store from '../assets/store_jekfood.png';
import * as firebase from 'firebase';

export default class ProfileScreen extends React.Component{
    

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render(){
        return(
            <View style={styles.content}>
                <Image resizeMode={'cover'} source={Doodle} style={styles.doodle_img}></Image>

                <View style={styles.profile_banner}>
                    <Text>Profile Screen</Text>
                </View>

                <View style={styles.resto_option}>
                    <View style={styles.resto_name}>
                        <Image source={Logo_store}></Image>
                    </View>
                    <View style={styles.resto_name}>
                        <Text>Ayam Kaki Gunung</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={this.signOutUser}>
                <Text>Log Out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#EFE8E8'
    },
    doodle_img:{
        position:'absolute',
        width: '100%'
    },
    profile_banner:{
        alignItems:'center',
        marginTop:120,
        width:'100%',
        height:200,
        backgroundColor:'white',
        shadowColor: '#000',
        shadowOffset: {width: 0, height:4},
        shadowOpacity:0.8,
        shadowRadius:4,
        elevation:5,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    resto_option:{
        width:"100%",
        height:65,
        backgroundColor:'white',
        marginTop:10,
        flexDirection:'row',
        alignItems:'center'
    },
    resto_name:{
        margin:10
    }
})