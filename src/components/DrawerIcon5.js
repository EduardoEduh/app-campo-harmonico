import React from 'react';
import styled from 'styled-components/native';

const ContainerImage = styled.View`
    flex: 1;
    align-items: center;

    margin-left: 20px;
`;

const Imagem = styled.Image`
    width: 35px;
    height: 60px;
`;


function DrawerIcon5(){
    return(
        <ContainerImage>
            <Imagem source={require('../images/Nota5.png')}/>
        </ContainerImage>
    );
};

export default DrawerIcon5;