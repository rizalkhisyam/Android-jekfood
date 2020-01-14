import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class PaymentScreen extends React.Component{

    render(){
        return(
            <View style={styles.content}>
                <View style={styles.nav}>
                    <Text style={{marginTop:35, fontWeight:'bold'}}>Pembayaran</Text>
                </View>
                <Text>Payment Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        flex:1,
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