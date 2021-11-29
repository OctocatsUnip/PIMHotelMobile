import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import {Dimensions} from 'react-native'

export const Container = styled(RectButton)`
    width: ${Dimensions.get('window').width}px;
    margin-right: 20px;
    margin-bottom: 30px
`;

export const ButtonContent = styled.View`
    flex-direction: row;
    background-color: ${({theme}) => theme.colors.white};
    padding: 20px 20px;
    align-items: center;
    justify-content: space-around;
    border-width: 1px;
    border-radius: 10px;
`;

export const Title = styled.Text`
    font-size: 20px;
    margin-bottom: 10px;
`;

export const BedroomImage = styled.Image`
    height: 200px;
    width: 200px;
    border-radius: 100px;
    margin: 20px 0;
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
    text-align: center;
    margin-bottom: 20px;
`;
