import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated} from 'react-native';

class SplashScreen extends Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.content}>
                <Text>Akun</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#FEC84B',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoStyle: {

    }
})

export default SplashScreen;