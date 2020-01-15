import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Fire from '../Fire';


const firebase = require('firebase');
require('firebase/firestore');

export default class ServMenu extends React.Component{


    state = {
        food:'',
        price:'',
        descript:''
    };

        handlePost = () => {
            Fire.shared.addPost({food:this.state.food.trim(),price:this.state.price.trim(),descript:this.state.descript.trim()})
            .then( ref => {
                this.setState({ text: '',price:'',description:'', image:null});
            })
            .catch(error => {
            alert(error);
            })
        }

    render(){
        return(
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{fontWeight:'bold'}}>Ketersediaan Menu</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        backgroundColor:'white'
    },
    header:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:32,
        paddingVertical:12,
        borderBottomWidth:1,
        borderBottomColor: '#D8D9DB',
        backgroundColor:'white'

    }
})