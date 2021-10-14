import React from 'react';
import styled from 'styled-components/native';

const ContainerImage = styled.View`
    flex: 1;
    align-items: center;

    margin-left: 20px;
`;

const Imagem = styled.Image`
    width: 60px;
    height: 70px;
`;


function DrawerIcon6(){
    return(
        <ContainerImage>
            <Imagem source={require('../images/Violao.png')}/>
        </ContainerImage>
    );
};

export default DrawerIcon6;