import React from 'react';

import {
    Container,
    Content,
    ProfilePhoto,
    UserName,
    ImageHeader,
} from './styles';

export default function Header(){
    return(
        <Container>
            <ImageHeader
                source={require('../../assets/images/header.png')}
            />
            <Content>
                <UserName>Nicolas</UserName>
                <ProfilePhoto
                    source={require('../../assets/images/cidadeNoite.png')}
                />
            </Content>
        </Container>
    )
}