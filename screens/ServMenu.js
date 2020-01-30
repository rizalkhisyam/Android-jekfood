import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Switch, FlatList, YellowBox} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';

export default class ServMenu extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            postt:'',
            price:'',
            descript:'',
            switchValue:null,
            post:[]
        };

        // this.readUserData = this.readUserData.bind(this);
        this.getItem = this.getItem.bind(this);
    }

    componentDidMount(){
        this.getItem();
    }

    // readUserData = () => {
    //     firebase
    //     .database()
    //     .ref('Jekfood/Users/'+firebase.auth().currentUser.uid+'/PostFood')
    //     .on("child_added", snapshot => {
    //         const data = snapshot.val();
    //         if (data) {
    //             this.setState(prevState => ({
    //             post: [data, ...prevState.post]
    //             }))
    //         }
    //     })
    // }

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

    setValue(){
        if(this.state.switchValue == true){
            firebase.database().ref('Jekfood/Users/'+firebase.auth().currentUser.uid+'/PostFood/')
        }
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
                
                <FlatList
                data={this.state.post}
                keyExtractor={this.keyExtractor}
                renderItem={({item}) => {
                    return(
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
                                        {item.descript}
                                    </Text>
                                </View>
                                <View style={{}}>
                                    <Switch
                                    onValueChange={(switchValue) => this.setState({switchValue})}
                                    value={item.status}
                                    />
                                </View>
                            </View>
                        </View>
                </View>
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