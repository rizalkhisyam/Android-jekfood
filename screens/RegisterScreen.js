import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Logo from '../assets/Logo_orange.png';
import * as firebase from 'firebase';

export default class RegisterScreen extends React.Component{

    state = {
        name:"",
        email: "",
        password: "",
        errorMessage: null
    };

    handleRegister= () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            });
        })
        .catch(error => this.setState({ errorMessage: error.message }));
    }

    render(){
        return(
            <View style={styles.content}>
                <Image style={styles.logo_home} source={Logo}></Image> 
            <View>
                <Text style={styles.wellcome}>Selamat Datang di Jekfood!</Text>
            </View>
            <View>
                <Text style={styles.description}>Buka restoran dan mulailah berjualan</Text>
            </View>

            <View>
            {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}  
            </View>

            <View>
                <Text style={styles.text_login}>Silahkan lengkapi data diri anda</Text>
            </View>
            <View>
                <Text style={styles.label_email}>Nama lengkap</Text>
            </View>
            
            <TextInput 
            style={styles.inputan} 
            autoCapitalize="none" 
            onChangeText= {name => this.setState({ name })} 
            value = {this.state.name}/>

            <View>
                <Text style={styles.label_email}>E-mail</Text>
            </View>

            <TextInput 
            style={styles.inputan} 
            autoCapitalize="none" 
            onChangeText= {email => this.setState({ email })} 
            value = {this.state.email}/>

            <View>
                <Text style={styles.label_email}>Password</Text>
            </View>
            
            <TextInput 
            style={styles.inputan}
            secureTextEntry 
            autoCapitalize="none" 
            onChangeText= {password => this.setState({ password })} 
            value = {this.state.password}/>

            <TouchableOpacity style={styles.button_reg} onPress={this.handleRegister}>
                <Text style={styles.btn_log}>Daftar</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        alignItems:'center',
        marginTop:70
    },
    logo_home:{
    
    },
    wellcome:{
        fontSize:20,
        color: '#707070'
    },
    description:{
        fontSize:14,
        color: '#707070'
    },
    text_login:{
    marginTop: 70,
    marginLeft:-120,
    fontWeight:'bold',
    color: '#707070'
    },
    label_email:{
        marginTop:10,
        marginLeft: -165
    },
    inputan:{
        width:327,
        height:50,
        borderColor: '#707070',
        borderWidth:0.5,
        borderRadius:4
    },
    btn_log:{
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold'
    },
    button_reg:{
        width: 327,
        height: 50,
        backgroundColor:'gray',
        marginTop: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    error:{
        color:'red'
    }
})