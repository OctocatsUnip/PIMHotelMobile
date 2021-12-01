import React, { useState } from 'react';
import { Button } from '../Button';
import {useNavigation} from '@react-navigation/native'

import {
    Container,
    Content,
    OptionArea,
    OptionHeaderCompressed,
    OptionHeader,
    Separator,
    Description,
    ButtonContent,
    PriceContent,
    Price,
    PriceDetails,
} from './styles';

interface Props {
    screen: string;
    descricao: string;
    valor: number
}

export default function BedroomOptionsCard({screen, descricao, valor}:Props) {
    const [ativo, setAtivo] = useState(false);
    const {navigate} = useNavigation<any>()

    function handlePressCard(){
        setAtivo(!ativo)
    }

    function handlePressButton(screen:string){
        navigate(screen)
    }

    return (
        <Container>
            <Content
                onPress={handlePressCard}
            >
                {
                    !ativo ?
                        <OptionArea>
                            <OptionHeader>
                                Tarifa Simples
                            </OptionHeader>
                            <Separator />
                            <Description>
                                Regras da Tarifa
                            </Description>
                        </OptionArea>
                        :
                        <OptionArea>
                            <OptionHeader>
                                Tarifa Simples
                            </OptionHeader>
                            <Separator />
                            <Description>
                                {descricao}
                            </Description>
                        </OptionArea>
                }
                <PriceContent>
                    <Price>
                        R$ {valor}
                    </Price>
                    <PriceDetails>
                        Méd./Diária
                    </PriceDetails>
                </PriceContent>
                <ButtonContent>
                    <Button
                        text="Reservar agora!"
                        width="100%"
                        onPress={() => console.log("Tela de realizar reserva")}
                    />
                </ButtonContent>
            </Content>
        </Container>
    )
}