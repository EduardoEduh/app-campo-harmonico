import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import BotaoMenu from '../components/BotaoMenu';
import Logo from '../components/Logo';
import { AdMobBanner } from 'expo-ads-admob';
  

const Scroll = styled.ScrollView`
    flex: 1;
    width: 100%;
`;

const Body = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #57A695;
`;

const ContainerText = styled.View`
    flex: 1;
    align-items: center;
    border: 2px solid #E6E7E8;
    width: 80%;
    border-radius: 15px;
    padding: 10px;
    margin-top: 30px;
    background-color: #E6E7E8;
`;

const ContainerText2 = styled.View`
    flex: 1;
    align-items: center;
    border: 2px solid #E6E7E8;
    width: 90%;
    max-height: 1180px;
    border-radius: 15px;
    padding: 10px;
    margin-top: 20px;
    background-color: #E6E7E8;
`;

const Texto = styled.Text`
    font-size: 19px;
    font-family: JosefinSans;
    text-align: justify;
`;

const Texto2 = styled.Text`
   font-size: 22px;
   color: #5FAAA3;
`;

const TextoObs = styled.Text`
    color: #FF7E14;
`;

const ContainerImage = styled.View`
    width: 95%;
    flex: 1;
    align-items: center;
    border: 2px solid #E6E7E8;
    border-radius: 15px;
    padding: 12px;
    background-color: #E6E7E8;
    
`;

const ContainerImage2 = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
    border: 2px solid #E6E7E8;
    border-radius: 15px;
    padding: 12px;
    background-color: #E6E7E8;
    
`;

const ContainerImage3 = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
    border: 2px solid #E6E7E8;
    border-radius: 15px;
    padding: 12px;
    background-color: #E6E7E8;
`;

const Imagem = styled.Image`
    flex: 1;
    width: 300px;
    height: 107px;
`;

const Imagem2 = styled.Image`
    flex: 1;
    width: 350px;
    height: 380px;
`;

const Imagem3 = styled.Image`
    flex: 1;
    width: 230px;
    height: 65px;
`;

const ContainerBanner = styled.View`
    width: 100%;
    height: 10%;
`;

const ViewBanner = styled.View`
    width: auto;
    height: auto;
  
   

`;

const Status = styled.StatusBar``;

function Teoria(){

    const [usandoFontes] = useFonts({
        'Surfer': require('../assets/fonts/OriginalSurfer-Regular.ttf'),
        'JosefinSans': require('../assets/fonts/JosefinSans-Regular.ttf')
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
                    Antes de chegarmos ao conceito de campo harm??nico e explicar o campo harm??nico maior e menor natural, ?? preciso
                    entender a escala maior e menor natural.
                    De maneira simples e clara, <TextoObs>podemos definir escalas musicais como um 
                    conjunto ou uma sequ??ncia de notas tiradas de um determinado tom.</TextoObs>{'\r\r'}
                    A escala maior se constitui em um conjunto de notas organizadas
                    em intervalos de <TextoObs>Tom Tom Semitom Tom Tom Tom Semitom</TextoObs>. Veja abaixo o exemplo e 
                    cria????o da escala de d?? maior.
                </Texto>
            </ContainerText2>

            <ContainerImage>
                <Imagem source={require('../images/EscalaC.png')}/>
            </ContainerImage>
             
            <ContainerText2>
                <Texto>
                    Observe que uma maneira bem simples de formar as escalas,
                    ?? usando a <TextoObs>escala crom??tica</TextoObs> de cada tonalidade. Essa escala <TextoObs>se constitui em intervalos de
                    Semitoms e possui 12 notas</TextoObs>. Vamos a mais um exemplo trabalhando com a 
                    tonalidade de C#:
                </Texto>
            </ContainerText2>

            <ContainerImage>
                <Imagem source={require('../images/EscalaCSus.png')}/>
            </ContainerImage>

            <ContainerText2>
                <Texto>
                    Veja um breve entendimento sobre intervalos. <TextoObs>Intervalos ?? a dist??ncia entre duas notas m??sicais</TextoObs>. 
                    Explicando de uma forma bem resumida, <TextoObs>os intervalos podem ser simples quando se acha contido dentro de
                    uma oitava e composto quando ultrapassa uma oitava</TextoObs>. Existem tamb??m intervalo mel??dico e 
                    intervalo harm??nico. Veja abaixo o nome dos intervalos <TextoObs>a partir da nota fundamental (exemplo D??)</TextoObs>:
                </Texto>
            </ContainerText2>
                    
            <ContainerImage2>
                <Imagem2 source={require('../images/Intervalos.png')}/>
            </ContainerImage2>

            <ContainerText>
                <Texto>
                    <TextoObs>Enarmonia</TextoObs> ?? a situa????o em que nomes diferentes 
                    s??o dados a uma mesma nota. Ex:{'\n'}C# = Db
                </Texto>
            </ContainerText>

            <ContainerText2>
                <Texto>
                        Partindo para a <TextoObs>escala menor natural</TextoObs>, ela se constitui em um conjunto de notas organizadas
                        em intervalos de <TextoObs>Tom Semitom Tom Tom Semitom Tom Tom</TextoObs>. Veja abaixo o exemplo e 
                        cria????o da escala de d?? menor natural.
                </Texto>
            </ContainerText2>

            <ContainerImage>
                <Imagem source={require('../images/CMenor.png')}/>
            </ContainerImage>

            <ContainerText2>
                <Texto>
                        Voc?? deve ter observado que na cria????o da escala menor, tamb??m se <TextoObs>usa
                        como base a escala crom??tica.</TextoObs>
                </Texto>
            </ContainerText2>

            <ContainerText2>
                <Texto>
                    Uma observa????o importante ?? a <TextoObs>utiliza????o dos Graus.{'\r\r'}</TextoObs>
                    Podemos afirmar que os graus m??sicais (representados por n??meros romanos),
                    <TextoObs> servem para identificar as notas das escalas</TextoObs>.
                    Mais a frente voc?? ver?? que <TextoObs>os graus dentro do campo harm??nico</TextoObs>,
                    s??o usados para <TextoObs>identificar o acorde.</TextoObs> Veja um exemplo com o
                    uso nas escalas:
                </Texto>
            </ContainerText2>

            <ContainerImage3>
                <Imagem3 source={require('../images/A.png')}/>
            </ContainerImage3>

            <ContainerText2>
                <Texto>
                    Compreendemos que com base no entendimento da forma????o das escalas, torna-se f??cil
                    entender o campo harm??nico. Portanto, podemos <TextoObs>conceituar campo harm??nico{'\r\r'}</TextoObs>
                    como{'\r\r'}<TextoObs>fam??lias ou conjuntos de acordes tirados de uma determinada escala.{'\r\r'}</TextoObs>
                    No campo ham??nico diferente das escalas, passamos a explorar os acordes e n??o as notas.
                    Aqui ?? importante diferenciar que <TextoObs>notas n??o ?? a mesma coisa que acorde</TextoObs>.
                    N??o confunda. <TextoObs>O acorde ??</TextoObs> um grupo de notas que ser??o tocadas ao mesmo tempo.
                </Texto>
            </ContainerText2>

            <ContainerText2>
                <Texto>
                    Ap??s entendido o conceito geral de campo harm??nico, vamos explorar o campo harm??nico maior.{'\r\r'}
                    <TextoObs>Observe a escala maior</TextoObs>. Por exemplo de d?? maior: 
                    C-D-E-F-G-A-B. Essa sequ??ncia de notas passa a virar uma sequ??ncia de acordes 
                     quando se aplica as regras do campo harm??nico.{'\n'}<TextoObs>- Regra Campo Harm??nico Maior</TextoObs>:{'\n'} 
                    <Texto2>M</Texto2> - <Texto2>m</Texto2> - <Texto2>m</Texto2> - <Texto2>M</Texto2> - <Texto2>M</Texto2> - <Texto2>m</Texto2> - <Texto2>??</Texto2>{'\n'}
                    Passamos a entender que <TextoObs>o primeiro grau da escala passsa a ser um 
                    acorde maior, o segundo e terceiro grau um acorde menor, o quarto e quinto grau um 
                    acorde maior, o sexto grau um acorde menor e o s??timo grau um acorde diminuta</TextoObs>.
                    Assim a escala de d?? maior tranformando para o campo ham??nico de d?? maior passa a ser:
                    {'\n\r'}I    II      III   IV   V   VI   VII{'\n'}C - Dm - Em - F - G - Am - B??
                    {'\n'}<TextoObs>Essa regra vale para todo campo harm??nico maior</TextoObs>.{'\n'} 
                    Quando vamos explorar o <TextoObs>campo harm??nico menor natural</TextoObs>, temos que atentar para a escala do mesmo.
                    {'\n'}<TextoObs>- Regra Campo Harm??nico Menor Natural</TextoObs>:{'\n'} <Texto2>m</Texto2> - <Texto2>??</Texto2> - <Texto2>M</Texto2> - <Texto2>m</Texto2> - <Texto2>m</Texto2> - <Texto2>M</Texto2> - <Texto2>M</Texto2>{'\n'}
                    Portanto, temos: <TextoObs>o primeiro grau da escala um acorde menor, o segundo grau um 
                    acorde diminuta, o terceiro grau um acorde maior, o quarto e quinto grau um 
                    acorde menor e o sexto e s??timo grau um acorde maior</TextoObs>.
                    Assim a escala de d?? menor natural C-D-Eb-F-G-Ab-Bb transformando para o campo harm??nico de d?? menor natural temos:
                    {'\n\r\r'}I     II    III    IV     V     VI   VII{'\n'}
                    Cm - D?? - Eb - Fm - Gm - Ab - Bb.{'\n'}
                    <TextoObs>Lembrando que de forma enarm??nica, o bemol tamb??m ?? o acorde sustenido</TextoObs>. Essa regra vale para todo campo harm??nico menor natural.{'\n'}
                    <TextoObs>Obs:</TextoObs> quando se estar tocando alguma m??sica que estar na tonalida do campo harm??nico menor natural,
                    o quinto grau menor, pode ser substitu??do por um acorde maior ou quinto grau maior.
                </Texto>
            </ContainerText2>
            </Body>
            </Scroll>
            <Status hidden={true}/> 

                <ViewBanner>
                <AdMobBanner
                  bannerSize="fullBanner"
                  adUnitID="ca-app-pub-3940256099942544/6300978111" 
                  setTestDeviceIDAsync
                  servePersonalizedAds
                  onDidFailToReceiveAdWithError={(erro)=>console.log(erro)}
                />
           
                </ViewBanner>
               
     </Body>
  
    );
};

Teoria.navigationOptions = ({...props})=>{

    return{
        headerLeft:<BotaoMenu {...props}/>,
        headerStyle:{
            backgroundColor: '#E6E7E8'
        },
        headerTitle:<Logo/>        
        
    };
};

export default Teoria;