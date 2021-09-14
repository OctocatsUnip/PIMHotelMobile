import React from 'react';

import {
    Container,
    Content,
    SadFace,
    Description,
    ButtonReserve,
    ButtonText
} from './styles';

export default function NoBedroomCard(){
    return(
        <Container>
            <Content>
                <Description>
                    Hmmm não encontramos nada por aqui...
                </Description>
                <SadFace name="sad-cry" size={120} color="#4B5B5B" />
                <Description>
                    Que tal encontrar seu quarto dos sonhos?
                </Description>
                <ButtonReserve>
                    <ButtonText>Quero Reservar!</ButtonText>
                </ButtonReserve>
            </Content>
        </Container>
    )
}