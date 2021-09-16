import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const HospedeArea = styled.View``;

export const BedroomArea = styled.View`
`;

export const BedroomHeader = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin: 10px;
`;

export const TextButton = styled.Text`
    font-size: 25px;
    color: white;
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

export const MoreButton = styled.View`
    flex: 1;
    align-items: center;
`;

export const NewsletterButton = styled(RectButton)`
    background-color: ${({theme}) => theme.colors.buttonColor};
    height: 50px;
    width: 160px;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    padding: 0 15px;
`;

export const Separator = styled.View`
    border-bottom-width: 1px;
    width: 80%;
    border-color: ${({theme}) => theme.colors.gray};
`;