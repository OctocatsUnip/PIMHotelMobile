import React from 'react';

import { 
    Container,
    Content,
} from './styles';

import Header from '../../components/Header';
import BedroomCard from '../../components/BedroomCard';

export default function ListaDeQuartos(){
    return(
        <Container>
            <Header />
            <Content>
                <BedroomCard />
            </Content>
        </Container>
    )
}