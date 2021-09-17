import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    border-top-width: 15px;
    border-color:  ${({ theme }) => theme.colors.buttonColor};
    width: 80%;
    margin: 10px 0;
`;

export const OptionsContent = styled.View`
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 10px 20px;
    justify-content: space-around;
    border-width: 1px;
`;

export const Content = styled(RectButton)`
    padding: 0 10px;
`;

export const OptionArea = styled.View``;

export const OptionHeaderCompressed = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 38px;
    text-align: center;
`;

export const OptionHeader = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 22px;
    text-align: left;
`;

export const DescriptionCompressed = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
    text-align: left;
    margin: 10px 0;
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
    text-align: left;
    margin: 10px 0;
`;

export const ButtonContent = styled.View`
    align-items: center;
`;

export const PriceContent = styled.View`
    align-items: flex-end;
    margin: 10px 0;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.gray};
    font-size: 32px;
    text-align: right;
    height: 40px;
`;

export const PriceDetails = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.gray};
    font-size: 14px;
    text-align: right;
    height: 20px;
`;

export const ButtonServices = styled(RectButton)`
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.buttonColor};
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
`;

export const SeparatorCompressed = styled.View`
    border-bottom-width: 1px;
    width: 100%;
    border-color: #000;
`;

export const Separator = styled.View`
    border-bottom-width: 1px;
    width: 100%;
    border-color: #000;
`;
