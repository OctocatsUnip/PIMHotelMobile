import React from 'react';
import { useTheme } from 'styled-components';
import { Button } from '../Button';

import {
    Container,
    Content,
    RoomImage,
    Title,
    InfoArea,
    Text,
    TextPrice,
    BedIcon,
    ShowerIcon,
    BedroomInfo,
    DescriptionContainer,
    DescriptionText,
    CheckIcon,
    ButtonContainer
} from './styles';

interface Props {
    img: number;
    title: string,
    price: number,
    camas: number,
    banheiros: number
}

export default function BedroomCard({img, title, price, camas, banheiros}:Props){

    const theme = useTheme();

    return(
        <Container>
            <RoomImage
                source={
                    img == 1 
                    ? require('../../assets/images/quarto1.png') :
                    require('../../assets/images/quarto2.png')
                }
                resizeMode="cover"
            />
            <Content>
                <Title>{title}</Title>
                <InfoArea>
                    <BedroomInfo>
                      <BedIcon name="bed" size={15}/>
                      <Text>{camas}</Text>
                      <ShowerIcon name="shower" size={15}/> 
                      <Text>{banheiros}</Text>
                    </BedroomInfo>
                    <TextPrice>{`R$ ${price}`}</TextPrice>
                </InfoArea>
                
                <DescriptionContainer>
                    <CheckIcon name="check" size={15} color={theme.colors.green}/>
                    <DescriptionText>Cancelamento grátis</DescriptionText>
                </DescriptionContainer>
            
                {/* <DescriptionContainer>
                    <CheckIcon name={cafe ? "check" : "x"} size={15} color={cafe ? theme.colors.green : theme.colors.cancel}/>
                    <DescriptionText>Café da manhã</DescriptionText>
                </DescriptionContainer> */}
            </Content>
            <ButtonContainer>
                <Button text="Reservar agora!" width="80%" />
            </ButtonContainer>
        </Container>
    )
}