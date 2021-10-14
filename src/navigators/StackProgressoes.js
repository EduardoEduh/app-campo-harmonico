import { createStackNavigator } from 'react-navigation-stack';
import Progressoes from '../pages/Progressoes';

const StackProgressoes = createStackNavigator({
    Progressoes:{
        screen: Progressoes
    }
});


export default StackProgressoes;