import React from 'react';
import styled from 'styled-components/native';
import LogoPages from '../pages/components/LogoPages';
import BotaoMenu from '../components/BotaoMenu';
import { useFonts } from 'expo-font';
import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob';

const Scroll = styled.ScrollView`
    flex: 1;
    width: 100%;
    background-color: #E6E7E8;
`;

const Body = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #E6E7E8;
`;

const ContainerImage2 = styled.View`
    flex: 1;
    flex-direction: row;
    width: 75%;
    align-items: center;
    margin-top: 15px;

`;

const ContainerImage6 = styled.View`
    flex: 1;
    max-height: 100%;
    max-width: 100%;
    align-items: center; 
    margin-top: 50px;
`;

const Imagem2 = styled.Image`
    flex: 1;
    width: 300px;
    height: 140px

`;

const Imagem6 = styled.Image`
    flex: 1;
    width: 355px;
    max-height: 175px;
    margin-top: -42px;
`;

const ContainerText = styled.View`
    flex: 1;
    align-items: center;
    width: 80%;
    max-height: 90px;
    border: 2px solid #FF7E14;
    border-radius: 15px;
    margin-top: 35px;
    padding: 10px;
    background-color: #FF7E14;
`;

const ContainerText2 = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 60%;
    max-height: 90px;
    margin-top: 35px;
    border: 2px solid #57A695;
    border-radius: 15px;
    background-color: #57A695;
  `;

const ContainerText3 = styled.View`
    flex: 1;
    align-items: center;
    max-width: 130px;
    max-height: 70px;
    border: 2px solid #57A695;
    border-radius: 15px;
    margin: 0 10px;
    background-color: #57A695;
    
`;

const ContainerText4 = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    width: 90%;
    max-height: 90px;
    border-radius: 15px;
    margin-top: 35px;
  
`;

const Titulo = styled.Text`
    font-size: 17px;
    text-align: justify;
    color: white;
    font-family: Surfer;
`;

const Titulo2 = styled.Text`
    font-size: 15.3px;
    text-align: justify;
    color: white;
    font-family: Surfer;
`;

const ContainerBanner = styled.View`
    flex: 1;
    align-items: center;
    width: 100%;
    max-height: 58px;
    padding-right: 12px;
    justify-content: flex-end;
`;

function ViolaoAcordes(){
    const [usandoFontes] = useFonts({
        'Surfer': require('../assets/fonts/OriginalSurfer-Regular.ttf')
    });

    if(!usandoFontes){
        return null;
    }

    return(
        <Body>
            <Scroll>
                <Body>
                    <ContainerText>
                        <Titulo>Durante toda essa página, você encontrará diversos acordes
                                para violão. Vale lembrar que:
                        </Titulo>
                    </ContainerText>

                    <ContainerText4>
                        <ContainerText3>
                            <Titulo>Mão Esquerda</Titulo>
                        </ContainerText3>

                        <ContainerText3>
                            <Titulo>Mão Direita</Titulo>
                        </ContainerText3>
                    </ContainerText4>

                    <ContainerImage2>
                        <Imagem2 source={require('../pages/images/MaoEsquerda.png')}/>
                        <Imagem2 source={require('../pages/images/MaoDireita.png')}/>
                    </ContainerImage2>

                    <ContainerText>
                        <Titulo>Acordes Maiores</Titulo>
                    </ContainerText>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/AcordesMaiores.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/AcordesMaiores2.png')}/>
                    </ContainerImage6>

                    
                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/AcordesMaiores3.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/Sustenidos1.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/Sustenidos2.png')}/>
                    </ContainerImage6>

                    <ContainerText>
                        <Titulo>Acordes Menores</Titulo>
                    </ContainerText>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/AcordesMenores.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/AcordesMenores2.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/AcordesMenores3.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/SustenidosMenores.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/SustenidosMenores2.png')}/>
                    </ContainerImage6>

                    <ContainerText>
                        <Titulo>Acordes com Sétima</Titulo>
                    </ContainerText>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/AcordesSetima.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/AcordesSetima2.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/AcordesSetima3.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/SustenidoSetimas.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/SustenidoSetimas2.png')}/>
                    </ContainerImage6>

                    <ContainerText>
                        <Titulo>Acordes Menores com Sétima</Titulo>
                    </ContainerText>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/AcordesSetimaMenor.png')}/>
                    </ContainerImage6>
                    
                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/AcordesSetimaMenor2.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/AcordesSetimaMenor3.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/Acordes7Sustenidos.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/Acordes7Sustenidos2.png')}/>
                    </ContainerImage6>


                    <ContainerText>
                        <Titulo2>Acordes Maiores com Sétima Maior</Titulo2>
                    </ContainerText>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/SetimaMaior.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/SetimaMaior2.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/SetimaMaior3.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/SetimaSustenido.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/SetimaSustenido2.png')}/>
                    </ContainerImage6>

                    <ContainerText>
                        <Titulo>Acordes Diminuta</Titulo>
                    </ContainerText>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/AcordesDiminuta.png')}/>
                    </ContainerImage6> 

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/AcordesDiminuta2.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/AcordesDiminuta3.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/AcordesDiminutaSus.png')}/>
                    </ContainerImage6>
                        
                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/AcordesDiminutaSus2.png')}/>
                    </ContainerImage6>
                        
                    <ContainerText>
                        <Titulo>Acordes Maiores com Nona</Titulo>
                    </ContainerText>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/AcordesNona.png')}/>
                    </ContainerImage6> 

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/AcordesNona2.png')}/>
                    </ContainerImage6>
                        
                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/AcordesNona3.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/SustenidosNona.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/SustenidosNona2.png')}/>
                    </ContainerImage6>
                            
                    <ContainerText>
                        <Titulo>Acordes Menores com Nona</Titulo>
                    </ContainerText>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/AcordesNona.png')}/>
                    </ContainerImage6>
        
                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/AcordesNona2.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/AcordesNona3.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/SustenidosNona.png')}/>
                    </ContainerImage6>
                        
                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/SustenidosNona2.png')}/>
                    </ContainerImage6>

                    <ContainerText>
                        <Titulo>Acordes Maiores com Quarta</Titulo>
                    </ContainerText>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/AcordesQuarta.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/AcordesQuarta2.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/AcordesQuarta3.png')}/>
                    </ContainerImage6>


                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/SustenidosQuarta.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/SustenidosQuarta2.png')}/>
                    </ContainerImage6>

                    <ContainerText>
                        <Titulo>Acordes Maiores Invertidos</Titulo>
                    </ContainerText>

                    <ContainerText2>
                        <Titulo>Primeira Inversão:</Titulo>
                    </ContainerText2>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/Invertidos.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/Invertidos2.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/Invertidos3.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/InvertidosSustenidos.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/InvertidosSustenidos2.png')}/>
                    </ContainerImage6>

                    <ContainerText2>
                        <Titulo>Segunda Inversão:</Titulo>
                    </ContainerText2>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/3Invertidos.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/3Invertidos3.png')}/>
                    </ContainerImage6>
                    
                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/Invertidos4.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/Invertidos3Sus.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/3Invertidos3Sus.png')}/>
                    </ContainerImage6>


                    <ContainerText2>
                        <Titulo>Terceira Inversão:</Titulo>
                    </ContainerText2>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/2Invertidos.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/2Invertidos2.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/2Invertidos3.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/2InvertidosSus.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Maior/2InvertidosSus2.png')}/>
                    </ContainerImage6>

                    <ContainerText>
                        <Titulo>Acordes Menores Invertidos</Titulo>
                    </ContainerText>

                    <ContainerText2>
                        <Titulo>Primeira Inversão:</Titulo>
                    </ContainerText2>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/InvertidoMenores.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/InvertidoMenores2.png')}/>
                    </ContainerImage6>
                    
                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/InvertidoMenores3.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/InvertidoMenoresSus.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/InvertidoMenoresSus2.png')}/>
                    </ContainerImage6>

                    <ContainerText2>
                        <Titulo>Segunda Inversão:</Titulo>
                    </ContainerText2>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/2InvertidoMenores.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/2InvertidoMenores2.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/2InvertidoMenores3.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/2InvertidoMenoresSus.png')}/>
                    </ContainerImage6>
                        
                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/2InvertidoMenoresSus2.png')}/>
                    </ContainerImage6>

                    <ContainerText2>
                        <Titulo>Terceira Inversão:</Titulo>
                    </ContainerText2>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/3InvertidoMenores.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/3InvertidoMenores2.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/3InvertidoMenores3.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/3InvertidoMenoresSus.png')}/>
                    </ContainerImage6>

                    <ContainerImage6>
                        <Imagem6 source={require('../pages/images/Menor/3InvertidoMenoresSus2.png')}/>
                    </ContainerImage6>  
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

ViolaoAcordes.navigationOptions = ({...props})=>{
    return{
        headerLeft: <BotaoMenu {...props}/>,
        headerTitle: <LogoPages/>,
        headerStyle:{
            backgroundColor: '#57A695'
        }
    };
};


export default ViolaoAcordes;