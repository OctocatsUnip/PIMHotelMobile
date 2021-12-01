import React, { useState, useEffect } from 'react';
import {useTheme} from 'styled-components/native'
import {ActivityIndicator, FlatList, View} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Header'
import {api} from '../../services/api'

import * as S from './styles';

import BedroomOptionsCard from '../../components/BedroomOptionsCard'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export default function Pacotes() {

   const [bedroomType, setBedroomType] = useState("Executive Prime");
   

   const theme = useTheme()

   // async function getData(){
   //    await api.get('/beneficio')
   //    .then((resp) => setDados(resp.data))
   //    .finally(() => setLoad(false))
   // }

   // useEffect(() => {
   //    getData()
   // }, [load])

   return (
      <View
         style={{
            marginTop: getStatusBarHeight(),
            flex: 1
         }}
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
               {/* {
                  load ?
                     <ActivityIndicator size="small" color={theme.colors.primary}/>
                  :
                     <FlatList
                        data={dados}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({item}) => {
                           return(
                              <BedroomOptionsCard screen="Reserva" descricao={item.nome_beneficio} valor={item.valor_beneficio}/>
                           )
                        }}
                        contentContainerStyle={{
                           alignItems: 'center',
                        }}
                     />
               } */}
         </S.Container>
      </View>
   );
}