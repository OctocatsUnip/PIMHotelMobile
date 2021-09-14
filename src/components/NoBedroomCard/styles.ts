import styled            from 'styled-components/native';
import { RectButton }    from 'react-native-gesture-handler';
import { FontAwesome5  } from '@expo/vector-icons';

export const Container = styled.View`
    flex-direction: row;
    background-color: ${({theme}) => theme.colors.white};
    padding: 20px 20px;
    align-items: center;
    justify-content: space-around;
`;

export const Content = styled.View`
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    flex-shrink: 1;
`;

export const Description = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 18px;
    text-align: left;
    margin: 15px;
`;

export const ButtonReserve = styled(RectButton)`
    padding: 10px;
    margin-top: 15px;
    background-color: ${({theme}) => theme.colors.buttonColor};
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.white};
    font-size: 16px;
`;

export const SadFace = styled(FontAwesome5)``;

