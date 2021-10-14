import React from 'react';
import styled from 'styled-components/native';
import {useFonts} from 'expo-font';
import { StackActions, NavigationActions } from 'react-navigation';

const Body = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #E6E7E8;
`;

const ContainerImage = styled.View`
    flex: 1;
    width: 100%;
    max-height: 100px;
    justify-content: center;
    align-items: center;
`;

const Imagem = styled.Image`
    flex: 1;
    width: 100%;
`;

const Texto = styled.Text`
    font-size: 30px;
    font-family: Surfer
    margin-top: 12px;
`;

const ContainerBotao = styled.View`
    margin-top: 10px;
`;

const Botao = styled.TouchableOpacity`
    width: 65%;
    padding: 12px;
    border-radius: 12px;
    background-color: #57A695;
`;

const AreaBotao = styled.View`
    justify-content: center;
    align-items: center;
`;

const TextoBotao = styled.Text`
    font-size: 20px;
    font-family: Surfer;
    color: #E6E7E8;
`;

const Status = styled.StatusBar``;

function Welcome(props){
    const [ usandoFontes]=useFonts({
        'Surfer': require('../assets/fonts/OriginalSurfer-Regular.ttf')
    });
    if(!usandoFontes){
        return null;
    };

    const IrParaHome = ()=>{

      const resetAction = StackActions.reset({
          index: 0,
          actions:[
              NavigationActions.navigate({routeName: 'MainDrawer'})
          ]
      });
      props.navigation.dispatch(resetAction);
    };

    return(
        <Body>
            <Status hidden={true}/>
            <ContainerImage>
                <Imagem source={require('../images/Logo.png')}/>
            </ContainerImage>
            <Texto>Bem vindo(a)</Texto>
            <ContainerBotao>
                <Botao onPress={IrParaHome}>
                    <AreaBotao>
                        <TextoBotao>Aperte para começar</TextoBotao>
                    </AreaBotao>
                </Botao>
            </ContainerBotao>
        </Body>
    );
};

export default Welcome;