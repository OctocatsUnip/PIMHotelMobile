import React from 'react';
import {TextInputProps} from 'react-native';
import { Control, Controller } from 'react-hook-form';

import {Container} from './styles';

import {Input} from '../Input';


interface InputFormProps extends TextInputProps {
    name: string;
    control: Control;
    error?: string;
}

export function InputForm({ control, name, error, ...rest} : InputFormProps){
    return(
        <Container>
            <Controller
                name={name}
                control={control}
                render={({field: {onChange, value}}) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
            />
        </Container>
    )
}