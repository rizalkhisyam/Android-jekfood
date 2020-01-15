import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Textarea from 'react-native-textarea';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import Fire from '../Fire';
import * as ImagePicker from 'expo-image-picker';

const firebase = require('firebase');
require('firebase/firestore');

export default class AddMenu extends React.Component{

    // state = {
    //     text:'',
    //     price:'',
    //     description:'',
    //     image: null
    // };

    state = {
        food:'',
        price:'',
        descript:''
    };

    // componentDidMount(){
    //     this.getPhotoPermissions();
    // }

    // getPhotoPermissions = async () => {
    //     if (Constants.platform.android){
    //         const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        
    //         if(status != 'granted'){
    //             alert('We need permisssions to access your camera roll')
    //         }
    //     }
    // };

    // handlePost = () => {
    //     Fire.shared.addPost({text:this.state.text.trim(),price:this.state.price.trim(),description:this.state.description.trim(), loaclUri: this.state.image })
    //         .then( ref => {
    //             this.setState({ text: '',price:'',description:'', image:null});
                
    //         })
    //         .catch(error => {
    //             alert(error);
    //         })
    // }

        handlePost = () => {
            Fire.shared.addPost({food:this.state.food.trim(),price:this.state.price.trim(),descript:this.state.descript.trim()})
            .then( ref => {
                this.setState({ text: '',price:'',description:'', image:null});
            })
            .catch(error => {
            alert(error);
            })
        }

    // pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //         allowsEditing:true,
    //         aspect:[4,3]
    //     });

    //     if(!result.cancelled){
    //         this.setState({image: result.uri});
    //     }
    // }

    render(){
        return(
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{fontWeight:'bold'}}>Tambah Menu</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.input_content}>
                    <View>
                        <Text style={styles.label_email}>Nama Makanan</Text>
                    </View>

                    <TextInput 
                    style={styles.inputan}
                    placeholder='Masukkan nama makanan'
                    onChangeText={food => this.setState({ food })}
                    value={this.state.text} 
                    autoCapitalize="none"/>

                    <View>
                        <Text style={styles.label_email}>Harga Makanan</Text>
                    </View>

                    <TextInput 
                    style={styles.inputan}
                    placeholder='Masukkan harga makanan'
                    onChangeText={price => this.setState({ price })}
                    value={this.state.price} 
                    autoCapitalize="none"/>

                    <View>
                        <Text style={styles.label_email}>Deskripsi Makanan</Text>
                    </View>

                    <Textarea
                        containerStyle={styles.textareaContainer}
                        style={styles.textarea}
                        maxLength={100}
                        placeholder={'Deskripsikan menu makanan anda'}
                        onChangeText={descript => this.setState({ descript })}
                        value={this.state.description}
                        placeholderTextColor={'#c7c7c7'}
                        underlineColorAndroid={'transparent'}
                    />

                    {/* <View>
                        <Text style={styles.label_email}>Upload Foto Makanan</Text>
                    </View>

                    <TouchableOpacity onPress={this.pickImage}>
                        <View style={styles.up_foto}>
                            <View style={styles.img_up}>
                            <Ionicons name='md-camera' size={32}></Ionicons>
                            </View>
                            <View style={styles.img_up}>
                            <Text>Unggah Foto</Text>
                            </View>
                        </View>
                        
                    </TouchableOpacity>

                    <View style={{marginHorizontal:32}}>
                        <Image source={{uri:this.state.image}} style={styles.prev_img}></Image>
                    </View> */}
                </View>

                <TouchableOpacity style={styles.button_done} onPress={this.handlePost}>
                    <Text style={{fontWeight:'bold', fontSize:17}}>Selesai</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        flex:1
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
        marginLeft:-164
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
    textarea: {
        textAlignVertical: 'top',
        height: 170,
        fontSize: 14,
        color: '#333',
    },
    up_foto:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:327,
        height: 50,
        backgroundColor:'gray'
    },
    img_up:{
        margin:10
    },
    button_done:{
        width:'100%',
        height:50,
        backgroundColor:'#FEC84B',
        justifyContent:'center',
        alignItems:'center',
        marginTop:140
    },
    prev_img:{
        width:40,
        height:40
    }
})