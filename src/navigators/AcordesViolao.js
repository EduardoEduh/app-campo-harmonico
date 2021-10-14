import { createStackNavigator } from 'react-navigation-stack';
import ViolaoAcordes from '../pages/ViolaoAcordes';

const AcordesViolao = createStackNavigator({
    ViolaoAcordes:{
        screen: ViolaoAcordes
    }
});


export default AcordesViolao;