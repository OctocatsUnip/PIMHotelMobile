import styled from 'styled-components/native';
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
})`
    margin-top: -20px;
    background-color: white;
    border-radius: 20px;
`;

export const RowContainer = styled.View`

    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Separator = styled.View`
    border-bottom-width: 2px;
    width: 50%;
    border-color: #000;
    margin-bottom: 30px;
`;

export const BedroomArea = styled.View`
    width: 100%;
`;

export const BedroomTitle = styled.Text`
    font-size: 18px;
    margin-top: 10px;
    align-items: flex-start;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const BedroomInformation = styled.Text`
    padding: 1px 10px;
    text-align: justify;  
`;

export const Package = styled.View`
    width: 100%;
    flexDirection: row;
`;

export const Itens = styled.View`
    margin-top: 30px;
    
`;

export const ItensInformation = styled.Text`
    font-size: 20px;
    margin: 5px;

`;

export const ItensValue = styled.View`
    margin-top: 30px;
    margin-left: 70px;
`;

export const ItensValueDescription = styled.Text`
    font-size: 20px;
    margin: 5px;

`;

export const Tag = styled.View`
    width: 100%;
`;

export const TagInformation = styled.Text`
    font-weight: bold;
`;

export const ButtonContainer = styled.View`
    width: 100%;
    padding: 10px 30px;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

export const Background = styled.ImageBackground`
    width: 100%;
    height: 300px;
`;