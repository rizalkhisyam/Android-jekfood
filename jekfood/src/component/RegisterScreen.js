import React, { Component } from 'react';
import { Image, View, StyleSheet,Text, TextInput,TouchableOpacity } from 'react-native';
import Logo from '../component/images/Logo_orange.png';

export default class RegisterScreen extends Component {
    static navigationOptions = {headerShown:false};
    render(){
        const {navigate} = this.props.navigation;
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
                <Text style={styles.text_login}>Silahkan lengkapi data diri anda</Text>
            </View>
            <View>
                <Text style={styles.label_email}>Nama lengkap</Text>
            </View>
            <TextInput style={styles.inputan}/>
            <View>
                <Text style={styles.label_email}>E-mail</Text>
            </View>
            <TextInput style={styles.inputan}/>
            <View>
                <Text style={styles.label_email}>Password</Text>
            </View>
            <TextInput style={styles.inputan}/>

            <TouchableOpacity style={styles.button_reg} onPress={() => navigate('Login')}>
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
    height:45,
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
    height: 40,
    backgroundColor:'gray',
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
}

})

