import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
   flex: 1;
   justify-content: center;
   padding-top: ${getStatusBarHeight()}px;
`;

export const Text = styled.Text``;

export const BedroomTypeArea = styled.View`
   align-items: center;
`;

export const BedroomTypeHeader = styled.Text`
   font-size: 28px;
   font-weight: bold;
   margin: 10px 0;
`;

export const Separator = styled.View`
    border-bottom-width: 2px;
    width: 50%;
    border-color: #000;
`;

export const OptionsHeader = styled.Text`
   font-size: 30px;
   align-items: flex-start;
   margin: 25px;
`;

export const OptionsArea = styled.View`
   align-items: center;
`;

export const OptionsCard = styled.View`
   border-top-width: 5px;
   width: 80%;
`;