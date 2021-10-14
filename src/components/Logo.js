import React from 'react';
import styled from 'styled-components/native';

const Imagem = styled.Image`
    flex: 1;
    width: 60%;
    height: 50px;
`;

const Body = styled.View`
    flex: 1;
    align-items: center;
`;

function Logo(){
    return(
        <Body>
        <Imagem source={require('../images/Logo.png')}/>
        </Body>
    );
};

export default Logo;