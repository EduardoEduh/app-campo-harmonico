import { createStackNavigator } from 'react-navigation-stack';
import Teoria from '../pages/Teoria';

const Conceitos = createStackNavigator({
    Teoria:{
        screen: Teoria
    }
});


export default Conceitos;