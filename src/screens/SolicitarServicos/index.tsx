import React from 'react';
import Header from '../../components/Header';

import { useForm } from 'react-hook-form';


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
   InputName,
   UserImage,
   ImageView,
   UserContent,
   UserName
} from './styles';

import { InputForm } from '../../components/InputForm';


export default function SolicitarServicos() {
    const {control} = useForm();
   return (
      <Container
        contentContainerStyle={{
            paddingHorizontal: 20,
        }}
      >
          <ImageView>
            <UserImage
                source={require('../../assets/images/cidadeNoite.png')}
            />
            <UserContent>
                <UserName>Marcelo</UserName>
            </UserContent>
          </ImageView>
          <InputName>Nome do usuário</InputName>
          <InputForm
            name="nome_usuario"
            control={control}
            placeholder="Nome"
            style={{
                borderWidth: 1,
                padding: 20
            }}
          />
          <InputName>Profissão</InputName>
          <InputForm
            name="profissao"
            control={control}
            placeholder="Profissão"
            style={{
                borderWidth: 1,
                padding: 20
            }}
          />
      </Container>
 );
}