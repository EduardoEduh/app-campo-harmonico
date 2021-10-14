import { createStackNavigator } from 'react-navigation-stack';
import CampoMaior from '../pages/CampoMaior';
import DoMaior from '../pages/CampoMaior/DoMaior';
import DoSustenido from '../pages/CampoMaior/DoSustenido';
import ReMaior from '../pages/CampoMaior/ReMaior';
import ReSustenido from '../pages/CampoMaior/ReSustenido';
import MiMaior from '../pages/CampoMaior/MiMaior';
import FaMaior from '../pages/CampoMaior/FaMaior';
import FaSustenido from '../pages/CampoMaior/FaSustenido';
import SolMaior from '../pages/CampoMaior/SolMaior';
import SolSustenido from '../pages/CampoMaior/SolSustenido';
import LaMaior from '../pages/CampoMaior/LaMaior';
import LaSustenido from '../pages/CampoMaior/LaSustenido';
import SiMaior from '../pages/CampoMaior/SiMaior';

const HomeStack = createStackNavigator({
    CampoMaior:{
        screen: CampoMaior
    },
//Abixo, Screens do campo harmônico maior
    DoMaior:{
        screen: DoMaior
    },

    DoSustenido:{
        screen: DoSustenido
    },

    ReMaior:{
        screen: ReMaior
    },

    ReSustenido:{
        screen: ReSustenido
    },

    MiMaior:{
        screen: MiMaior
    },

    FaMaior:{
        screen: FaMaior
    },

    FaSustenido:{
        screen: FaSustenido
    },

    SolMaior:{
        screen: SolMaior
    },

    SolSustenido:{
        screen: SolSustenido
    },

    LaMaior:{
        screen: LaMaior
    },

    LaSustenido:{
        screen: LaSustenido
    },

    SiMaior:{
        screen: SiMaior
    }
});

export default HomeStack;