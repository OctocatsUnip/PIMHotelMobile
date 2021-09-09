import React from 'react';

import {
    Container,
    Content,
    BedroomImage,
    Description,
    ButtonServices,
    ButtonText
} from './styles';

export default function MyBedroomCard(){
    return(
        <Container>
            <BedroomImage
                source={require('../../assets/images/quarto1.png')}
                resizeMode="contain"
            />
            <Content>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Description>
                <ButtonServices>
                    <ButtonText>Serviços</ButtonText>
                </ButtonServices>
            </Content>
        </Container>
    )
}