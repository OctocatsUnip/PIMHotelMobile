import React from 'react';

import {
    Container,
    Content,
    NewsletterImage,
    NewsletterTitle,
    NewsletterDescription
} from './styles';

export default function NewstletterCard(){
    return(

        <Container>
            <NewsletterImage
                source={require('../../assets/images/newsletter1.png')}
                resizeMode="contain"
            />
            <Content>
                <NewsletterTitle>
                    LOREM IPSUM
                </NewsletterTitle>
                <NewsletterDescription>
                    Lorem ipsum dolor sit amet, consectetur...
                </NewsletterDescription>
            </Content>
        </Container>
    )
}