import React from 'react'
import { View } from 'react-native'

import { HourPoint, RegisteredPoint } from './styles'

const OkPoint = (props) => {
    console.log(` Response Props: `, props)
    return (
        <>
            <RegisteredPoint
                border={props.data.valid}
            >
                <HourPoint>Ponto registrado às {props.data.dt_hora}</HourPoint>
            </RegisteredPoint>
        </>
    )
}

export default OkPoint