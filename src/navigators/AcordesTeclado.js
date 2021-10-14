import { createStackNavigator } from 'react-navigation-stack';
import TecladoAcordes from '../pages/TecladoAcordes';

const AcordesTeclado = createStackNavigator({
    TecladoAcordes:{
        screen: TecladoAcordes
    }
});


export default AcordesTeclado;