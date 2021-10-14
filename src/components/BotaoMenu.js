import React from 'react';
import styled from 'styled-components/native';

const Body = styled.View`
    flex: 1;
`;

const Botao = styled.TouchableOpacity`
    flex: 1;
    width: 80px;
 
`;

const AreaBotao = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  
`;

const Background = styled.ImageBackground`
    flex: 1;
    width: 75%;
   
`;

function BotaoMenu(props){

    const AbrirMenu = ()=>{
        props.navigation.openDrawer();
    };

    return(
        <Body>
            <Botao onPress={AbrirMenu}>
                <AreaBotao>
                    <Background source={require('../images/Menu.png')}></Background>
                </AreaBotao>
            </Botao>
        </Body>
    );
};

export default BotaoMenu;