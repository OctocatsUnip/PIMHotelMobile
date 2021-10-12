import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    background-color: ${({theme}) => theme.colors.white};
    margin-bottom: 20px;
`;

export const NewsletterImage = styled.Image`
    height: 150px;
    width: 150px;
`;

export const Content = styled.View`
    margin-top: 10px;
    flex-direction: column;
    padding: 0 10px;
    flex-shrink: 1;
`;

export const NewsletterTitle = styled.Text `
    font-size: 25px;
    font-Weight: bold;
    margin-bottom: 10px;
`;

export const NewsletterDescription = styled.Text.attrs({
    numberOfLines: 2
})`
    font-size: 20px;
    text-align: left;
    flex-grow: 1;
    flex: 1;
`;
