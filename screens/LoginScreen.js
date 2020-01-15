import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Logo from '../assets/Logo_orange.png';
import Logo_google from '../assets/logo_google.png';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component{
    static navigationOptions = {headerShown:false};
    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const {email,password} = this.state;
        
        firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch(error => this.setState({errorMessage: error.message }));
    };

    render(){
        return(
            <View style={styles.contentainer}>
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
                <Text style={styles.text_login}>Silahkan login untuk melanjutkan</Text>
            </View>

            <View>
                <Text style={styles.label_email}>E-mail</Text>
            </View>

            <TextInput 
            style={styles.inputan}
            autoFocus={true} 
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

            <TouchableOpacity style={styles.button_login} onPress={this.handleLogin}>
                <Text style={styles.btn_log}>Masuk</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button_login_google} onPress={this.handleLogin}>
                <View style={styles.btn_log_google}>
                    <View style={styles.text_log}>
                        <Image style={styles.logo_google} source={Logo_google}></Image>
                    </View>
                    <View style={styles.text_log}>
                        <Text>Masuk menggunakan akun google</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={{flexDirection:'row', marginTop:10}}>
                <View>
                    <Text>Belum punya akun ? silahkan </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={{color:'blue'}}>Daftar disini</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <TouchableOpacity style={styles.button_reg} onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={styles.btn_log}>Daftar</Text>
            </TouchableOpacity> */}
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentainer:{
        flex:1,
        backgroundColor:'white'
    },
    content:{
        alignItems:'center',
        backgroundColor:'white'
    },
    logo_home:{
        marginTop:50
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
        marginLeft: -165,
        fontWeight:'bold'
    },
    inputan:{
        width:327,
        height:50,
        borderColor: '#707070',
        borderWidth:0.5,
        borderRadius:4,
        fontSize:17
    },
    button_login:{
        width:327,
        height: 50,
        backgroundColor: '#FEC84B',
        marginTop: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        
    },
    button_login_google:{
        width:327,
        height: 50,
        backgroundColor: 'white',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        
    },
    btn_log:{
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold'
    },
    btn_log_google:{
        fontSize: 12,
        color: 'black',
    },
    button_reg:{
        width: 327,
            height: 50,
            backgroundColor:'gray',
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4
    },
    error:{
        color: 'red'
    },
    btn_log_google:{
        width: 327,
        height: 50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'gainsboro',
        borderRadius:4
    },
    logo_google:{
        width:30,
        height:30
    },
    text_log:{
        margin:5
    }
    })