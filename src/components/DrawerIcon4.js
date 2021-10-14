import React from 'react';
import styled from 'styled-components/native';

const ContainerImage = styled.View`
    flex: 1;
    align-items: center;

    margin-left: 20px;
`;

const Imagem = styled.Image`
    width: 55px;
    height: 55px;
`;


function DrawerIcon4(){
    return(
        <ContainerImage>
            <Imagem source={require('../images/Nota3.png')}/>
        </ContainerImage>
    );
};

export default DrawerIcon4;