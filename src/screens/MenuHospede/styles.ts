import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import theme from '../../../global/theme'

export const GuestArea = styled.View``;

export const BedroomArea = styled.View`
`;

export const Container = styled.ScrollView.attrs({
    contentContainerStyle: {
        backgroundColor: theme.colors.background,
        flex: 1,
     },
     showsVerticalScrollIndicator:false
})`
    margin-top: ${getStatusBarHeight()}px;
`;

export const BedroomHeader = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin: 10px 0 30px 0;
    text-align: center;
    color: ${({theme}) => theme.colors.buttonColor}
`;

export const BedroomPage = styled.View`
    align-items: center;
`;

export const PageNumber = styled.Text`
    font-size: 20px;
    color: #4B5B5B;
    margin-bottom: 10px;
`;

export const NewsletterArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const NewsletterHeader = styled.Text`
    font-size: 30px;
    font-weight: bold;
`;

export const BannerImage = styled.Image`
    height: 120px;
    width: 100%;
`;

export const Content = styled.View`
    padding: 0 15px;
`;

export const Separator = styled.View`
    border-bottom-width: 1px;
    width: 80%;
    border-color: ${({ theme }) => theme.colors.gray};
`;