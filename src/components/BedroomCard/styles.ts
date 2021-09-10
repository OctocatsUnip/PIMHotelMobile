import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons'; 

export const Container = styled.View`
    width: 100%;
   align-items: center;
   justify-content: center;
   border-width: 1px;
   border-radius: 10px;
   margin-bottom: 10px;
   width: 280px;
`;

export const Content = styled.View`
    padding: 10px 30px;
`;

export const RoomImage = styled.Image`
    height: 150px;
    width: 280px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 30px;
    font-weight: bold;
    margin: 10px 0;
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

export const CheckIcon = styled(FontAwesome5)`
    margin-right: 5px;
`;