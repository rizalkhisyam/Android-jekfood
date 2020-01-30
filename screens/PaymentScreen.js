import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import Coming from '../assets/coming_soon.png'

export default class PaymentScreen extends React.Component{

    render(){
        return(
            <View style={styles.content}>
                <View style={styles.nav}>
                    <Text style={{marginTop:35, fontWeight:'bold'}}>Pembayaran</Text>
                </View>
                <View style={styles.img_coming}>
                <Image source={Coming}></Image>
                </View>
                <Text style={{fontWeight:'bold', fontSize:20}}>We Are Coming Soon!</Text>
                <Text style={{color:'gainsboro'}}>Mohon maaf untuk halaman pembayaran</Text>
                <Text style={{color:'gainsboro'}}>masih dalam tahap pengembangan</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
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
    img_coming:{
        marginTop:100
    }
})