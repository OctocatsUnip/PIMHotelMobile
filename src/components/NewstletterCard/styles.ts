import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    background-color: ${({theme}) => theme.colors.white};
`;

export const NewsletterImage = styled.Image`
    height: 150px;
    width: 150px;
`;

export const Content = styled.View`
    margin-top: 10px;
    flex-direction: column;
    paddingHorizontal: 10px;
    flex-shrink: 1;
`;

export const NewsletterTitle = styled.Text `
    fontSize: 25px;
    font-Weight: bold;
    marginBottom: 10px;
`;

export const NewsletterDescription = styled.Text `
    font-size: 20px;
    text-align: left;
    flexGrow: 1;
    flex: 1;
`;
