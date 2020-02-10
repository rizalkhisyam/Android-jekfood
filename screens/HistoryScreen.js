import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert} from 'react-native';
import *as firebase from 'firebase';

export default class HistoryScreen extends React.Component{

    state={
        switchValue:null,
        switchToko:null
    }

    componentDidMount(){
    // this.readStatus();
    }

    readStatus(){
        firebase.database().ref('Jekfood/TesToko').on('value', snap =>{
            console.log(snap.val())
            const data = snap.val();
            this.setState({data})
            this.state.switchToko=data.status
        })
    }

    toggleSwitch(value){
        const userData = {
            status: value
        }
        firebase.database().ref('Jekfood/TesToko').update({ ...userData})
        this.setState({switchToko: value})
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

    render(){
        return(
            <View style={styles.content}>
                <View style={styles.nav}>
                    <Text style={{marginTop:35, fontWeight:'bold'}}>Riwayat Pesanan</Text>
                </View>

                {/* <Text>Riwayat Pesanan</Text>
                <View style={{}}>
                <Switch
                onValueChange={(value) => this.toggleSwitch(value) }
                value={this.state.switchToko}
                />
                <Text>{ this.state.switchToko? "Buka": "Tutup" }</Text>
                </View>

                <TouchableOpacity style={{width:200,height:50, backgroundColor:'gray'}} onPress={()=> this.button()}>
                    <Text>
                        Test alert
                    </Text>
                </TouchableOpacity> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        backgroundColor:'white',
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
    }
})