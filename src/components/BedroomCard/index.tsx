import React from 'react';
import { useTheme } from 'styled-components';

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
    CheckIcon
} from './styles';

export default function BedroomCard(){

    const theme = useTheme();

    return(
        <Container>
            <RoomImage
                source={require('../../assets/images/quarto1.png')}
                resizeMode="cover"
            />
            <Content>
                <Title>Executive Prime</Title>
                <InfoArea>
                    <BedroomInfo>
                      <BedIcon name="bed" size={15}/>
                      <Text>1</Text>
                      <ShowerIcon name="shower" size={15}/> 
                      <Text>1</Text>
                    </BedroomInfo>
                    <TextPrice>R$ 980,00</TextPrice>
                </InfoArea>
                <DescriptionContainer>
                    <CheckIcon name="check" size={15} color={theme.colors.green}/>
                    <DescriptionText>Cancelamento grátis</DescriptionText>
                </DescriptionContainer>
                <DescriptionContainer>
                    <CheckIcon name="check" size={15} color={theme.colors.green}/>
                    <DescriptionText>Café da manhã</DescriptionText>
                </DescriptionContainer>
            </Content>
        </Container>
    )
}