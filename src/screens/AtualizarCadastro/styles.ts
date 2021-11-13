import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.ScrollView`
   flex: 1;
   margin-top: ${getStatusBarHeight()}px;
   padding: 20px;
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

export const QuartoContent = styled.View`	
    position: absolute;
    bottom: 6px;
    left: 35px;
    background-color: #94A098;
`;

export const UserImage = styled.Image`
    height: 180px;
    width: 180px;
`;

export const ImageView = styled.View`
    width: 100%;
    align-items: center
`;

export const ButtonContent = styled.View`
  marginBottom:20px;
`;

export const MailIcon = styled(AntDesign)``;
export const PhoneIcon = styled(AntDesign)``;

export const Text = styled.Text`
    padding-left: 10px;
`;

export const LinhaArea = styled.View`
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 25px;
    width: 250px;
    height: 50px;
    padding: 10px 10px;
`;