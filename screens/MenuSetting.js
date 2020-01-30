import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, YellowBox, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};

export default class MenuSetting extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            postt:'',
            price:'',
            descript:'',
            switchValue:false,
            post:[]
        };

        this.getItem = this.getItem.bind(this);
    }

    componentDidMount(){
        this.getItem();
    }

    getItem(){
        const getI = firebase.database().ref('Jekfood/Users/'+firebase.auth().currentUser.uid+'/PostFood')
        getI.on('value',(snapshot)=>{
            let item =[];
            snapshot.forEach((child)=>{
                item.push({
                    id:child.key,
                    food:child.val().food,
                    descript:child.val().descript,
                    price:child.val().price,
                    status:child.val().switchValue,
                    image:child.val().image
                })
            })
            this.setState({post: item });
        })
    }

    keyExtractor = (item) => item.id;

    render(){
        return(
            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{fontWeight:'bold'}}>Pengaturan Menu</Text>
                    </TouchableOpacity>
                </View>
                
                <FlatList
                data={this.state.post}
                keyExtractor={this.keyExtractor}
                renderItem={({item}) => {
                    return(
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('EditFood',{id_post:item.id})}>
                    <View style={styles.menu_food}>
                        <View style={styles.menu_bar}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={styles.menu_button}>
                                    <Image style={styles.img_1} source={item.image && {uri:item.image}}></Image>
                                </View>
                                <View style={{width:'60%'}}>
                                    <Text style={{fontWeight:'bold'}}>
                                        {item.food}
                                    </Text>
                                    <Text>
                                        Klik untuk edit menu
                                    </Text>
                                </View>
                                <View style={{}}>
                                <Ionicons name="ios-create" size={24}></Ionicons>
                                </View>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                        )
                }}
                >
                    
                </FlatList>
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