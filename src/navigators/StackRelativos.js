import { createStackNavigator } from 'react-navigation-stack';
import Relativos from '../pages/Relativos';


const StackRelativos = createStackNavigator({
    Relativos:{
        screen: Relativos
    }
});


export default StackRelativos;