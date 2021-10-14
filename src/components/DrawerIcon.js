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


function DrawerIcon(){
    return(
        <ContainerImage>
            <Imagem source={require('../images/Nota1.png')}/>
        </ContainerImage>
    );
};

export default DrawerIcon;