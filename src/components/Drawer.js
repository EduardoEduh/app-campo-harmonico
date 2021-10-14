import React from 'react';
import styled from 'styled-components/native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

const Scroll = styled.ScrollView`
    flex: 1;
`;

const Body = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`;

const Logo = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
    background-color: #57A695;
`;

const Imagem = styled.Image`
    flex: 1;
    width: 180px;
    height: 56.5px;
`;

function Drawer(props){

    return(
        <Scroll>
            <Body>
                <Logo>
                    <Imagem source={require('../pages/images/Logo2.png')}/>
                </Logo>
                <DrawerNavigatorItems {...props}
                   labelStyle={{fontSize: 15}}
                   itemsContainerStyle={{marginTop:12}}
                   itemStyle={{marginTop: 12}}
                />
            </Body>
        </Scroll>
    );
};

export default Drawer;