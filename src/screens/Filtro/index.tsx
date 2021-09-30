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
    Text,
    SectionContainer,
    Title,
    CheckBoxContainer,
    CheckBox,
} from './styles';

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
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Cancelamento grátis</Text>
                    </RowContainer>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Reserve agora, pague quando chegar</Text>
                    </RowContainer>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Pacotes da semana</Text>
                    </RowContainer>
                </SectionContainer>
                <SectionContainer>
                    <Title>Preço</Title>
                </SectionContainer>
                <SectionContainer>
                    <Title>Tipos de quartos</Title>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Luxuoso</Text>
                    </RowContainer>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Econômico</Text>
                    </RowContainer>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Família</Text>
                    </RowContainer>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Fumante</Text>
                    </RowContainer>
                </SectionContainer>
                <SectionContainer>
                    <Title>Serviços</Title>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Café da manhã</Text>
                    </RowContainer>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Banheira de Hidromassagem</Text>
                    </RowContainer>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Estacionamento gratuíto</Text>
                    </RowContainer>
                </SectionContainer>
                <SectionContainer>
                    <Title>Pontuação</Title>
                </SectionContainer>
            </Content>
        </Container>
   );
}