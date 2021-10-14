import React from 'react';
import styled from 'styled-components/native';

const ContainerImage = styled.View`
    flex: 1;
    align-items: center;

    margin-left: 20px;
`;

const Imagem = styled.Image`
    width: 30px;
    height: 40px;
`;


function DrawerIcon3(){
    return(
        <ContainerImage>
            <Imagem source={require('../images/Nota4.png')}/>
        </ContainerImage>
    );
};

export default DrawerIcon3;