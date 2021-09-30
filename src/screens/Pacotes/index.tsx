import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Header'

import {
   Container,
   BedroomTypeArea,
   BedroomTypeHeader,
   Separator,
   OptionsHeader,
   OptionsArea,
} from './styles';

import BedroomOptionsCard from '../../components/BedroomOptionsCard'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export default function Pacotes() {

   const [bedroomType, setBedroomType] = useState("Executive Prime");

   return (
      <ScrollView
         contentContainerStyle={{
            backgroundColor: "white",
            marginTop: getStatusBarHeight()
         }}
         showsVerticalScrollIndicator={false}
      >
         <Header />
         <Container>
            <BedroomTypeArea>
               <BedroomTypeHeader>
                  {bedroomType}
               </BedroomTypeHeader>
               <Separator />
            </BedroomTypeArea>
            <OptionsHeader>
               Pacotes
            </OptionsHeader>
            <OptionsArea>
               <BedroomOptionsCard />
               <BedroomOptionsCard />
            </OptionsArea>
         </Container>
      </ScrollView>
   );
}