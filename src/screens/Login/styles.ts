import styled from 'styled-components/native';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const ImagemFundo = styled.ImageBackground`
    flex: 1;
    align-items: center;
    justify-content: space-around;
`;

export const Header = styled.View`
    height: 100px;
`;

export const LogoImage = styled.Image`
    height: 100px;
`;

export const LoginArea = styled.View``;

export const UserLogin = styled.View`
    flex-direction: row;
    margin-bottom: 25px;
    width: 250px;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.gray};
    padding: 0 10px;
    opacity: 0.8;
`;

export const UserIcon = styled(AntDesign)``;

export const LoginInput = styled.TextInput`
    width: 240px;
    height: 55px;
    padding: 15px 20px;
`;

export const PassIcon = styled(Octicons)``;

export const LoginButton = styled(RectButton)`
    background-color: ${({theme}) => theme.colors.buttonLogin};
    height: 35px;
    width: 250px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
`;

export const ButtonText = styled.Text`
    color: ${({theme}) => theme.colors.primary};
    font-size: 20px;
`;

export const CreateAccount = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-size: 16px;
`;