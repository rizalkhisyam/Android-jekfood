import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image,Switch,SafeAreaView, YellowBox} from 'react-native';
import Doodle from '../assets/doodle_jekfood.png';
import Logo_setting from '../assets/setting_logo.png';
import Logo_store2 from '../assets/store_logo.png';
import Logo_logout from '../assets/logout.png';
import * as firebase from 'firebase';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};


export default class ProfileScreen extends React.Component{
    
    state = {
        switchValue:true,
        resto_name:'',
        status:null,
        id_resto:''
    };

    componentDidMount(){
        this.readRestoName();
    }

    readRestoName(){
        firebase.database().ref('Jekfood/Users/'+firebase.auth().currentUser.uid+'/Restaurant')
        .on('value', snapshot => 
        {
            console.log(snapshot.val())
            const data = snapshot.val();
            this.setState({data});
            this.resto_name = data.resto_name
            this.status = data.status_resto
            this.id_resto = data.idResto

        })
    }

    toggleSwitch(value){
        const userData = {
            status_resto: value
        }
        firebase.database().ref('Jekfood/Users/'+firebase.auth().currentUser.uid+'/Restaurant').update({ ...userData})
        this.setState({status: value})
    }

    button(){
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [                
                {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
        );
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render(){
        return(
            <SafeAreaView style={styles.content}>
                <Image resizeMode={'cover'} source={Doodle} style={styles.doodle_img}></Image>

                <View style={styles.profile_banner}>
                    <Text>Profile Screen</Text>
                </View>

                <View style={styles.menu_food}>
                        <View style={styles.menu_bar}>
                        
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.menu_button}>
                                    <Image style={styles.img_1} source={Logo_store2}></Image>
                                </View>
                                <View style={{width:'60%'}}>
                                    <Text style={{fontWeight:'bold'}}>
                                        {this.resto_name}
                                    </Text>
                                </View>
                                <View>
                                    <Switch
                                    onValueChange={(value) => this.toggleSwitch(value) }
                                    value={this.status}
                                    />
                                </View>
                            </View>
                        </View>
                </View>
                <View style={styles.menu_food}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('UpdateResto')}>
                        <View style={styles.menu_bar}>
                        
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.menu_button}>
                                    <Image style={styles.img_1} source={Logo_setting}></Image>
                                </View>
                                <View>
                                    <Text style={{fontWeight:'bold'}}>
                                        Ubah Informasi Restoran
                                    </Text>
                                    <Text style={{color:'#C1C0C0'}}>
                                        Anda dapat mengubah informasi lapak{'\n'}
                                        alamat dan nama restoran
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.menu_food}>
                    <TouchableOpacity onPress={this.signOutUser}>
                        <View style={styles.menu_bar}>
                        
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.menu_button}>
                                    <Image style={styles.img_1} source={Logo_logout}></Image>
                                </View>
                                <View>
                                    <Text style={{fontWeight:'bold'}}>
                                        Logout
                                    </Text>
                                    <Text style={{color:'#C1C0C0'}}>
                                        tombol untuk keluar akun anda
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
    
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
    },
    menu_food:{
        width:'100%',
        backgroundColor:'white',
        marginTop:2,
    },
    notif_order:{
        width: '100%',
        flexDirection:'column'
    },
    menu_bar:{

    },
    img_1:{
        width:45,
        height:45
    },
    menu_button:{
        margin:20
    },
    logout:{
        width:'100%',
        height:70,
        backgroundColor:'white',
        marginTop:5,
        alignItems:'center',
        justifyContent:'center'
    }
})