import React, { useState } from 'react';

import {
    Text,
    ScrollView,
    StatusBar,
} from 'react-native';

import {
    HospedeArea,
    BedroomArea,
    BedroomHeader,
    TextButton,
    BedroomPage,
    PageNumber,
    NewsletterArea,
    NewsletterHeader,
    BannerImage,
    MoreButton,
    NewsletterButton
} from './styles';

import MyBedroomCard from '../../components/MyBedroomCard'
import NoBedroomCard from '../../components/NoBedroomCard'
import NewstletterCard from '../../components/NewstletterCard'
import Header from '../../components/Header'

export default function MenuHospede() {

    const [page, setPage] = useState("1 2")

    return (
            <ScrollView
                contentContainerStyle={{
                    paddingTop: StatusBar.currentHeight,
                    paddingHorizontal: 15,
                    backgroundColor: "white"
                }}
            >
                <Header/>
                <HospedeArea>
                    <BedroomArea>
                        <BedroomHeader>
                            Meus quartos
                        </BedroomHeader>
                            {/* <MyBedroomCard />
                            <MyBedroomCard /> */}
                            <NoBedroomCard />
                        <BedroomPage>
                            <PageNumber>
                                -- {page} --
                            </PageNumber>
                            <Text>
                                ______________________________________________
                            </Text>
                        </BedroomPage>
                    </BedroomArea>
                    <NewsletterArea>
                        <NewsletterHeader>
                            Últimas Notícias
                        </NewsletterHeader>
                            <NewstletterCard />
                        <BannerImage
                            source={require('../../assets/images/covid.png')}
                            resizeMode="contain"
                        />
                            <NewstletterCard />
                        <MoreButton>
                            <NewsletterButton
                                onPress={() => { alert("Saiba Mais!") }}
                                >
                                <TextButton>Saiba Mais!</TextButton>
                            </NewsletterButton>
                        </MoreButton>
                    </NewsletterArea>
                </HospedeArea>
            </ScrollView>
    )
}