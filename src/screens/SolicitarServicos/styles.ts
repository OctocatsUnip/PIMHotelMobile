import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.ScrollView`
    flex: 1;
    margin-top: ${getStatusBarHeight() + 10}px;
`;

export const InputName = styled.Text``;

export const UserName = styled.Text`
    color: ${({theme}) => theme.colors.white}
`;

export const UserContent = styled.View`
    position: absolute;
    bottom: 10px;
    left: 40px;
    background-color: ${({theme}) => theme.colors.buttonColor};
    padding: 15px;
`;

export const UserImage = styled.Image`
    height: 180px;
    width: 180px;
`;

export const ImageView = styled.View`
    width: 100%;
    align-items: center
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

export const SectionContainer = styled.View`
    border-bottom-width: 1px;
    padding-bottom: 20px;
    border-color: ${({theme}) => theme.colors.gray};
    margin-bottom: 10px;
`;

export const TitleFirst = styled.Text`
    text-align: center;  
    font-size:28px;
    font-weight: bold;
    margin-bottom:10px;
    margin-top:30px;    
    
`;

export const Separator = styled.View`
    border-bottom-width: 2px;
    width: 70%;
    border-color: #000;
    margin-bottom: 20px;
     margin-left:50px;
     margin-right:5px; 
  
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


export const Text = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 17px;
    flex-shrink: 1;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-weight: bold;
    font-size: 20px;
`;

export const ServicesContainer = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 30px;
    margin-top: 20px;
`;
