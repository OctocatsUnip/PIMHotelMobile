import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
   flex: 1;
   margin-top: ${getStatusBarHeight()}px;
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingHorizontal: 20
    }
})``;

export const RowContainer = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
`;

export const WatchIcon = styled(MaterialIcons)`

`;

export const CheckContent = styled.View`
    border-right-width: 1px;
    padding: 10px;
    border-color: ${({theme}) => theme.colors.gray};
    margin: 30px 0;
`;

export const CheckTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const CheckText = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const Text = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 17px;
    flex-shrink: 1;
`;

export const SectionContainer = styled.View`
    border-bottom-width: 1px;
    padding-bottom: 20px;
    border-color: ${({theme}) => theme.colors.gray};
    margin-bottom: 10px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-weight: bold;
    font-size: 20px;
`;

export const CheckBoxContainer = styled.View`
    height: 25px;
    width: 25px;
    border-width: 1px;
    margin: 15px;
`;

export const CheckBox = styled(RectButton)`
    height: 25px;
    width: 25px;
    border-width: 1px;
`;
