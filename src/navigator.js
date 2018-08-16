import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import HomeScreen from './modules/home/home'


export const StackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});
