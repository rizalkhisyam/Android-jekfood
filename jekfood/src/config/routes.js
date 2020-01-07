import React from 'react';

import Home from '../component/HomeScreen';
import Splash from '../component/SplashScreen';​
const routes = {
    home: {
        screen: Splash
    },
    chat: {
        screen: Home
    }
}​
export default routes;