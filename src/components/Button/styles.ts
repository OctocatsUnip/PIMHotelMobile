import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
    width: string;
};

export const Container = styled(RectButton)<ButtonProps>`
    padding: 10px 0;
    width: ${({width}) => width};
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.buttonColor};
`;

export const ButtonText = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 13px;
    color: ${({theme}) => theme.colors.white};
`;