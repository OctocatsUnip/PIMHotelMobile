import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.primary};
`;

export const Content = styled(RectButton)`
    height: 80px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 20px;
`;

export const ImageHeader = styled.Image`
    position: absolute;
    height: 80px;
    width: 100%;
    opacity: 0.4;
`;

export const ProfilePhoto = styled.Image`
    height: 40px;
    width: 40px;
    border-radius: 20px;
`;

export const UserName = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({theme}) => theme.colors.white};
    font-weight: bold;
    margin-right: 5px;
`;