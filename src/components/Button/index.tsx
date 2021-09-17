import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
   Container,
   ButtonText,
} from './styles';

interface ButtonProps extends RectButtonProps {
    width?: string;
    text: string;
    onPress?: () => void;
}

export function Button({width, text, onPress}:ButtonProps) {
   return (
        <Container
            width={width ? width : "100%"}
            onPress={onPress}
        >
            <ButtonText>{text}</ButtonText>
        </Container>
   );
}