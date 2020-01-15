import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class MenuSetting extends React.Component{

    render(){
        return(
            <View style={styles.content}>
                <Text>Menu setting</Text>
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