import React from 'react';
import Header from '../../components/Header';
import { useForm } from 'react-hook-form';


import {
   Container,
   InputName,
   UserName,
   UserContent,
   UserImage,
   ImageView,
   ButtonContent,
   MailIcon,
   PhoneIcon,
   Text,
   LinhaArea,
   QuartoContent
} from './styles';

import { InputForm } from '../../components/InputForm';
import { Button } from '../../components/Button';


export default function SolicitarServicos() {

   const {control} = useForm();
   return (
      <Container>
         <Header />
         <ImageView>
            <UserImage
                source={require('../../assets/images/usuario.jpg')}
            />
            <UserContent>
                <UserName>Marcelo</UserName>
            </UserContent>
            <QuartoContent>
                <Text>1 Quarto</Text>
            </QuartoContent>
         </ImageView>
        <LinhaArea>
         <MailIcon 
            name="mail"
            size={22}
            color="#4B5B5B"
         />
         <Text>pessoa@exemplo.com.br</Text>
        </LinhaArea>
        <LinhaArea>
         <PhoneIcon 
            name="phone"
            size={22}
            color="#4B5B5B"
         />
         <Text>(16)99999-9999</Text>
        </LinhaArea>
         <ButtonContent>
            <Button text="Modificar Dados" />
         </ButtonContent>


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
         <InputName>E-mail</InputName>
          <InputForm
            name="email"
            control={control}
            placeholder="pessoa@exemplo.com.br"
            style={{
                borderWidth: 1,
                padding: 20
            }}
          />
          <InputName>Telefone</InputName>
          <InputForm
            name="telefone"
            control={control}
            placeholder="(00)0000-0000"
            style={{
                borderWidth: 1,
                padding: 20
            }}
          />
          <InputName>Celular</InputName>
          <InputForm
            name="celular"
            control={control}
            placeholder="(00)00000-0000"
            style={{
                borderWidth: 1,
                padding: 20
            }}
          />
          <InputName>CEP</InputName>
          <InputForm
            name="cep"
            control={control}
            placeholder="0000-000"
            style={{
                borderWidth: 1,
                padding: 20
            }}
          />
          <InputName>Cidade</InputName>
          <InputForm
            name="cidade"
            control={control}
            placeholder="Ribeirão Preto"
            style={{
                borderWidth: 1,
                padding: 20
            }}
          />
          <InputName>Endereço</InputName>
          <InputForm
            name="endereco"
            control={control}
            placeholder="Av. Paulista"
            style={{
                borderWidth: 1,
                padding: 20
            }}
          />
          <InputName>Número</InputName>
          <InputForm
            name="numero"
            control={control}
            placeholder="000"
            style={{
                borderWidth: 1,
                padding: 20,
            }}
          />
          <InputName>UF</InputName>
          <InputForm
            name="uf"
            control={control}
            placeholder="SP"
            style={{
                borderWidth: 1,
                padding: 20
            }}
          />
          <InputName>Nova Senha</InputName>
          <InputForm
            name="nova_senha"
            control={control}
            secureTextEntry={true}
            style={{
                borderWidth: 1,
                padding: 20
            }}
          />
          <InputName>Confirmar Senha</InputName>
          <InputForm
            name="confirma_senha"
            control={control}
            secureTextEntry={true}
            style={{
                borderWidth: 1,
                padding: 20,
                marginBottom: 30
            }}
          />
         <ButtonContent>
            <Button text="Salvar Alterações" />
         </ButtonContent>
         <ButtonContent>
            <Button text="Cancelar Alterações" />
         </ButtonContent>
   </Container>

   );
}

