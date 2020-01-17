import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Platform} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Fire from '../Fire';

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const firebase = require('firebase');
require('firebase/firestore');

export default class UpdateResto extends React.Component{

    state = {
        food:'',
        price:'',
        descript:'',
        location: null,
        errorMessage: null
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

        componentDidMount() {
            if (Platform.OS === 'android' && !Constants.isDevice) {
                this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
                });
            } else {
                this._getLocationAsync();
            }
        }
        
        _getLocationAsync = async () => {
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
                this.setState({
                errorMessage: 'Permission to access location was denied',
                });
            }
        
            let location = await Location.getCurrentPositionAsync({});
            this.setState({ location });
        };

    render(){
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
        }
        return(
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
                    <Text style={{fontWeight:'bold'}}>Ubah Informasi Restoran</Text>
                    </View>

                    <View style={styles.input_content}>
                    <View>
                        <Text style={styles.label_email}>Nama Restoran</Text>
                    </View>

                    <TextInput 
                    style={styles.inputan}
                    placeholder=' Masukkan nama restoran anda'
                    onChangeText={food => this.setState({ food })}
                    value={this.state.text} 
                    autoCapitalize="none"/>

                    <View>
                        <Text style={styles.label_email}>Alamat Restoran</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MapAddress')}>
                        <Text>
                            pilih lewat maps
                        </Text>
                        
                    </TouchableOpacity>
                        <Text>
                            {text}
                        </Text>
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

    },
    input_content:{
        alignItems:'center',
        marginTop:25
    },
    label_email:{
        marginTop:10,
        fontWeight:'bold',
        marginLeft:-164,
        marginBottom:5
    },
    inputan:{
        width:327,
        height:50,
        borderColor: '#707070',
        borderWidth:0.5,
        borderRadius:4
    },
    textareaContainer: {
        width:327,
        height: 180,
        padding: 5,
        backgroundColor: '#F5FCFF',
    },
})