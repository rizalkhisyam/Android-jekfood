import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, YellowBox} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};

export default class UpdateResto extends React.Component{

    state = {
        resto_name:'',
        descript:'',
        info:'',
        location:0,
        idResto:'',
        restoStatus:null,
        errorMessage: null,
        street:'',
        update:null
    };

    componentDidMount(){
        this.getCurrentLoc();
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp(){
        return Date.now();
    }

    handleUpResto(){
            firebase.database().ref('Jekfood/Users/'+firebase.auth().currentUser.uid+'/Restaurant').update({
                idResto:this.uid,
                resto_name: this.state.resto_name,
                location: this.state.location,
                status_resto:true,
                timestamp:this.timestamp
                
            }).then(ref =>{
                this.props.navigation.goBack();
            })
        }
    
    getCurrentLoc(){
        firebase.database().ref('Jekfood/Users/'+firebase.auth().currentUser.uid+'/Restaurant').on('value', snap =>{
            const data = snap.val();
            if(data !== null){
                this.setState({data});
                this.state.street = data.street
                this.state.location = data.location
            }else{
                this.setState({update: true })
            }
            
        })
    }

    render(){
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
                    onChangeText={resto_name => this.setState({ resto_name })}
                    />

                    <View>
                        <Text style={styles.label_email}>Alamat Restoran</Text>
                    </View>
                    <TouchableOpacity style={styles.maps} onPress={() => this.props.navigation.navigate('MapAddress')}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{margin:5}}> 
                                <Ionicons name="ios-map" size={24}></Ionicons>
                            </View>
                            <View style={{margin:5}}>
                                <Text>
                                pilih lewat maps
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.label_email}>Detail Alamat Restoran</Text>
                    </View>

                    {this.state.update ? 
                    <View style={styles.currentLoc}>
                    <Text style={styles.label_loc}></Text>
                    </View>
                    :
                    <View style={styles.currentLoc}>
                    <Text style={styles.label_loc}>{this.state.street}</Text>
                    </View>
                    }
                    

                    <TouchableOpacity style={styles.button_update} onPress={()=>this.handleUpResto()}>
                        <Text>Update</Text>
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
    button_update:{
        marginTop:100,
        width:327,
        height:50,
        backgroundColor:'gainsboro',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4
    },
    maps:{
        width:327,
        height:50,
        borderRadius:4,
        backgroundColor:'gainsboro',
        justifyContent:'center',
        alignItems:'center'
    },
    currentLoc:{
        height:100,
        width:327,
        borderWidth:0.5,
        borderRadius:4
    },
    label_loc:{

    }
})