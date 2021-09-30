import React from 'react';
import Header from '../../components/Header';
import { Button } from '../../components/Button';

import {
    Container,
    Content,
    RowContainer,
    Banner,
    Title,
    Separator,
    BedroomArea,
    BedroomTitle,
    BedroomInformation,
    Package,
    Itens,
    ItensInformation,
    ItensValue,
    ItensValueDescription,
    Tag,
    TagInformation,
    ButtonContainer,
    Background,
} from './styles';

export default function Reserva() {
   return (
        <Container>
            <Header />

            <Background source={require('../../assets/images/bannerQuarto.png')}/>

            <Content>
                <RowContainer>
                    <Title>Executive Prime</Title>
                    <Separator />
                    <BedroomArea>
                        <BedroomTitle>Quartos e Serviços</BedroomTitle>
                        <BedroomInformation>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, lorem urna dui fusce nunc</BedroomInformation>
                        <BedroomInformation>1. pellentesque. Egestas varius fermentum convallis integer consequat dignissim</BedroomInformation>
                        <BedroomInformation>2. pellentesque. Egestas varius fermentum convallis integer consequat dignissim</BedroomInformation>
                        <BedroomTitle>Pacote</BedroomTitle>
                        <BedroomInformation>Tortor, vitae vel in semper risus. Ornare maecenas nisl nec facilisis amet, mattis morbi </BedroomInformation>
                    </BedroomArea>
                    <Package>
                        <Itens>
                            <ItensInformation>Diária</ItensInformation>
                            <ItensInformation>Reserva</ItensInformation>
                            <ItensInformation>Total/dia</ItensInformation>
                        </Itens>
                        <ItensValue>
                            <ItensValueDescription>R$ 980,00</ItensValueDescription>
                            <ItensValueDescription>15 dias</ItensValueDescription>
                            <ItensValueDescription>R$ 14.700,00</ItensValueDescription>
                        </ItensValue>
                    </Package>
                    <Tag>
                        <TagInformation>*Pagamento Antecipado</TagInformation>
                    </Tag>
                    <ButtonContainer>
                        <Button text="Reservar agora!" />
                    </ButtonContainer>
                </RowContainer>
            </Content>
        </Container>
   );
}