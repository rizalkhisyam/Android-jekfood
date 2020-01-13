import React from 'react';
import { View, Text, StyleSheet, Image, LayoutAnimation, ScrollView } from 'react-native';
import Doodle from '../assets/doodle_jekfood.png';
import Logo_store from '../assets/store_jekfood.png';
import Logo_order from '../assets/order_logo.png';

import * as firebase from 'firebase';

export default class HomeScreen extends React.Component{
    static navigationOptions = {headerShown:false};
    _isMounted = false;

    state = {
        email:"",
        displayName:""
    }

    componentDidMount(){
        this._isMounted = true;
        const {email,displayName} = firebase.auth().currentUser
        if(this._isMounted){
            this.setState({ email, displayName });
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
      }

    render(){
        LayoutAnimation.easeInEaseOut();
        return(
        <View style={styles.content}>
            
            <Image resizeMode={'cover'} source={Doodle} style={styles.doodle_img}></Image>
            <Text  style={styles.name_user}> Halo, {this.state.displayName}! </Text>
            
            <View style={styles.menu_user}>
                <View style={styles.resto}>

                    <View>
                        <Image source={Logo_store}></Image>
                    </View>

                    <View>
                        <Text style={styles.resto_name}>Ayam Kaki Gunung</Text>
                    </View>

                </View>

                <View style={styles.operation}>
                    <Text>Buka</Text>
                </View>
            </View>
            <View style={styles.order}>
                <Text style={styles.order_title}>Pesanan Hari Ini</Text>
                <View style={styles.order_list}>
                    <View style={styles.order_in}>
                        <View style={styles.order_item}>
                            <View>
                                <Image source={Logo_order}></Image>
                            </View>
                            <View>
                                <Text>Driver Jekfood</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.time_order}>11.20</Text>
                        </View>
                        <View>
                            <Text style={styles.order_detail}>Sentuh untuk lihat detail pesanan</Text>
                        </View>
                    </View>
                    <View style={styles.order_in}>
                    <View style={styles.order_item}>
                            <View>
                                <Image source={Logo_order}></Image>
                            </View>
                            <View>
                                <Text>Driver Jekfood</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.time_order}>11.20</Text>
                        </View>
                        <View>
                            <Text style={styles.order_detail}>Sentuh untuk lihat detail pesanan</Text>
                        </View>
                    </View>
                </View>
            </View>

        </View>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        alignItems: 'center',
    },
    doodle_img:{
        position:'absolute',
        width: '100%'
    },
    name_user:{
        fontSize: 23,
        marginTop: 20
    },
    menu_user:{
        width:350,
        height:200,
        backgroundColor:'white',
        borderRadius: 4,
        opacity:0.9,
        marginTop:22,
        shadowColor: '#000',
        shadowOffset: {width: 0, height:4},
        shadowOpacity:0.8,
        shadowRadius:4,
        elevation:5
    },
    resto:{
        flexDirection:'row',
        marginTop:10,
        padding:10,
        fontSize: 40
    },
    resto_name:{
        fontWeight:'bold'
    },
    operation:{
        alignSelf:'flex-end',
        marginTop:-32,
        marginRight:13
    },
    order:{
        marginTop:20,
        width: '100%',
        alignItems:'center'
    },
    order_title:{
        fontSize: 20,
        fontWeight:'bold'
    },
    order_list:{
        marginTop:10,
        alignItems:'stretch',
        width:'100%'
    },
    order_in:{
        height:60,
        borderColor:'black',
        justifyContent:'center'
    },
    order_item:{
        flexDirection:'row',
        marginLeft:20
    },
    time_order:{
        alignSelf:'flex-end',
        marginTop:-25,
        marginRight:5
    },
    order_detail:{
        fontSize:12,
        color:'gray',
        marginLeft:50
    }
})