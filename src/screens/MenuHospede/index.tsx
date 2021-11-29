import React, { useState, useRef } from 'react';
import {FlatList, Animated, StyleSheet, Dimensions} from 'react-native'
import {useTheme} from 'styled-components'

import {
    GuestArea,
    BedroomArea,
    BedroomHeader,
    BedroomPage,
    PageNumber,
    NewsletterArea,
    NewsletterHeader,
    BannerImage,
    Content,
    Separator,
    Container,
} from './styles';

import {Indicator} from '../../components/Indicator'
import MyBedroomCard from '../../components/MyBedroomCard'
import NoBedroomCard from '../../components/NoBedroomCard'
import Header from '../../components/Header'
import { Button } from '../../components/Button';

interface BackdropProps {
    scrollX: Animated.Value;
}

export default function MenuHospede() {

    const [page, setPage] = useState("1 2");
    const [quarto, setQuarto] = useState();
    const theme = useTheme()

    // const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];

    const data = [
        {id: 1, img: require('../../assets/images/quarto1.png'), title: 'Suíte Master'},
        {id: 2, img: require('../../assets/images/quarto2.png'), title: 'Suíte Empresárial'},
        {id: 3, img: require('../../assets/images/quarto1.png'), title: 'Convencional'},
        {id: 4, img: require('../../assets/images/quarto2.png'), title: 'Quartinho'},
    ]

    // const Backdrop = ({scrollX}:BackdropProps) => {
    //     const backgroundColor = scrollX.interpolate({
    //         inputRange: bgs.map((_, i) => i * Dimensions.get('window').width),
    //         outputRange: bgs.map((bg) => bg)
    //     })

    //     return(
    //         <Animated.View
    //             style={[
    //                 StyleSheet.absoluteFillObject,
    //                 {
    //                     backgroundColor,
    //                 }
    //             ]}
    //         />
    //     )
    // }

    const scrollX = useRef(new Animated.Value(0)).current;

    return (
        <Container>
            {/* <Backdrop scrollX={scrollX}/> */}
            <Header />
            <Content>
                <GuestArea>
                    <BedroomArea>
                        <BedroomHeader>
                            Meus quartos
                        </BedroomHeader>
                        {
                            !quarto ?
                                <>
                                <Animated.FlatList
                                    data={data}
                                    keyExtractor={(item) => String(item.id)}
                                    renderItem={({item}) => (
                                        <MyBedroomCard img={item.img} title={item.title}/>

                                    )}
                                    horizontal
                                    pagingEnabled
                                    showsHorizontalScrollIndicator={false}
                                    scrollEventThrottle={32}
                                    onScroll={Animated.event(
                                        [{nativeEvent: {contentOffset: {x: scrollX}}}],
                                        {useNativeDriver: true}
                                    )}
                                    // contentContainerStyle={{
                                    //     alignItems: 'center',
                                    //     justifyContent: 'center'
                                    // }}
                                />
                                <Indicator
                                    data={data}
                                    scrollX={scrollX}
                                    color={theme.colors.primary}
                                />
                                </>
                                :
                                <NoBedroomCard />
                        }
                        {/* <BedroomPage>
                            <PageNumber>
                                -- {page} --
                            </PageNumber>
                            <Separator />
                        </BedroomPage> */}
                    </BedroomArea>
                    
                </GuestArea>
            </Content>
        </Container>
    )
}