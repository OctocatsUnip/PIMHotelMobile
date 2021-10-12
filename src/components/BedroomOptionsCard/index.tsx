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
}

export default function BedroomOptionsCard({screen}:Props) {
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
                            <OptionHeaderCompressed>
                                Tarifa Simples
                            </OptionHeaderCompressed>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique aliquam gravida lectus non.consectetur adipiscing elit.
                                {'\r\n\u2022'} Lorem ipsum dolor sit amet,
                                {'\r\n\u2022'} Tristique aliquam gravida lectus non.
                            </Description>
                        </OptionArea>
                }
                <PriceContent>
                    <Price>
                        R$ 980
                    </Price>
                    <PriceDetails>
                        Méd./Diária
                    </PriceDetails>
                </PriceContent>
                <ButtonContent>
                    <Button
                        text="Reservar agora!"
                        width="80%"
                        onPress={() => handlePressButton(screen)}
                    />
                </ButtonContent>
            </Content>
        </Container>
    )
}