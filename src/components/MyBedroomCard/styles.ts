import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
    flex-direction: row;
    background-color: ${({theme}) => theme.colors.white};
    padding: 10px 20px;
    align-items: center;
    justify-content: space-around;
    border-width: 2px;
    border-color: ${({theme}) => theme.colors.gray};
    border-radius: 15px;
    margin-bottom: 10px;
`;

export const BedroomImage = styled.Image`
    height: 200px;
    width: 150px;
`;

export const Content = styled.View`
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    flex-shrink: 1;
`;

export const Description = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 14px;
    text-align: left;
    margin-bottom: 20px;
`;

export const ButtonServices = styled(RectButton)`
    padding: 10px;
    background-color: ${({theme}) => theme.colors.buttonColor};
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.white};
    font-size: 16px;
`;