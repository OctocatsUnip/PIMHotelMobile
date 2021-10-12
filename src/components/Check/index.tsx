import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

import {Container, Name} from './styles';

interface Props {
    name: string;
}

export function Check({name}:Props){

    const [value, setValue] = useState(false)

    return(
        <Container>
            <CheckBox
                disabled={false}
                value={value}
                onValueChange={setValue}
            />
            <Name>{name}</Name>
        </Container>
    )
}