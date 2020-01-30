import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image, TextInput, YellowBox} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Textarea from 'react-native-textarea';
import * as firebase from 'firebase';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import Fire from '../Fire';
import * as ImagePicker from 'expo-image-picker';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};

export default class EditFood extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            post:[],
            food:'',
            price:'',
            descript:'',
            iamge:null
        };
    }


    componentDidMount(){
        this.getItem();
    }

    getItem(){
        const id = this.props.navigation.getParam('id_post', 'id')
        console.log(id)
        firebase.database().ref('Jekfood/Users/'+firebase.auth().currentUser.uid+'/PostFood/'+id)
        .on('value', snapshot =>{
            const data = snapshot.val();
            console.log(data)
            this.setState({data});
            this.food = data.food
            this.price = data.price
            this.descript = data.descript
            this.image = data.image
        })
    }

    handleUpdate = () => {
        const id = this.props.navigation.getParam('id_post', 'id')
        Fire.shared.updatePost({food:this.state.food.trim(),price:this.state.price.trim(),descript:this.state.descript.trim(), localUri: this.state.image, id:id })
        .then( ref => {
            this.props.navigation.goBack();
            
        })
        .catch(error => {
            alert(error);
        })
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[4,3]
        });

        if(!result.cancelled){
            this.setState({image: result.uri});
        }
    }


    render(){
        return(
            <SafeAreaView style={Styles.container}>
                <View style={Styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
                        <Text style={{fontWeight:'bold'}}>Edit Menu</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={this.pickImage}>
                    <Image style={Styles.prev_img} source={this.image && {uri: this.image}}></Image>
                    </TouchableOpacity>

                    <Text>Nama Makanan</Text>
                    <TextInput style={Styles.input}
                    onChangeText={food => this.setState({ food })}
                    placeholder={this.food}
                    ></TextInput>

                    <Text>Harga Makanan</Text>
                    <TextInput style={Styles.input}
                    onChangeText={price => this.setState({ price })}
                    placeholder={this.price}
                    ></TextInput>

                    <Text>Deskripsi Makanan</Text>
                    <Textarea
                        containerStyle={Styles.textareaContainer}
                        style={Styles.textarea}
                        maxLength={100}
                        onChangeText={descript => this.setState({ descript })} 
                        placeholder={this.descript}
                        placeholderTextColor={'#c7c7c7'}
                        underlineColorAndroid={'transparent'}
                    />
                    <TouchableOpacity style={Styles.btn_update} onPress={this.handleUpdate}>
                        <Text>Update</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const Styles = StyleSheet.create({
    container:{
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
    prev_img:{
        width:227,
        height:150,
        marginTop:10
    },
    input:{
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
    btn_update:{
        width:327,
        height:50,
        backgroundColor:'gainsboro',
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center'
    }
})

