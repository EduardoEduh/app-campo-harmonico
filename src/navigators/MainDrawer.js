import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react';
import HomeStack from '../navigators/HomeStack';
import HomeStack2 from '../navigators/HomeStack2';
import StackProgressoes from '../navigators/StackProgressoes';
import StackRelativos from '../navigators/StackRelativos';
import AcordesViolao from '../navigators/AcordesViolao';
import Conceitos from '../navigators/Conceitos';
import AcordesTeclado from '../navigators/AcordesTeclado';
import Drawer from '../components/Drawer';
import DrawerIcon from '../components/DrawerIcon';
import DrawerIcon2 from '../components/DrawerIcon2';
import DrawerIcon3 from '../components/DrawerIcon3';
import DrawerIcon4 from '../components/DrawerIcon4';
import DrawerIcon5 from '../components/DrawerIcon5';
import DrawerIcon6 from '../components/DrawerIcon6';
import DrawerIcon7 from '../components/DrawerIcon7';



const MainDrawer = createDrawerNavigator({

    Conceitos:{
        screen: Conceitos,
        navigationOptions:{
            drawerLabel: 'Conceitos e um pouco de teoria',
            drawerIcon:()=><DrawerIcon/>
        }
    },

    HomeStack:{
        screen: HomeStack,
        navigationOptions:{
            drawerLabel: 'Campo Harmônico Maior',
            drawerIcon:()=><DrawerIcon2/>
        }
    },

    HomeStack2:{
        screen: HomeStack2,
        navigationOptions:{
            drawerLabel: 'Campo Harmônico Menor',
            drawerIcon:()=><DrawerIcon3/>
        }
    },

    StackProgressoes:{
        screen: StackProgressoes,
        navigationOptions:{
            drawerLabel: 'Progressões',
            drawerIcon:()=><DrawerIcon4/>
        }
    },

    StackRelativos:{
        screen: StackRelativos,
        navigationOptions:{
            drawerLabel: 'Relativos',
            drawerIcon:()=><DrawerIcon5/>
        }
    },

    AcordesViolao:{
        screen: AcordesViolao,
        navigationOptions:{
            drawerLabel: 'Acordes para Violão',
            drawerIcon:()=><DrawerIcon6/>
        }
    },

    AcordesTeclado:{
        screen: AcordesTeclado,
        navigationOptions:{
            drawerLabel: 'Acordes para Teclado',
            drawerIcon:()=><DrawerIcon7/>
        }
    }

},{
    edgeWidth: 250,
    drawerBackgroundColor: '#E6E7E8',
    contentComponent:(props)=><Drawer {...props}/>
    

});

export default MainDrawer;