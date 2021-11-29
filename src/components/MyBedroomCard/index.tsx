import React, { useState } from 'react';
import {ImageRequireSource} from 'react-native'
import { Button } from '../Button';

import {
    Container,
    Content,
    BedroomImage,
    Description,
    Title,
    ButtonContent
} from './styles';

// interface CardProps {
//     img: ImageRequireSource
// }

export default function MyBedroomCard({img, title}){

    return(
        <Container>
            <Content>
                <BedroomImage
                    source={img}
                    resizeMode="cover"
                />
                <Title>{title}</Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Description>
                <Button text="Serviços" width="60%" />
            </Content>
        </Container>
    )
}