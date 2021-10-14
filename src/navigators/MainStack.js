import { createStackNavigator } from 'react-navigation-stack';
import Welcome from '../pages/Welcome';
import MainDrawer from '../navigators/MainDrawer';


const MainStack = createStackNavigator({
    Welcome:{
        screen: Welcome
    },

    MainDrawer:{
        screen: MainDrawer
    }
},{
    defaultNavigationOptions:{
        headerShown: false
    }
});

export default MainStack;