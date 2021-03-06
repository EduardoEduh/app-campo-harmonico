import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import LogoPages from '../components/LogoPages';
import { AdMobBanner, AdMobInterstitial, setTestDeviceIDAsync } from 'expo-ads-admob';


const Scroll = styled.ScrollView`
    flex: 1;
    width: 100%;
    background-color: #E6E7E8;
`;

const Body = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const ContainerText = styled.View`
    flex: 1;
    width: 80%;
    border: 2px solid #73CCC3;
    border-radius: 12px;
    padding: 10px;
    background-color: #73CCC3;
    margin-top: 20px;
`;

const ContainerText2 = styled.View`
    flex: 1;
    width: 90%;
    border: 2px solid #D0EDCF;
    border-radius: 22px;
    padding: 10px;
    background-color: #D0EDCF;
    margin-top: -59px;
`;

const Texto = styled.Text`
    font-size: 16px;
    font-family: Mont-Serrat;
    text-align: center;
    color: #000;
`;

const Texto2 = styled.Text`
    font-size: 15px;
    font-family: Mont-Serrat;
    text-align: justify;
    color: #000;
`;

const ContainerImage = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const Imagem = styled.Image`
    flex: 1;
    width: 350px;
    height: 360px;
`;

const ContainerBanner = styled.View`
    flex: 1;
    width: 100%;
    max-height: 60px;
    justify-content: flex-end;
`;

const Status = styled.StatusBar``;

function LaSustenido(){
    useEffect(()=>{
        async function loadAd(){
            await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
            InterstitalAd();
        }
        
       loadAd();
    },[]);

    async function InterstitalAd(){
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
        await AdMobInterstitial.showAdAsync();
    };

    const [usandoFontes]= useFonts({
        'Mont-Serrat': require('../assets/fonts/Montserrat-Bold.ttf')
    });
    if(!usandoFontes){
        return null;
    };
    return(
        <Body>
            <Scroll>
                <Body>
                    <ContainerText>
                        <Texto>Campo Harm??nico de L?? Sustenido Menor</Texto>
                    </ContainerText>

                    <ContainerImage>
                        <Imagem source={require('../images/Menor/ASm.png')}/>
                    </ContainerImage>

                    <ContainerText2>
                        <Texto2>
                            Obs: o acorde de B#??, tamb??m ?? representado pelo acorde de C?? e o E#m ?? o mesmo que Fm.
                        </Texto2>
                    </ContainerText2>
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

LaSustenido.navigationOptions = ()=>{
    return{
        headerStyle:{
            backgroundColor:'#57A695'
        },
        headerTitle:<LogoPages/>
    };
};

export default LaSustenido;