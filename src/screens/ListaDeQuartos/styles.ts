import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.ScrollView`
    flex: 1;
    margin-top: ${getStatusBarHeight()}px;
`;

export const Content = styled.View`
    align-items: center;
    padding: 0 35px;
`;

export const ButtonContainer = styled.View`
    margin: 20px 0;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
`;