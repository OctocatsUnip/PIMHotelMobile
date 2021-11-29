import React, {useRef, useState} from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import {Button} from '../../components/Button';
import { useNavigation } from '@react-navigation/core';


import { Range } from 'react-range';
import {useFilter} from '../../../hooks/filter'


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
    SliderShow
} from './styles';

import {Check} from '../../components/Check';

export default function Filtro() {
    // const price = useRef([0]);
    const {valorQuarto, setValorQuarto, quantiaCamas, setQuantiaCamas, quantiaBanheiros, setQuantiaBanheiros} = useFilter()
    const [valor, setValor] = useState(300)
    const [camas, setCamas] = useState(1)
    const [banheiros, setBanheiros] = useState(0)

    const navigation = useNavigation<any>();



   return (
        <Container>
            <Content>
                {/* <RowContainer>
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
                </SectionContainer> */}
                <SectionContainer>
                    <Title>Preço</Title>
                    <Slider
                        value={valor}
                        maximumValue={2000}
                        minimumValue={300}
                        onValueChange={value => setValor(...value)}
                        animateTransitions
                        renderAboveThumbComponent={() => {
                            return(
                                <SliderShow>R$ {valor}</SliderShow>
                            )
                        }}
                        step={10}
                    />
                </SectionContainer>
                <SectionContainer>
                    <Title>Quantidade camas</Title>
                    <Slider
                        value={camas}
                        minimumValue={1}
                        maximumValue={4}
                        onValueChange={value => setCamas(...value)}
                        animateTransitions
                        renderAboveThumbComponent={() => {
                            return(
                                <SliderShow>{camas}</SliderShow>
                            )
                        }}
                        step={1}
                    />
                </SectionContainer>
                <SectionContainer>
                    <Title>Quantidade banheiros</Title>
                    <Slider
                        value={banheiros}
                        maximumValue={3}
                        minimumValue={0}
                        onValueChange={value => setBanheiros(...value)}
                        animateTransitions
                        renderAboveThumbComponent={() => {
                            return(
                                <SliderShow>{banheiros}</SliderShow>
                            )
                        }}
                        step={1}
                    />
                </SectionContainer>
                {/* <SectionContainer>
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
                </SectionContainer> */}
            </Content>
            <Button
                width="50%"
                text="Filtrar"
                onPress={() => {
                    setValorQuarto(valor)
                    setQuantiaCamas(camas)
                    setQuantiaBanheiros(banheiros)
                    navigation.navigate("ListaDeQuartos")
                }}
            />
        </Container>
   );
}