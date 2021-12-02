import React from 'react';
import {Alert} from 'react-native'
import {useFilter} from '../../../hooks/filter'


import {
    Container,
    Content,
    ProfilePhoto,
    UserName,
    ImageHeader,
} from './styles';

export default function Header(){
    const {setUser} = useFilter()
    return(
        <Container>
            <ImageHeader
                source={require('../../assets/images/header.png')}
            />
            <Content
                onPress={() => {
                    Alert.alert("Deseja sair?", "Deseja deslogar do aplicativo",[
                        { text: "Sim", onPress: () => setUser({login: "", senha: ""})},
                        {text: "Não"}
                    ])
                }}
            >
                <UserName>Nicolas</UserName>
                <ProfilePhoto
                    source={require('../../assets/images/cidadeNoite.png')}
                />
            </Content>
        </Container>
    )
}