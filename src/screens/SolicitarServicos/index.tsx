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

   
   
} from './styles';

<<<<<<< HEAD
import {Check} from '../../components/Check';

export default function SolicitarServicos() {
=======
import { Button } from '../../components/Button';
>>>>>>> 2c7aa149240bd2d4731360bb438aa4918a3e7809


export default function SolicitarServicos() {
   return (
<<<<<<< HEAD
        <Container>
            <Text>Em produção</Text>
            <Check name="teset"/>
            <Check name="teset"/>
            <Check name="teset"/>
        </Container>
   );
=======
      <Container>
          <Header />
          <Content>
         
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
          </Content>
      </Container>
 );
>>>>>>> 2c7aa149240bd2d4731360bb438aa4918a3e7809
}