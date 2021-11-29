import styled from 'styled-components/native';
import {Dimensions} from 'react-native'
import { FontAwesome5, Feather } from '@expo/vector-icons'; 

export const Container = styled.View`
   align-items: center;
   justify-content: center;
   border-radius: 10px;
   width: ${Dimensions.get('window').width/1.2}px;
   margin-right: 20px;
   padding: 20px;
`;

export const Content = styled.View`
    padding: 10px 30px;
    align-items: center;
`;

export const RoomImage = styled.Image`
    height: 150px;
    width: ${Dimensions.get('window').width/1.2}px;
    /* border-top-left-radius: 10px; */
    border-radius: 10px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 24px;
    text-align: center;
`;

export const InfoArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const TextPrice = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 24px;
    color: ${({theme}) => theme.colors.green};
`;

export const Text = styled.Text`
    margin: 0 5px;
`;

export const BedIcon = styled(FontAwesome5)``;

export const ShowerIcon = styled(FontAwesome5)``;

export const BedroomInfo = styled.View`
    flex-direction: row;
    width: 50%;
    align-items: center;
    justify-content: center;
`;

export const DescriptionContainer = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
`;

export const DescriptionText = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 14px;
`;

export const CheckIcon = styled(Feather)`
    margin-right: 5px;
`;

export const ButtonContainer = styled.View`
    width: 100%;
    padding: 10px 30px;
    align-items: center;
    justify-content: center;
`;