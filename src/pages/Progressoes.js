import React, {useState} from 'react';
import { Modal, Linking } from 'react-native';
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
`;

const Background = styled.ImageBackground`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const ContainerText = styled.View`
    flex: 1;
    width: 90%;
    padding: 15px;
    border: 2px solid #D0EDCF;
    border-radius: 22px;
    margin-top: 50px;
    background-color: #D0EDCF;
`;

const ContainerText2 = styled.View`
    flex: 1;
    width: 90%;
    border: 2px solid #D0EDCF;
    border-radius: 22px;
    padding: 10px;
    background-color: #D0EDCF;
    margin-top: 20px;
`;

const ContainerText3 = styled.View`
    flex: 1;
    width: 90%;
    border: 2px solid #73CCC3;
    border-radius: 20px;
    margin-top: 30px;
    padding: 12px;
    background-color: #73CCC3;
`;


const Texto = styled.Text`
    font-size: 18px;
    font-family: Josefin;
    text-align: justify;
`;

const Texto2 = styled.Text`
    font-size: 25;
    color: #000;
    text-align: center;
    font-family: Josefin;
`;

const Texto3 = styled.Text`
    font-size: 25;
    color: #FF7E14;
    text-align: center;
    font-family: Josefin;
`;

const TextoOBS = styled.Text`
    font-size: 20px;
    color: #FF7E14;
`;

const ContainerBanner = styled.View`
    flex: 1;
    align-items: center;
    width: 100%;
    max-height: 58px;
    padding-right: 12px;
    justify-content: flex-end;
`;

const ContainerModal = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
`;

const ContainerTextModal = styled.View`
    width: 80%;
    height: 50%;
    border-radius: 15px;
    background-color: #D0EDCF;
    align-items: center;
    padding: 12px;
`;

const BoxBotao = styled.View`
    width: 95%;
    padding: 0 12px;
    align-items: center;
    margin-top: -12px;
`;

const Botao = styled.TouchableOpacity`
    width: 80%;
    margin-top: 22px;
    border-radius: 12px;
    padding: 10px;
    background-color: #57A695;
`;

const ContainerBotao = styled.View`
    align-items: center;
`;

const TextBotao = styled.Text`
    font-size: 18px;
    font-family: Josefin;
    color: #E6E7E8;
`;

const Status = styled.StatusBar``;

function Progressoes(){
    const [modalVisible, setModalVisible] = useState(true);

    const [usandoFontes] = useFonts({
        'Josefin': require('../assets/fonts/JosefinSans-Regular.ttf')
    });

    if(!usandoFontes){
        return null;
    };

    return(
        <Body>
            <Modal
            visible={modalVisible}
            animationType='slide'
            transparent={true}
            >
                <ContainerModal>
                    <ContainerTextModal>
                        <Texto>
                            Você gostou do app campo harmônico prático ?
                            {'\n\n'}
                            Deixe a sua avaliação no Google Play. É muito rápido
                            e super importante para mim. Se você já avaliou, apenas
                            aperte em sair.
                        </Texto>
                        
                        <BoxBotao>
                            <Botao onPress={()=>Linking.openURL('https://play.google.com/store/apps/details?id=com.unfollowers.tracker.followers')}>
                                <ContainerBotao>
                                    <TextBotao>
                                        Avaliar
                                    </TextBotao>
                                </ContainerBotao>
                            </Botao>

                            <Botao onPress={()=>setModalVisible(false)}>
                                <ContainerBotao>
                                    <TextBotao>
                                        Sair
                                    </TextBotao>
                                </ContainerBotao>
                            </Botao>
                        </BoxBotao>

                    </ContainerTextModal>
                </ContainerModal>
            </Modal>
            <Scroll>
                <Body>
                    <Background source={require('./images/Fundo.png')}>
                        
                    <ContainerText>
                        <Texto>
                        Logo abaixo você encontrará algumas progressões de acordes que são 
                        muito usadas nas músicas. Observe qual acorde do campo harmônico
                        corresponde aos graus encontrados nas progressões.
                        </Texto>
                    </ContainerText>

                    <ContainerText3>
                        <Texto2>Progressão 1:</Texto2>
                        <Texto3>I - V - VI - IV</Texto3>
                        <Texto2>Progressão 2:</Texto2>
                        <Texto3>I - IV - VI - V</Texto3>
                        <Texto2>Progressão 3:</Texto2>
                        <Texto3>IV - I - V - II</Texto3>
                        <Texto2>Progressão 4:</Texto2>
                        <Texto3>II - V - I - IV</Texto3>
                        <Texto2>Progressão 5:</Texto2>
                        <Texto3>IV - V - III - VI</Texto3>
                        <Texto2>Progressão 6:</Texto2>
                        <Texto3>I - VI - IV - V</Texto3>
                        <Texto2>Progressão 7:</Texto2>
                        <Texto3>I - IV - I - V</Texto3>
                        <Texto2>Progressão 8:</Texto2>
                        <Texto3>I - VI - IV - II - V</Texto3>
                        <Texto2>Progressão 9:</Texto2>
                        <Texto3>I - IV - V - III - VI - V </Texto3>
                        <Texto2>Progressão 10:</Texto2>
                        <Texto3>I - V - VI - III - IV - II - V</Texto3>
                        <Texto2>Progressão 11:</Texto2>
                        <Texto3>VI - V - IV - I</Texto3>
                        <Texto2>Progressão 12:</Texto2>
                        <Texto3>VI - IV - I - V</Texto3>
                        <Texto2>Progressão 13:</Texto2>
                        <Texto3>VI - I - IV - V</Texto3>
                        <Texto2>Progressão 14:</Texto2>
                        <Texto3>VI - IV - II - V - I</Texto3>
                        <Texto2>Progressão 15:</Texto2>
                        <Texto3>VI - V - III - IV - II - V - I</Texto3>
                    </ContainerText3>

                    <ContainerText2>
                        <Texto> 
                        <TextoOBS>Dica:{'\r\r'}</TextoOBS> 
                        
                                Incentivo você a treinar no seu instrumento essas progressões harmônicas
                                para ir fixando em sua memória. Vai facilitar quando você for pegar alguma
                                música de ouvido. Vale a pena ressaltar que existem outras progressões.
                                À medida que você vai explorando o campo harmônico e pegando novas músicas,
                                você vai descobrindo novas sequências de acordes.  
                        </Texto>
                    </ContainerText2>

                    <ContainerText2>
                        <Texto> 
                        <TextoOBS>Dica 2:{'\r\r'}</TextoOBS> 
                            Treine essas progressões em cada tonalidade. Se atente para o grau do campo harmônico. 
                            Quando a música mudar de tom, basta ver qual acorde se encaixa no mesmo grau do tom anterior.
                        </Texto>
                    </ContainerText2>


                    </Background>
                    <Status hidden={true}/>
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

Progressoes.navigationOptions = ({...props})=>{
    return{
        headerLeft: <BotaoMenu {...props}/>,
        headerTitle: <LogoPages/>,
        headerStyle:{
            backgroundColor: '#57A695'
        }
    };
};

export default Progressoes;