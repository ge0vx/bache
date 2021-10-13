import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Home} from '../home';

const MainStack = createStackNavigator({
  Mapa: {
    screen: Home,
  },
});

const Navigation = createAppContainer(MainStack);
export {Navigation};
