import React from 'react';
import styled from 'styled-components/native';
import BotaoMenu from '../components/BotaoMenu';
import LogoPages from '../pages/components/LogoPages';
import Lista from '../components/Lista';
import { useFonts } from 'expo-font';
import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob';

const Scroll = styled.ScrollView`
    flex: 1;
    width: 100%;
`;

const Body = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Background = styled.ImageBackground`
    flex: 1;
    align-items: center;
    width: 100%;
    height: 100%;
    
`;

const ContainerText = styled.View`
    width: 50%;
    flex: 1;
    align-items: center;
    border: 2px solid #FF7E14;
    border-radius: 10px;
    margin-top: 50px;
    background-color: #FF7E14;
`;

const ContainerText2 = styled.View`
    width: 90%;
    flex: 1;
    border: 2px solid #A0DBA5;
    border-radius: 15px;
    background-color: #A0DBA5;
    margin-top: 15px;
    padding: 12px;
`;

const Texto =  styled.Text`
    font-size: 19px;
    font-family: Josefin;
    color: #E6E7E8;
`;

const Texto2 = styled.Text`
    font-size: 19px;
    text-align: justify;
    font-family: Josefin;
`;

const TextoObs = styled.Text`
    color: #FF7E14;
`;

const ContainerRelativos = styled.View`
    width: 90%;
    flex: 1;
    align-items: center;
    border: 2px solid  #A0DBA5;
    border-radius: 15px;
    margin-top: 30px;
    background-color: #A0DBA5;
`;

const Items = styled.View`
    border: 2px solid #A0DBA5;
    border-radius: 15px;
    align-self: stretch;
    padding: 5px;
    margin: 0 auto;
    
`;

const ItemText = styled.Text`
    font-size: 18px;
    text-align: justify;
`;

const ContainerBanner = styled.View`
    flex: 1;
    width: 100%;
    max-height: 55px;
    justify-content: flex-end;
`;

function Relativos(){
    const [usandoFontes] = useFonts({
        'Josefin': require('../assets/fonts/JosefinSans-Regular.ttf')
    });

    if(!usandoFontes){
        return null;
    }

    return(
        <Body>
            <Scroll>
                <Body>
                    <Background source={require('../pages/images/Fundo.png')}>
                        <ContainerText>
                            <Texto>Acordes Relativos</Texto>
                        </ContainerText>

                        <ContainerText2>
                            <Texto2>Definição: o termo "relativo" pode se referir a algo que 
                                    tenha relação ou está ligado com outra coisa. Na música, existem os acordes <TextoObs>relativos maiores{'\r\r'}</TextoObs>
                                    quando se está explorando o campo harmônico menor e os acordes <TextoObs>relativos menores</TextoObs> quando se está
                                    explorando o campo harmônico maior. <TextoObs>No campo harmônico maior</TextoObs> de acordo com a tonalidade, o acorde relativo será o
                                    <TextoObs>{'\r\r'}sexto grau</TextoObs> que por sua vez vai ser sempre um <TextoObs>acorde menor</TextoObs>. 
                                    <TextoObs>{'\r\r'}No campo harmônico menor</TextoObs> de acordo com a tonalidade, 
                                    o acorde relativo será o <TextoObs>terceiro grau</TextoObs> que por sua vez vai ser sempre um <TextoObs>acorde maior</TextoObs>.
                            </Texto2>
                        </ContainerText2>

                        <ContainerText2>
                            <Texto2>Você pode se perguntar, mais qual ligação esses acordes tem que fazem eles serem relativos?
                                de forma bem prática e fácil de entender, é que <TextoObs>a ligação que esses acordes tem estão nas notas
                                que os copõe</TextoObs>. Por exemplo: se formos destrinchar os acordes (C e Am) que são relativos,
                                veremos que eles possuem algumas notas iguais em sua formação: 
                                C = C-E-G e Am = A-C-E 
                            </Texto2>
                        </ContainerText2>

                        <ContainerRelativos>
                            {Lista.map((item, index)=>{
                                return(

                                    <Items key={index}>
                                        <ItemText>{item.task}</ItemText>
                                    </Items>
                                );
                            })}
                        </ContainerRelativos>
                    </Background>
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

Relativos.navigationOptions = ({...props})=>{
    return{
        headerLeft: <BotaoMenu {...props}/>,
        headerTitle: <LogoPages/>,
        headerStyle:{
            backgroundColor: '#57A695'
        }
    };
};

export default Relativos;