import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import LogoPages from '../pages/components/LogoPages';
import BotaoMenu from '../components/BotaoMenu';
import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob';

const Scroll = styled.ScrollView`
    flex: 1;
    width: 100%;
`;

const Body = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #E6E7E8;
`;

const ContainerText = styled.View`
    flex: 1;
    width: 80%;
    align-items: center;
    border: 2px solid #FF7E14;
    border-radius: 15px;
    margin-top: 30px;
    background-color: #FF7E14;
    padding: 10px;
`;

const ContainerText2 = styled.View`
    flex: 1;
    width: 80%;
    align-items: center;
    border: 2px solid #57A695;
    border-radius: 15px;
    margin-top: 30px;
    background-color: #57A695;
    padding: 10px;
`;

const Texto = styled.Text`
    font-size: 15px;
    font-family: Surfer;
    text-align: justify;
    color: #E6E7E8;
`;

const ContainerImage = styled.View`
    flex: 1;
    align-items: center;
    width: 100%;
    height: 300px;
    margin-top: 20px;
`;

const ContainerImage2 = styled.View`
    flex: 1;
    align-items: center;
    width: 100%;
    height: 500px;
    margin-top: 12px;
`;


const Imagem = styled.Image`
    flex: 1;
    width: 350px;
    height: 180px;
`;

const Imagem2 = styled.Image`
    flex: 1;
    width: 350px;
    max-height: 550px;
`;

const ContainerBanner = styled.View`
    flex: 1;
    width: 100%;
    max-height: 61.5px;
    justify-content: flex-end;
    border: 1px solid red;
    margin-right: 35px;
`;

function TecladoAcordes(){
    const [usandoFontes] = useFonts({
        'Surfer': require('../assets/fonts/OriginalSurfer-Regular.ttf')
    });

    if(!usandoFontes){
        return null;
    };
    return(
        <Body>
            <Scroll>
                <Body>

                    <ContainerText2>
                        <Texto>
                            Durante toda essa página, você encontrará alguns
                            acordes para teclado. 
                        </Texto>
                    </ContainerText2>

                    <ContainerImage>
                        <Imagem source={require('../pages/images/AcordesTeclado/Posicao.png')}/>
                    </ContainerImage>

                    <ContainerText>
                        <Texto>
                        Acordes Maiores
                        </Texto>
                    </ContainerText>

                    <ContainerImage2>
                        <Imagem2 source={require('./images/AcordesTeclado/Maiores.png')}/>
                    </ContainerImage2>

                    <ContainerText>
                        <Texto>
                        Acordes Menores
                        </Texto>
                    </ContainerText>

                    <ContainerImage2>
                        <Imagem2 source={require('./images/AcordesTeclado/Menores.png')}/>
                    </ContainerImage2>
                    
                    <ContainerText>
                        <Texto>
                        Acordes Diminuta
                        </Texto>
                    </ContainerText>

                    <ContainerImage2>
                        <Imagem2 source={require('./images/AcordesTeclado/Diminutos.png')}/>
                    </ContainerImage2>

                    <ContainerText>
                        <Texto>
                        Acordes com Sétima
                        </Texto>
                    </ContainerText>

                    <ContainerImage2>
                        <Imagem2 source={require('./images/AcordesTeclado/Setima.png')}/>
                    </ContainerImage2>
    
                    <ContainerText>
                        <Texto>
                        Acordes Maiores com Sétima Maior
                        </Texto>
                    </ContainerText>

                    <ContainerImage2>
                        <Imagem2 source={require('./images/AcordesTeclado/SetimaMaior.png')}/>
                    </ContainerImage2>

                    <ContainerText>
                        <Texto>
                        Acordes Menores com Sétima
                        </Texto>
                    </ContainerText>
        
                    <ContainerImage2>
                        <Imagem2 source={require('./images/AcordesTeclado/SetimaMenor.png')}/>
                    </ContainerImage2>

                    <ContainerText>
                        <Texto>
                        Acordes Maiores com Nona
                        </Texto>
                    </ContainerText>

                    <ContainerImage2>
                        <Imagem2 source={require('./images/AcordesTeclado/NonaMaior.png')}/>
                    </ContainerImage2>
        
                    <ContainerText>
                        <Texto>
                        Acordes Menores com Nona
                        </Texto>
                    </ContainerText>

                    <ContainerImage2>
                        <Imagem2 source={require('./images/AcordesTeclado/NonaMenor.png')}/>
                    </ContainerImage2>

                    <ContainerText>
                        <Texto>
                        Acordes com Quarta
                        </Texto>
                    </ContainerText>

                    <ContainerImage2>
                        <Imagem2 source={require('./images/AcordesTeclado/Quarta.png')}/>
                    </ContainerImage2>

                    <ContainerText>
                        <Texto>
                        Acordes Maiores Invertidos
                        </Texto>
                    </ContainerText>

                    <ContainerText2>
                        <Texto>
                        Primeira Inversão
                        </Texto>
                    </ContainerText2>

                    <ContainerImage2>
                        <Imagem2 source={require('./images/AcordesTeclado/Inversao1.png')}/>
                    </ContainerImage2>
        
                    <ContainerText2>
                        <Texto>
                        Segunda Inversão
                        </Texto>
                    </ContainerText2>

                    <ContainerImage2>
                        <Imagem2 source={require('./images/AcordesTeclado/Inversao2.png')}/>
                    </ContainerImage2>

                    <ContainerText>
                        <Texto>
                        Acordes Menores Invertidos
                        </Texto>
                    </ContainerText>

                    <ContainerText2>
                        <Texto>
                        Primeira Inversão
                        </Texto>
                    </ContainerText2>

                    <ContainerImage2>
                        <Imagem2 source={require('./images/AcordesTeclado/MenoresInversao1.png')}/>
                    </ContainerImage2>

                    <ContainerText2>
                        <Texto>
                        Segunda Inversão
                        </Texto>
                    </ContainerText2>

                    <ContainerImage2>
                        <Imagem2 source={require('./images/AcordesTeclado/MenoresInversao2.png')}/>
                    </ContainerImage2>

                </Body>
            </Scroll>
            <ContainerBanner>
                <AdMobBanner
                  bannerSize="fullBanner"
                  adUnitID="ca-app-pub-3940256099942544/6300978111" 
                  setTestDeviceIDAsync
                  servePersonalizedAds
                  onDidFailToReceiveAdWithError={(erro)=>console.log(erro)}
                />
            </ContainerBanner>
        </Body>
    );
};

TecladoAcordes.navigationOptions = ({...props})=>{
    return{
        headerLeft: <BotaoMenu {...props}/>,
        headerTitle: <LogoPages/>,
        headerStyle:{
            backgroundColor: '#57A695'
        }
    };
};

export default TecladoAcordes;