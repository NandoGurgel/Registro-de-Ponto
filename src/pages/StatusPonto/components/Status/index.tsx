import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { IGetponto } from '../../../../store/reducers/ponto.reducers'
import Digital from '../../../../assets/Digital.png'
import { GreatCicle, LittleCicle, ImgDigital, OkPonto, AreaTextOk } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
    ponto?: IGetponto | null
}

const Status = ({ ponto }:Props) => {

    const [text, setText] = useState('')
    
    useEffect(() => {
        if(!ponto) {
            setText('Ponto não registrado!')
        } else {
            setText('Ponto registrado com sucesso!') 
        }
    }, [])

    return(
        <>
            <View>
                <GreatCicle
                    background_color={ponto}
                >
                    <LittleCicle
                        background_color={ponto}
                    >
                        <ImgDigital source={Digital} />
                    </LittleCicle>
                </GreatCicle>
            </View>
            <AreaTextOk>
                {/* <View>
                    <Icon name="done-outline" size={26} color="#060606" />
                </View> */}
                <View>
                    <OkPonto>{text}</OkPonto>
                </View>
            </AreaTextOk>
        </>
    )
}

export default Status