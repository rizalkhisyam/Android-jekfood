
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/component/LoginScreen';
import Splash from './src/component/SplashScreen';
import Beranda from './src/component/MenuScreen';
import Reg from './src/component/RegisterScreen';

const Navigator = createStackNavigator({
  Home:{
    screen:Home
  },
  Login:{
    screen:Home
  },
  Register:{
    screen:Reg
  },
  Menu:{
    screen:Beranda
  }
},
{
  headerMode: 'none'
}
)


const App = createAppContainer(Navigator);
export default App;
