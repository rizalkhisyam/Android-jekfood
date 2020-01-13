import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class HistoryScreen extends React.Component{

    render(){
        return(
            <View style={styles.content}>
                <Text>Ketersediaan Menu</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})