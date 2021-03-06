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
                            Voc?? gostou do app campo harm??nico pr??tico ?
                            {'\n\n'}
                            Deixe a sua avalia????o no Google Play. ?? muito r??pido
                            e super importante para mim. Se voc?? j?? avaliou, apenas
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
                        Logo abaixo voc?? encontrar?? algumas progress??es de acordes que s??o 
                        muito usadas nas m??sicas. Observe qual acorde do campo harm??nico
                        corresponde aos graus encontrados nas progress??es.
                        </Texto>
                    </ContainerText>

                    <ContainerText3>
                        <Texto2>Progress??o 1:</Texto2>
                        <Texto3>I - V - VI - IV</Texto3>
                        <Texto2>Progress??o 2:</Texto2>
                        <Texto3>I - IV - VI - V</Texto3>
                        <Texto2>Progress??o 3:</Texto2>
                        <Texto3>IV - I - V - II</Texto3>
                        <Texto2>Progress??o 4:</Texto2>
                        <Texto3>II - V - I - IV</Texto3>
                        <Texto2>Progress??o 5:</Texto2>
                        <Texto3>IV - V - III - VI</Texto3>
                        <Texto2>Progress??o 6:</Texto2>
                        <Texto3>I - VI - IV - V</Texto3>
                        <Texto2>Progress??o 7:</Texto2>
                        <Texto3>I - IV - I - V</Texto3>
                        <Texto2>Progress??o 8:</Texto2>
                        <Texto3>I - VI - IV - II - V</Texto3>
                        <Texto2>Progress??o 9:</Texto2>
                        <Texto3>I - IV - V - III - VI - V </Texto3>
                        <Texto2>Progress??o 10:</Texto2>
                        <Texto3>I - V - VI - III - IV - II - V</Texto3>
                        <Texto2>Progress??o 11:</Texto2>
                        <Texto3>VI - V - IV - I</Texto3>
                        <Texto2>Progress??o 12:</Texto2>
                        <Texto3>VI - IV - I - V</Texto3>
                        <Texto2>Progress??o 13:</Texto2>
                        <Texto3>VI - I - IV - V</Texto3>
                        <Texto2>Progress??o 14:</Texto2>
                        <Texto3>VI - IV - II - V - I</Texto3>
                        <Texto2>Progress??o 15:</Texto2>
                        <Texto3>VI - V - III - IV - II - V - I</Texto3>
                    </ContainerText3>

                    <ContainerText2>
                        <Texto> 
                        <TextoOBS>Dica:{'\r\r'}</TextoOBS> 
                        
                                Incentivo voc?? a treinar no seu instrumento essas progress??es harm??nicas
                                para ir fixando em sua mem??ria. Vai facilitar quando voc?? for pegar alguma
                                m??sica de ouvido. Vale a pena ressaltar que existem outras progress??es.
                                ?? medida que voc?? vai explorando o campo harm??nico e pegando novas m??sicas,
                                voc?? vai descobrindo novas sequ??ncias de acordes.  
                        </Texto>
                    </ContainerText2>

                    <ContainerText2>
                        <Texto> 
                        <TextoOBS>Dica 2:{'\r\r'}</TextoOBS> 
                            Treine essas progress??es em cada tonalidade. Se atente para o grau do campo harm??nico. 
                            Quando a m??sica mudar de tom, basta ver qual acorde se encaixa no mesmo grau do tom anterior.
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