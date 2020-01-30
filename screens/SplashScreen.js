import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Logo from '../assets/logo_jekfood.png'
import * as firebase from 'firebase';

export default class SplashScreen extends React.Component{

    state = {
        idResto:'',
        resto_name:'',
        status_resto:null,
        location:0
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp(){
        return Date.now();
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'App' : 'Auth')
            // if(user){
            //     firebase.database().ref('Jekfood/Users/'+firebase.auth().currentUser.uid+'/Restaurant').set({
            //         idResto:this.uid,
            //         resto_name: this.state.resto_name,
            //         location: this.state.location,
            //         status_resto:false,
            //         timestamp:this.timestamp
            //     })
            // }

            if(user){
                const id = firebase.auth().currentUser.uid;
                firebase.database().ref('Jekfood/Users/'+id).on('value', snap =>{
                    const data = (snap.val() !== null);
                    if (!data){
                        firebase.database().ref('Jekfood/Users/'+firebase.auth().currentUser.uid+'/Restaurant').set({
                            idResto:this.uid,
                            resto_name: this.state.resto_name,
                            location: this.state.location,
                            status_resto:false,
                            timestamp:this.timestamp
                        })
                    }
                })
            }
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