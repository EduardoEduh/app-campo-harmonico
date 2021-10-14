import React from 'react';
import styled from 'styled-components/native';

const ContainerImage = styled.View`
    flex: 1;
    align-items: center;

    margin-left: 20px;
`;

const Imagem = styled.Image`
    width: 45px;
    height: 45px;
`;


function DrawerIcon2(){
    return(
        <ContainerImage>
            <Imagem source={require('../images/Nota2.png')}/>
        </ContainerImage>
    );
};

export default DrawerIcon2;