import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class HistoryScreen extends React.Component{

    render(){
        return(
            <View style={styles.content}>
                <View style={styles.nav}>
                    <Text style={{marginTop:35, fontWeight:'bold'}}>Riwayat Pesanan</Text>
                </View>

                <Text>Riwayat Pesanan</Text>
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
    }
})