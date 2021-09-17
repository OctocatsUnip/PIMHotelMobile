import React, { useState } from 'react';
import { Button } from '../Button';

import {
    Container,
    Content,
    BedroomImage,
    Description,
    ButtonContent
} from './styles';

export default function MyBedroomCard(){

    return(
        <Container>
            <ButtonContent>
            <BedroomImage
                source={require('../../assets/images/quarto1.png')}
                resizeMode="contain"
            />
            <Content>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Description>
                <Button text="Serviços" />
            </Content>
            </ButtonContent>
        </Container>
    )
}