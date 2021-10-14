import React from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';

const Texto = styled.Text`
    font-size: 19px;
    font-family: Surfer;
`;

const Texto2 = styled.Text`
    font-size: 23px;
    color: #FF7E14;
    font-family: Surfer;
`;

function DRelativo(){
    const [usandoFontes] = useFonts({
        'Surfer': require('../fonts/OriginalSurfer-Regular.ttf'),
    });

    if (!usandoFontes){
        return null;
    };
    
    return(
        <Texto><Texto2>D{'\r\r'}</Texto2>Relativo:  <Texto2>Bm{'\r'}</Texto2> (Vice-Versa)</Texto>
    );
};

export default DRelativo;