import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class FoodScreen extends React.Component{

    render(){
        return(
            <View style={styles.content}>
                <Text>Food Screen</Text>
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