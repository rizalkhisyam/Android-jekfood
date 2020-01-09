import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';

export default class ProfileScreen extends React.Component{

    signOutUser = () => {
        firebase.auth().signOut();
    }

    render(){
        return(
            <View style={styles.content}>
                <Text>Profile Screen</Text>

                <TouchableOpacity onPress={this.signOutUser}>
                <Text>Log Out</Text>
                </TouchableOpacity>
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