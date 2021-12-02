import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FontAwesome5, Feather } from '@expo/vector-icons'; 


export const Content = styled.View`
   flex: 1;
   padding: 40px 20px;
   border-radius: 20px;
   background-color: #fff;
`;

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    
})`
    margin-top: ${getStatusBarHeight()}px;
    background-color: white;
`;

export const RowContainer = styled.View`

    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const InfoArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0
`;

export const BedIcon = styled(FontAwesome5)``;

export const ShowerIcon = styled(FontAwesome5)``;

export const CheckIcon = styled(Feather)``;

export const BedroomInfo = styled.View`
    flex-direction: row;
    width: 25%;
    align-items: center;
    justify-content: space-between;
`;

export const Separator = styled.View`
    border-bottom-width: 2px;
    width: 50%;
    border-color: #000;
    margin-bottom: 30px;
`;

export const Text = styled.Text`
    margin: 0 5px;
`;

export const BedroomArea = styled.View`
    width: 100%;
`;

export const InfoAreaItems = styled.View`
    flex-direction: row;
`

export const BedroomTitle = styled.Text`
    font-size: 18px;
    margin-top: 10px;
    align-items: flex-start;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const BedroomInformation = styled.Text`
    padding: 1px 10px;
    text-align: justify;  
`;

export const Package = styled.View`
    width: 100%;
    flex-direction: row;
`;

export const Itens = styled.View`
    margin-top: 30px;
    
`;

export const ModalView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.View`
    height: 400px;
    width: 300px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.green}

`;

export const ModalText = styled.Text`
    font-size: 25px;
    margin: 20px 0;
    color: ${({theme}) => theme.colors.white}
`;

export const ItensInformation = styled.Text`
    font-size: 20px;
    margin: 5px;

`;

export const ItensValue = styled.View`
    margin-top: 30px;
    margin-left: 70px;
`;

export const ItensValueDescription = styled.Text`
    font-size: 20px;
    margin: 5px;

`;

export const Tag = styled.View`
    width: 100%;
`;

export const TagInformation = styled.Text`
    font-weight: bold;
    color: green
`;

export const ButtonContainer = styled.View`
    width: 100%;
    padding: 10px 30px;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

export const Background = styled.ImageBackground`
    width: 100%;
    height: 300px;
    margin-bottom: -20px;
`;