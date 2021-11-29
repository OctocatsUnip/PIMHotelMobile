import React from 'react';
import {Animated, Dimensions} from 'react-native'
import theme from '../../../global/theme'

import { 
    Container,
    Content,
} from './styles'

interface DataProps {
    id: number;
    img_quarto: number
}

interface IndicatorProps {
    data: DataProps[];
    scrollX: Animated.Value;
    color: string
}

export const Indicator = ({data, scrollX, color}:IndicatorProps) => {

    const dataInd = data

    const widthInput = Dimensions.get('window').width

    return(
        <Container>
            {
                dataInd.map((_, i) => {
                    const inputRange = [(i-1) * widthInput, i * widthInput, (i + 1) * widthInput]
                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.8, 1.4, 0.8],
                        extrapolate: 'clamp'
                    })
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.6, 0.8, 0.6]
                    })
                    return(
                        <Animated.View
                            key={`indicator-${i}`}
                            style={{
                                height: 10,
                                width: 10,
                                marginRight: 8,
                                borderRadius: 5,
                                backgroundColor: color,
                                opacity,
                                transform: [
                                    {
                                        scale
                                    }
                                ]
                            }}
                        />
                    )
                })
            }
        </Container>
    )
}