import { createStackNavigator } from 'react-navigation-stack';
import CampoMenor from '../pages/CampoMenor';
import DoMenor from '../pages/CampoMenor/DoMenor';
import DoSustenido from '../pages/CampoMenor/DoSustenido';
import ReMenor from '../pages/CampoMenor/ReMenor';
import ReSustenido from '../pages/CampoMenor/ReSustenido';
import MiMenor from '../pages/CampoMenor/MiMenor';
import FaMenor from '../pages/CampoMenor/FaMenor';
import FaSustenido from '../pages/CampoMenor/FaSustenido';
import SolMenor from '../pages/CampoMenor/SolMenor';
import SolSustenido from '../pages/CampoMenor/SolSustenido';
import LaMenor from '../pages/CampoMenor/LaMenor';
import LaSustenido from '../pages/CampoMenor/LaSustenido';
import SiMenor from '../pages/CampoMenor/SiMenor';



const HomeStack2 = createStackNavigator({
    CampoMenor:{
        screen: CampoMenor
    },

    DoMenor:{
        screen: DoMenor
    },

    DoSustenido:{
        screen: DoSustenido
    },

    ReMenor:{
        screen: ReMenor
    },

    ReSustenido:{
        screen: ReSustenido
    },

    MiMenor:{
        screen: MiMenor
    },

    FaMenor:{
        screen: FaMenor
    },

    FaSustenido:{
        screen: FaSustenido
    },

    SolMenor:{
        screen: SolMenor
    },

    SolSustenido:{
        screen: SolSustenido
    },

    LaMenor:{
        screen: LaMenor
    },

    LaSustenido:{
        screen: LaSustenido
    },

    SiMenor:{
        screen: SiMenor
    }
});


export default HomeStack2;