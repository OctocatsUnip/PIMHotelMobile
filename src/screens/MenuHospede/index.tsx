import React, { useState } from 'react';

import {
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
    NewsletterButton,
    Content,
    Separator
} from './styles';

import MyBedroomCard from '../../components/MyBedroomCard'
import NoBedroomCard from '../../components/NoBedroomCard'
import NewstletterCard from '../../components/NewstletterCard'
import Header from '../../components/Header'

export default function MenuHospede() {

    const [page, setPage] = useState("1 2");
    const [quarto, setQuarto] = useState();

    return (
            <ScrollView
                contentContainerStyle={{
                    backgroundColor: "white"
                }}
                showsVerticalScrollIndicator={false}
            >
                <Header/>
                <Content>
                <HospedeArea>
                    <BedroomArea>
                        <BedroomHeader>
                            Meus quartos
                        </BedroomHeader>
                            {
                                !quarto ?
                                <MyBedroomCard />
                                :
                                <NoBedroomCard />
                            }
                        <BedroomPage>
                            <PageNumber>
                                -- {page} --
                            </PageNumber>
                            <Separator />
                        </BedroomPage>
                    </BedroomArea>
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
                        <MoreButton>
                            <NewsletterButton
                                onPress={() => { alert("Saiba Mais!") }}
                                >
                                <TextButton>Saiba Mais!</TextButton>
                            </NewsletterButton>
                        </MoreButton>
                    </NewsletterArea>
                </HospedeArea>
                </Content>
            </ScrollView>
    )
}