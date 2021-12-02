import React, { useState } from 'react';
import {Modal} from 'react-native'
import { Button } from '../Button';
import {useNavigation} from '@react-navigation/native'
import {useTheme} from 'styled-components/native'


import {
    Container,
    Content,
    OptionArea,
    OptionHeaderCompressed,
    OptionHeader,
    Separator,
    Description,
    ButtonContent,
    PriceContent,
    Price,
    PriceDetails,
    ModalView,
    CheckIcon,
    ModalText,
    ModalContent
} from './styles';

interface Props {
    screen: string;
    descricao: string;
    valor: number
}

export default function BedroomOptionsCard({screen, descricao, valor}:Props) {
    const [ativo, setAtivo] = useState(false);
    const [loadModal, setLoadModal] = useState(false);
    const {navigate} = useNavigation<any>()

    const theme = useTheme()


    function handlePressCard(){
        setAtivo(!ativo)
    }

    function handlePressButton(screen:string){
        navigate(screen)
    }

    return (
        <Container>
            <Content
                onPress={handlePressCard}
            >
                {
                    !ativo ?
                        <OptionArea>
                            <OptionHeader>
                                Tarifa Simples
                            </OptionHeader>
                            <Separator />
                            <Description>
                                Regras da Tarifa
                            </Description>
                        </OptionArea>
                        :
                        <OptionArea>
                            <OptionHeader>
                                Tarifa Simples
                            </OptionHeader>
                            <Separator />
                            <Description>
                                {descricao}
                            </Description>
                        </OptionArea>
                }
                <PriceContent>
                    <Price>
                        R$ {valor}
                    </Price>
                    <PriceDetails>
                        Méd./Diária
                    </PriceDetails>
                </PriceContent>
                <ButtonContent>
                    <Button
                        text="Reservar agora!"
                        width="100%"
                        onPress={() => {
                            setLoadModal(true)
                            setTimeout(() => {
                                setLoadModal(false)
                            }, 2500)
                        }}
                    />
                </ButtonContent>
            </Content>
            <Modal
                animationType="slide"
                transparent={true}
                visible={loadModal}
                onRequestClose={() => {
                  setLoadModal(false);
                }}
            >
                <ModalView>
                    <ModalContent>
                        <CheckIcon name="check-circle" size={100} color={theme.colors.white}/>
                        <ModalText>Reserva realizada!</ModalText>
                    </ModalContent>
                </ModalView>
            </Modal>
        </Container>
    )
}