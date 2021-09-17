import React from 'react';
import { useNavigation } from '@react-navigation/core';

import { 
    Container,
    Content,
    ButtonContainer,
} from './styles';

import Header from '../../components/Header';
import { Button } from '../../components/Button';
import BedroomCard from '../../components/BedroomCard';

export default function ListaDeQuartos(){
    const navigation = useNavigation();

    function Filtrar(){
        navigation.navigate("Filtro")
    }

    return(
        <Container>
            <Header />
            <Content>
                <ButtonContainer>
                    <Button 
                        text="Filtrar" 
                        width="40%"
                        onPress={Filtrar}
                    />
                </ButtonContainer>
                <BedroomCard />
            </Content>
        </Container>
    )
}