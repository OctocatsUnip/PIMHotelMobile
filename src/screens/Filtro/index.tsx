import React, {useRef} from 'react';
import Header from '../../components/Header';
import { Range } from 'react-range';

import {
    Container,
    Content,
    RowContainer,
    WatchIcon,
    CheckContent,
    CheckTitle,
    CheckText,
    SectionContainer,
    Title,
} from './styles';

import {Check} from '../../components/Check';

export default function Filtro() {
    const price = useRef([0]);

   return (
        <Container>
            <Header />
            <Content>
                <RowContainer>
                    <WatchIcon name="watch-later" size={40}/>
                    <CheckContent>
                        <CheckTitle>Check-In</CheckTitle>
                        <CheckText>02:00pm</CheckText>
                    </CheckContent>
                    <CheckContent>
                        <CheckTitle>Check-Out</CheckTitle>
                        <CheckText>12:00pm</CheckText>
                    </CheckContent>
                </RowContainer>
                <SectionContainer>
                    <Title>Promoções</Title>
                    <Check name="Cancelamento grátis" />
                    <Check name="Reserve agora, pague quando chegar" />
                    <Check name="Pacotes da semana" />
                </SectionContainer>
                <SectionContainer>
                    <Title>Preço</Title>
                </SectionContainer>
                <SectionContainer>
                    <Title>Tipos de quartos</Title>
                    <Check name="Luxuoso" />
                    <Check name="Econômico" />
                    <Check name="Família" />
                    <Check name="Fumante" />
                </SectionContainer>
                <SectionContainer>
                    <Title>Serviços</Title>
                    <Check name="Café da manhã" />
                    <Check name="Banheira de hidromassagem" />
                    <Check name="Estacionamento gratuíto" />
                </SectionContainer>
                <SectionContainer>
                    <Title>Pontuação</Title>
                </SectionContainer>
            </Content>
        </Container>
   );
}