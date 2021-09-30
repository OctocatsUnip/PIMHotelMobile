import React from 'react';
import {TextInputProps} from 'react-native';
import { Controller, Control } from 'react-hook-form';

import {Container} from './styles';

import {Input} from '../Input';


interface InputFormProps extends TextInputProps {
    name: string;
    control: Control;
}

export function InputForm({ control, name, ...rest} : InputFormProps){
    return(
        <Container>
            <Controller
                control={control}
                render={({field: {onChange, value}}) => (
                    <Input
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
                name={name}
            />
        </Container>
    )
}