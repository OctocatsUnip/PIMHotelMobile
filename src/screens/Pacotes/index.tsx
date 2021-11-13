import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Header'

import * as S from './styles';

import BedroomOptionsCard from '../../components/BedroomOptionsCard'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export default function Pacotes() {

   const [bedroomType, setBedroomType] = useState("Executive Prime");

   return (
      <ScrollView
         contentContainerStyle={{
            backgroundColor: "white",
            marginTop: getStatusBarHeight(),
            paddingBottom: 60
         }}
         showsVerticalScrollIndicator={false}
      >
         <Header />
         <S.Container>
            <S.BedroomTypeArea>
               <S.BedroomTypeHeader>
                  {bedroomType}
               </S.BedroomTypeHeader>
               <S.Separator />
            </S.BedroomTypeArea>
            <S.OptionsHeader>
               Pacotes
            </S.OptionsHeader>
            <S.OptionsArea>
               <BedroomOptionsCard screen="Reserva"/>
            </S.OptionsArea>
         </S.Container>
      </ScrollView>
   );
}