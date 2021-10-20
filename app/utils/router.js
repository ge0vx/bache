/* eslint-disable prettier/prettier */
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Home} from '../components/screens/home';
import {Profile} from '../components/screens/profile';
import {Login} from '../components/screens/login';
import {Signin} from '../components/screens/signin';
import {Review} from '../components/screens/review';

const MainStack = createStackNavigator({
  Ruta: {
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
  Review: {
    screen: Review,
  },
});

const Navigation = createAppContainer(MainStack);
export {Navigation};
