import React from 'react';
import Header from '../../components/Header';


import {
   Container,
   Content,
   RowContainer,
   TitleFirst,
   Separator,
   SectionContainer,
   CheckBoxContainer,
   CheckBox,
   Text,
   Title,
   ServicesContainer,
   ContentContainer
   
   
} from './styles';

import { Button } from '../../components/Button';


export default function SolicitarServicos() {
   return (
      <Container>
          <Content>
          <Header />
            <ContentContainer>
             <TitleFirst>Executive Prime </TitleFirst>            
             <Separator/>               
         
         <SectionContainer>
                    <Title>Serviço de quarto</Title>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Limpeza</Text>
                    </RowContainer>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Minhas Roupas</Text>
                    </RowContainer>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Itens Higiênicos</Text>
                    </RowContainer>
                </SectionContainer>
                     
                <SectionContainer>
                    <Title>Comidas e Bebidas</Title>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Cardápio</Text>
                    </RowContainer>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Reposição Frigobar</Text>
                    </RowContainer>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Bebidas</Text>
                    </RowContainer>
                </SectionContainer>

                <SectionContainer>
                    <Title>Manutenção</Title>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Televisão</Text>
                    </RowContainer>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Wi-fi e Internet</Text>
                    </RowContainer>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Chuveiro</Text>
                    </RowContainer>
                    <RowContainer>
                        <CheckBoxContainer>
                            <CheckBox />
                        </CheckBoxContainer>
                        <Text>Outro</Text>
                    </RowContainer>
                </SectionContainer>
               
                <ServicesContainer>
                <Button text="Solicitar!" />
               </ServicesContainer>
               </ContentContainer>
          </Content>
      </Container>
 );
}