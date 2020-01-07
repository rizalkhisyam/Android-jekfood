import React, { Component } from 'react';
import { Image, View, StyleSheet, Animated} from 'react-native';
import Logo from '../component/images/logo_jekfood.png';

class SplashScreen extends Component {

    static navigationOptions = {headerShown:false};

    componentDidMount()
    {
        // Animated.timing(
        //     this.fadeAnim, 
        //     {
        //         toValue: 0,
        //         duration: 4000,
        //     }
        // ).start(() => {
        //     this.props.navigation.navigate('Main');
        // });
        setInterval(() => {
        this.props.navigation.navigate('Login'); 
        }, 4000)
            
        
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.content}>
                <Image style={styles.logoStyle} source={Logo} />
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