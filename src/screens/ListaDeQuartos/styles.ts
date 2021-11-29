import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.ScrollView`
    flex: 1;
    margin-top: ${getStatusBarHeight()}px;
    background-color: ${({theme}) => theme.colors.background}
`;

export const Content = styled.View`
    align-items: center;
    padding: 0 25px;
`;

export const ButtonContainer = styled.View`
    margin: 20px 0;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
`;

export const NewsletterArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 15px;
`;

export const NewsletterHeader = styled.Text`
    font-size: 30px;
    font-weight: bold;
`;

export const TextReplace = styled.Text`
    font-size: 15px;
    margin: 150px 0;
`;

export const BannerImage = styled.Image`
    height: 120px;
    width: 100%;
`;