import React, {useRef, useEffect, useState, useLayoutEffect} from 'react';
import { ActivityIndicator, RefreshControl } from 'react-native'
import {useTheme} from 'styled-components'
import { useNavigation, useFocusEffect } from '@react-navigation/core';
import {FlatList, Animated, Dimensions} from 'react-native'
import NewstletterCard from '../../components/NewstletterCard'
import {api} from '../../services/api'
import {useFilter} from '../../../hooks/filter'


import { 
    Container,
    Content,
    ButtonContainer,
    NewsletterArea,
    NewsletterHeader,
    BannerImage,
    TextReplace
} from './styles';

import Header from '../../components/Header';
import { Button } from '../../components/Button';
import BedroomCard from '../../components/BedroomCard';
import {Indicator} from '../../components/Indicator'

interface SquareProps {
    scrollX: Animated.Value;
}

interface DataProps {
    id: number;
    nome_quarto: string;
    valor_quarto: number;
    quantia_camas: number;
    quantia_banheiros: number;
    img_quarto: number;
}


export default function ListaDeQuartos({route}:any){
    const [data, setData] = useState<DataProps[]>([])
    const [auxData, setAuxData] = useState<DataProps[]>([])
    const [load, setLoad] = useState(true)
    const [refreshing, setRefreshing] = useState(false)
    const navigation = useNavigation<any>();
    const scrollX = useRef(new Animated.Value(0)).current
    const theme = useTheme()

    const {valorQuarto, setValorQuarto, quantiaCamas, setQuantiaCamas, quantiaBanheiros, setQuantiaBanheiros} = useFilter()


    function Filtrar(){
        navigation.navigate("Filtro")
    }

    async function getQuartos(){
        try {
            await api.get('/quartos')
            .then((response) => setAuxData(response.data))
            .finally(() => setLoad(false))
            console.log('Teste')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getQuartos()
        if(valorQuarto){
            const newData = auxData.filter((item) => {
                if(item.valor_quarto <= valorQuarto){
                    return item
                }
            }).filter((item) => {
                if(item.quantia_camas <= quantiaCamas){
                    return item
                }
            }).filter((item) => {
                if(item.quantia_banheiros <= quantiaBanheiros){
                    return item
                }
            })

            setData(newData)

        }else{
            setData(auxData)
        }
    }, [load, valorQuarto])

    const wait = (timeout:number) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(async() => {
            await api.get('/quartos')
            .then((response) => setData(response.data))
            .finally(() => setRefreshing(false))
            console.log('Teste2')
        });
      }, []);

    

    // const data = [
    //     {id: 1, img: require('../../assets/images/quarto1.png'), title: 'Executive Prime', price: 980.00, cancel: true, cafe: true, banheiros: 1, camas: 1},
    //     {id: 2, img: require('../../assets/images/quarto2.png'), title: 'Suíte de Luxo', price: 2180.00, cancel: true, cafe: true, banheiros: 1, camas: 2},
    //     {id: 3, img: require('../../assets/images/quarto1.png'), title: 'Executivo', price: 1080.00, cancel: true, cafe: true, banheiros: 1, camas: 1},
    //     {id: 4, img: require('../../assets/images/quarto2.png'), title: 'Quartinho', price: 580.00, cancel: true, cafe: false, banheiros: 1, camas: 1},
    // ]

    const Square = ({scrollX}:SquareProps) => {
        const height = Dimensions.get('window').height/1.5
        const width = Dimensions.get('window').width
        return(
            <Animated.View
                style={{
                    position: 'absolute',
                    backgroundColor: theme.colors.background,
                    height,
                    width,
                    borderBottomLeftRadius: 120,
                    borderBottomRightRadius: 120
                }}
            />
        )
    }

    return(
        <Container
        refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
            <Header />
            <Content>
                {/* <Square scrollX={scrollX}/> */}
                {
                    load ?
                    <ActivityIndicator color={theme.colors.darkerBackground} size="small"/>
                    :
                    <>
                    <ButtonContainer>
                        <Button 
                            text="Filtrar" 
                            width="40%"
                            onPress={Filtrar}
                        />
                    </ButtonContainer>
                    <Animated.FlatList
                        data={data}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({item}) => (
                            <BedroomCard
                                img={item.img_quarto}
                                title={item.nome_quarto}
                                price={item.valor_quarto}
                                camas={item.quantia_camas}
                                banheiros={item.quantia_banheiros}
                            />
                        )}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event(
                            [{nativeEvent: {contentOffset: {x: scrollX}}}],
                            {useNativeDriver: true}
                        )}
                        removeClippedSubviews={true}
                        ListEmptyComponent={() => (
                            <TextReplace>Não há quartos com esses filtros 😥</TextReplace>
                        )}
                    />
                    <Indicator
                        data={data}
                        scrollX={scrollX}
                        color={theme.colors.primary}
                    />
                    </>
                }

            </Content>
            <NewsletterArea>
                <NewsletterHeader>
                    Últimas Notícias
                </NewsletterHeader>
                <NewstletterCard />
                <BannerImage
                    source={require('../../assets/images/covid.png')}
                    resizeMode="stretch"
                />
                <NewstletterCard />
                <Button text="Saiba Mais!" />
            </NewsletterArea>
        </Container>
    )
}