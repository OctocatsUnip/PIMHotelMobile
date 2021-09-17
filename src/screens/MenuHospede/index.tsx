import React, { useState } from 'react';

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

import MyBedroomCard from '../../components/MyBedroomCard'
import NoBedroomCard from '../../components/NoBedroomCard'
import NewstletterCard from '../../components/NewstletterCard'
import Header from '../../components/Header'
import { Button } from '../../components/Button';

export default function MenuHospede() {

    const [page, setPage] = useState("1 2");
    const [quarto, setQuarto] = useState();

    return (
        <Container>
            <Header />
            <Content>
                <GuestArea>
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
                        <Button text="Saiba Mais!" />
                    </NewsletterArea>
                </GuestArea>
            </Content>
        </Container>
    )
}