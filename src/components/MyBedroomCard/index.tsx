import React, { useState } from 'react';

import {
    Container,
    Content,
    BedroomImage,
    Description,
    ButtonServices,
    ButtonText,
    ButtonContent
} from './styles';

export default function MyBedroomCard(){
    const [ativo, setAtivo] = useState(false);

    return(
        <Container
            onPress={() => setAtivo(!ativo)}
        >
            <ButtonContent>
            <BedroomImage
                source={require('../../assets/images/quarto1.png')}
                resizeMode="contain"
            />
            <Content>
                {
                    ativo ?
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Description>
                    :
                    <Description>
                        Não Ativo
                    </Description>
                }
                <ButtonServices>
                    <ButtonText>Serviços</ButtonText>
                </ButtonServices>
            </Content>
            </ButtonContent>
        </Container>
    )
}