import React from 'react';
import { View, Text, StyleSheet, Image, LayoutAnimation, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Doodle from '../assets/bg_jekfood.png';
import Logo_store from '../assets/store_jekfood.png';
import Notif from '../assets/Notif_order.png';
import Food from '../assets/food_img.png';

import * as firebase from 'firebase';

export default class HomeScreen extends React.Component{
    static navigationOptions = {headerShown:false};
    _isMounted = false;

    state = {
        email:"",
        resto:[],
        displayName:"",
        setVisible:null,
        status:null,
        status_resto:null,
        isOpen:null
    }

    componentDidMount(){
        this._isMounted = true;
        const {email,displayName} = firebase.auth().currentUser
        if(this._isMounted){
            this.setState({ email, displayName });
            this.readRestoName();
            this.readPesanan();
            this.checkStatus();
        }
    }

    readRestoName(){
        firebase.database().ref('Jekfood/Users/'+firebase.auth().currentUser.uid+'/Restaurant')
        .on('value', snapshot => 
        {
            console.log(snapshot.val())
            const data = snapshot.val();
            this.setState({data});
            this.resto_name=data.resto_name
        })
    }

    readPesanan(){
        firebase.database().ref('Jekfood/Pesanan').on('value', snapshot =>
        {
            console.log(snapshot.val())
            const data = snapshot.val();
            this.setState({data});
            this.state.status=data.status
            if(data !== null && this.state.status === true){
                this.setState({setVisible: true})
            }else{
                this.setState({setVisible:false})
            }
        })
    }

    checkStatus(){
        firebase.database().ref('Jekfood/Users/'+firebase.auth().currentUser.uid+'/Restaurant')
        .on('value', snap =>{
            const data = snap.val();
            this.setState({data});
            this.status_resto = data.status_resto
            console.log("ini status resto",this.status_resto)
            if(this.status_resto === true){
                this.setState({isOpen: true})
            }else{
                this.setState({isOpen: false})
            }
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render(){
        LayoutAnimation.easeInEaseOut();
        return(
        <View style={styles.content}>
            
            <Image resizeMode={'cover'} source={Doodle} style={styles.doodle_img}></Image>

            

            <View style={styles.food_img}>
                <Image style={{width:233, height:233}} source={Food}>
                </Image>
            </View>

            <View style={styles.yourName}>
            <Text  style={styles.name_user}> Halo,</Text>
            <Text  style={styles.displayName}>{this.state.displayName}</Text>
            </View>

            <View style={styles.menu_user}>
                    <View style={styles.resto}>
    
                        <View>
                            <Image source={Logo_store}></Image>
                        </View>
                        <View style={{margin:3}}>
                            <Text style={styles.resto_name}>{this.resto_name}</Text>
                        </View>           
                    </View>
                    <View style={styles.operation}>
                        {this.state.isOpen ? 
                            <Text>Buka</Text> : <Text style={{color:'red'}}>Tutup</Text>
                        }
                        
                    </View>
                </View>

            <View style={styles.order}>
                <Text style={styles.order_title}>Pesanan Hari Ini</Text>
            <View>
            </View>
            {this.state.setVisible ?
                <View style={styles.notif_order}>
                <View style={styles.menu_food}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MenuSetting')}>
                        <View style={styles.menu_bar}>
                        
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.menu_button}>
                                    <Image style={styles.img_1} source={Notif}></Image>
                                </View>
                                <View>
                                    <Text style={{fontWeight:'bold'}}>
                                        Nama Driver Jekfood
                                    </Text>
                                    <Text style={{color:'#C1C0C0'}}>
                                        2 menit yang lalu
                                    </Text>
                                </View>
                            </View>
                        
                        </View>
                    </TouchableOpacity>
                </View>
                </View>
                :
                <View><Text>tidak ada</Text></View>
            }
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        alignItems: 'center',
        backgroundColor:'white',
        flex:1
    },
    doodle_img:{
        position:'absolute',
        width: '100%'
    },
    name_user:{
        fontSize: 30,
        marginTop: 20,
        marginLeft:-7,
        fontWeight:'bold',
        color:'white'
    },
    displayName:{
        color:'white',
        fontSize:20
    }
    ,
    menu_user:{
        width:320,
        height:64,
        backgroundColor:'white',
        borderRadius: 11,
        marginTop:75,
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
        alignItems:'center',
        backgroundColor:'white'
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
    food_img:{
        marginTop:80,
        marginRight:-310
    },
    yourName:{
        marginLeft:-210,
        marginTop:-150
    }

})