import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import setting_menu from '../assets/menu_v1.png';
import available_menu from '../assets/menu_v2.png';
import add_menu from '../assets/menu_v3.png';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Content = createAppContainer({

})

export default class FoodScreen extends React.Component{

    render(){
        return(
            <View style={styles.content}>
                <View style={styles.nav}>
                    <Text style={{marginTop:35, fontWeight:'bold'}}>Menu</Text>
                </View>
                <View style={styles.menu_food}>
                    <TouchableOpacity>
                        <View style={styles.menu_bar}>
                        
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.menu_button}>
                                    <Image style={styles.img_1} source={setting_menu}></Image>
                                </View>
                                <View>
                                    <Text style={{fontWeight:'bold'}}>
                                        Pengaturan Menu
                                    </Text>
                                    <Text>
                                        Kelola menu makanan dan kategori{'\n'}dagangan anda disini
                                    </Text>
                                </View>
                            </View>
                        
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.menu_food_2}>
                    <TouchableOpacity>
                        <View style={styles.menu_bar}>
                        
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.menu_button}>
                                    <Image style={styles.img_1} source={available_menu}></Image>
                                </View>
                                <View>
                                    <Text style={{fontWeight:'bold'}}>
                                        Ketersediaan Menu
                                    </Text>
                                    <Text>
                                        Anda dapat mengetahui persediaan menu{'\n'}dan memperbarui statusnya
                                    </Text>
                                </View>
                            </View>
                        
                        </View>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.menu_food_3}>
                    <TouchableOpacity>
                        <View style={styles.menu_bar}>
                        
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.menu_button}>
                                    <Image style={styles.img_1} source={add_menu}></Image>
                                </View>
                                <View>
                                    <Text style={{fontWeight:'bold'}}>
                                        Tambah Menu
                                    </Text>
                                    <Text>
                                        Kelola menu makanan dan kategori{'\n'}dagangan anda disini
                                    </Text>
                                </View>
                            </View>
                        
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        alignItems:'center'
    },
    nav:{
        width:'100%',
        height:70,
        backgroundColor:'white',
        alignItems:'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height:4},
        shadowOpacity:0.8,
        shadowRadius:4,
        elevation:5
    },
    menu_food:{
        width:'100%',
        height:100,
        backgroundColor:'white',
        marginTop:2,
    },
    menu_food_2:{
        width:'100%',
        height:100,
        backgroundColor:'white',
        marginTop:2
    },
    menu_food_3:{
        width:'100%',
        height:100,
        backgroundColor:'white',
        marginTop:2
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