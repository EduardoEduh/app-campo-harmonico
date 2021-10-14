import React from 'react';
import styled from 'styled-components/native';
import BotaoMenu from '../components/BotaoMenu';
import Logo from '../components/Logo';
import {useFonts} from 'expo-font';
import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob';

const Body = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #57A695;
`;

const Background = styled.ImageBackground`
    flex: 1;
    width: 100%;
    max-height: 100%;
    align-items: center;
`;

const ContainerTextos = styled.View`
    flex: 1;
    width: 75%;
    max-height: 14%;
    justify-content: center;
    align-items: center;
    border: 2px solid #E6E7E8;
    border-radius: 15px;
    background-color: #E6E7E8;
    margin-top: 7%;
`;

const Texto = styled.Text`
    font-size: 17px;
    font-family: Mont-Serrat;
    color: black;
`;

const Texto2 = styled.Text`
    font-size: 17px;
    font-family: Mont-Serrat;
    color: black;
    text-align: center;
`;

const BoxBotoes = styled.View`
    flex: 1;
    max-height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`;

const ContainerBotoes = styled.View`
    flex: 1;
    width: 100%;
    max-height: 80px;
    flex-direction: row;
    justify-content: center;
`;

const ContainerBotoes2 = styled.View`
    flex: 1;
    width: 100%;
    max-height: 80px;
    flex-direction: row;
    justify-content: center;
`;

const ContainerBotoes3 = styled.View`
    flex: 1;
    width: 100%;
    max-height: 80px;
    flex-direction: row;
    justify-content: center;
`;

const Botao = styled.TouchableOpacity`
    flex: 1;
    max-width: 90px;
    max-height: 70px;
    margin: 0 5px;
`;

const BackgroundButton = styled.ImageBackground`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const TextoBotao = styled.Text`
    font-size: 23px;
    font-family: Acme;
`;

const ContainerBanner = styled.View`
    flex: 1;
    width: 100%;
    max-height: 60px;
    margin-right: 30px;
    justify-content: flex-end;
`;

const Status = styled.StatusBar``;

function CampoMaior(props){

    const [usandoFontes] = useFonts({
        'Mont-Serrat': require('../pages/assets/fonts/Montserrat-Bold.ttf'),
        'Acme': require('../assets/fonts/Acme-Regular.ttf')
    });
    if (!usandoFontes){
        return null;
    };

    return(
        <Body>
           
            <Background source={require('../images/Home.png')}>

                <ContainerTextos>
                    <Texto>Escolha a tonalidade</Texto>
                    <Texto2>Campo Harmônico Maior</Texto2>
                </ContainerTextos>

                <BoxBotoes>
                <ContainerBotoes>
                    <Botao onPress={()=>props.navigation.navigate('DoMaior')}>
                        <BackgroundButton source={require('../images/Button.png')}>
                            <TextoBotao>C</TextoBotao>
                        </BackgroundButton>
                    </Botao>

                    <Botao onPress={()=>props.navigation.navigate('DoSustenido')}>
                        <BackgroundButton source={require('../images/Button.png')}>
                            <TextoBotao>C#/Db</TextoBotao>
                        </BackgroundButton>
                    </Botao>

                    <Botao onPress={()=>props.navigation.navigate('ReMaior')}>
                        <BackgroundButton source={require('../images/Button.png')}>
                            <TextoBotao>D</TextoBotao>
                        </BackgroundButton>
                    </Botao>    
                </ContainerBotoes>

                <ContainerBotoes2>
                    <Botao onPress={()=>props.navigation.navigate('ReSustenido')}>
                        <BackgroundButton source={require('../images/Button.png')}>
                            <TextoBotao>D#/Eb</TextoBotao>
                        </BackgroundButton>
                    </Botao>

                    <Botao onPress={()=>props.navigation.navigate('MiMaior')}>
                        <BackgroundButton source={require('../images/Button.png')}>
                            <TextoBotao>E</TextoBotao>
                        </BackgroundButton>
                    </Botao>

                    <Botao onPress={()=>props.navigation.navigate('FaMaior')}>
                        <BackgroundButton source={require('../images/Button.png')}>
                            <TextoBotao>F</TextoBotao>
                        </BackgroundButton>
                    </Botao>    
                </ContainerBotoes2>

                <ContainerBotoes3>
                    <Botao onPress={()=>props.navigation.navigate('FaSustenido')}>
                        <BackgroundButton source={require('../images/Button.png')}>
                            <TextoBotao>F#/Gb</TextoBotao>
                        </BackgroundButton>
                    </Botao>

                    <Botao onPress={()=>props.navigation.navigate('SolMaior')}>
                        <BackgroundButton source={require('../images/Button.png')}>
                            <TextoBotao>G</TextoBotao>
                        </BackgroundButton>
                    </Botao>

                    <Botao onPress={()=>props.navigation.navigate('SolSustenido')}>
                        <BackgroundButton source={require('../images/Button.png')}>
                            <TextoBotao>G#/Ab</TextoBotao>
                        </BackgroundButton>
                    </Botao>    
                </ContainerBotoes3>

                <ContainerBotoes3>
                    <Botao onPress={()=>props.navigation.navigate('LaMaior')}>
                        <BackgroundButton source={require('../images/Button.png')}>
                            <TextoBotao>A</TextoBotao>
                        </BackgroundButton>
                    </Botao>

                    <Botao onPress={()=>props.navigation.navigate('LaSustenido')}>
                        <BackgroundButton source={require('../images/Button.png')}>
                            <TextoBotao>A#/Bb</TextoBotao>
                        </BackgroundButton>
                    </Botao>

                    <Botao onPress={()=>props.navigation.navigate('SiMaior')}>
                        <BackgroundButton source={require('../images/Button.png')}>
                            <TextoBotao>B</TextoBotao>
                        </BackgroundButton>
                    </Botao>    
                </ContainerBotoes3>
                </BoxBotoes>
            </Background>
         
            <Status hidden={true}/>

            <AdMobBanner
                  bannerSize="fullBanner"
                  adUnitID="ca-app-pub-3940256099942544/6300978111" 
                  setTestDeviceIDAsync
                  servePersonalizedAds
                  onDidFailToReceiveAdWithError={(erro)=>console.log(erro)}
                />

        </Body>
    );
};

CampoMaior.navigationOptions = ({...props})=>{
    return{
        headerLeft:<BotaoMenu {...props}/>,
        headerStyle:{
            backgroundColor: '#E6E7E8'
        },
        headerTitle:<Logo/>
    };
};

export default CampoMaior;
