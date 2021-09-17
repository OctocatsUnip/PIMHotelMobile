import React, { useState } from 'react';
import { Button } from '../Button';

import {
    Container,
    Content,
    OptionArea,
    OptionHeaderCompressed,
    OptionHeader,
    SeparatorCompressed,
    Separator,
    DescriptionCompressed,
    Description,
    ButtonContent,
    PriceContent,
    Price,
    PriceDetails,
    ButtonServices,
    ButtonText,
    OptionsContent
} from './styles';

export default function BedroomOptionsCard() {
    const [ativo, setAtivo] = useState(false);

    return (
        <Container>
            <OptionsContent>
                <Content
                    onPress={() => setAtivo(!ativo)}
                >
                    {
                        ativo ?
                            <OptionArea>
                                <OptionHeaderCompressed>
                                    Tarifa Simples
                                </OptionHeaderCompressed>
                                <SeparatorCompressed />
                                <DescriptionCompressed>
                                    Regras da Tarifa
                                </DescriptionCompressed>
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
                            </OptionArea>}
                </Content>
                <PriceContent>
                    <Price>
                        R$ 980
                    </Price>
                    <PriceDetails>
                        Méd./Diária
                    </PriceDetails>
                </PriceContent>
                <ButtonContent>
                    <Button text="Reservar agora!" width="80%" />
                </ButtonContent>
            </OptionsContent>
        </Container>
    )
}