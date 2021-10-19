/* eslint-disable prettier/prettier */
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Home} from '../screens/home';
import {Profile} from '../screens/profile';
import {Login} from '../screens/login';
import {Signin} from '../screens/signin';

const MainStack = createStackNavigator({
  Mapa: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
  Login: {
    screen: Login,
  },
  Signin: {
    screen: Signin,
  },
});

const Navigation = createAppContainer(MainStack);
export {Navigation};
