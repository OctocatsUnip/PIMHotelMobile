import React from 'react';

import {
   Container,
   Text,
} from './styles';

import {Check} from '../../components/Check';

export default function SolicitarServicos() {

   return (
        <Container>
            <Text>Em produção</Text>
            <Check name="teset"/>
            <Check name="teset"/>
            <Check name="teset"/>
        </Container>
   );
}