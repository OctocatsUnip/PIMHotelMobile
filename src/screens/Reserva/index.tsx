import React, {useState, useEffect} from 'react';
import {FlatList, ActivityIndicator} from 'react-native'
import Header from '../../components/Header';
import { Button } from '../../components/Button';
import BedroomOptionsCard from '../../components/BedroomOptionsCard'
import {api} from '../../services/api'
import {useTheme} from 'styled-components/native'


import {
    Container,
    Content,
    RowContainer,
    Title,
    Separator,
    BedroomArea,
    BedroomTitle,
    BedroomInformation,
    Package,
    Itens,
    ItensInformation,
    ItensValue,
    ItensValueDescription,
    Tag,
    TagInformation,
    ButtonContainer,
    Background,
    InfoArea,
    BedIcon,
    ShowerIcon,
    BedroomInfo,
    Text,
    InfoAreaItems
} from './styles';

interface PropsRoute {
    titulo: string;
}

interface Props {
    id: number;
    nome_beneficio: string;
    valor_beneficio: number
 }

export default function Reserva({route}:any) {

    const {titulo, preco, camas, banheiros} = route.params
    const [load, setLoad] = useState(true)
    const [dados, setDados] = useState<Props[]>([])

    const theme = useTheme()


    async function getData(){
        await api.get('/beneficio')
        .then((resp) => setDados(resp.data))
        .finally(() => setLoad(false))
     }
  
     useEffect(() => {
        getData()
     }, [load])

   return (
        <Container>

            <Background source={require('../../assets/images/bannerQuarto.png')}/>

            <Content>
                <RowContainer>
                    <Title>{titulo}</Title>
                    <Separator />
                    <BedroomArea>
                        <BedroomTitle>Quarto</BedroomTitle>
                        <InfoArea>
                            <BedroomInfo>
                                <InfoAreaItems>
                                <BedIcon name="bed" size={15}/>
                                <Text>{camas}</Text>
                                </InfoAreaItems>
                                <InfoAreaItems>
                                <ShowerIcon name="shower" size={15}/> 
                                <Text>{banheiros}</Text>
                                </InfoAreaItems>
                            </BedroomInfo>
                        </InfoArea>
                        <BedroomTitle>Pacotes</BedroomTitle>
                        {
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
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
                        }
                    </BedroomArea>
                    <Package>
                        <Itens>
                            <ItensInformation>Diária</ItensInformation>
                            {/* <ItensInformation>Reserva</ItensInformation>
                            <ItensInformation>Total/dia</ItensInformation> */}
                        </Itens>
                        <ItensValue>
                            <ItensValueDescription>R$ {preco}</ItensValueDescription>
                            {/* <ItensValueDescription>15 dias</ItensValueDescription>
                            <ItensValueDescription>R$ 14.700,00</ItensValueDescription> */}
                        </ItensValue>
                    </Package>
                    <Tag>
                        <TagInformation>*Pagamento Antecipado</TagInformation>
                    </Tag>
                    <ButtonContainer>
                        <Button text="Reservar agora!" />
                    </ButtonContainer>
                </RowContainer>
            </Content>
        </Container>
   );
}