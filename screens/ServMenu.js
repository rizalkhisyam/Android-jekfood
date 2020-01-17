import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Switch} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Fire from '../Fire';
import setting_menu from '../assets/pict_food.png';

const firebase = require('firebase');
require('firebase/firestore');

export default class ServMenu extends React.Component{

    state = {
        food:'',
        price:'',
        descript:'',
        switchValue:false
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

    render(){
        return(
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{fontWeight:'bold'}}>Ketersediaan Menu</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.menu_food}>
                        <View style={styles.menu_bar}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.menu_button}>
                                    <Image style={styles.img_1} source={setting_menu}></Image>
                                </View>
                                <View style={{width:'60%'}}>
                                    <Text style={{fontWeight:'bold'}}>
                                        Ayam Geprek Bumbu Mercon
                                    </Text>
                                    <Text>
                                        Deskripsi Menu
                                    </Text>
                                </View>
                                <View style={{}}>
                                    <Switch
                                    onValueChange={(switchValue) => this.setState({switchValue})}
                                    value={this.state.switchValue}
                                    />
                                </View>
                            </View>
                        </View>
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
    menu_food:{
        width:'100%',
        height:100,
        backgroundColor:'white',
        marginTop:2,
    },
    menu_bar:{

    },
    img_1:{
        width:60,
        height:60
    },
    menu_button:{
        margin:20
    }
})