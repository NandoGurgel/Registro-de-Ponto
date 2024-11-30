import React from 'react'
import { View } from 'react-native'

import Digital from '../../../../assets/Digital.png'
import Icon from 'react-native-vector-icons/MaterialIcons';

import { GreatCicle, LittleCicle, ImgDigital, AreaTextStatus, ValidatingLocation } from './styles'


const ValidateLocation = () => {
    return(
        <>
            <View>
                <GreatCicle>
                    <LittleCicle>
                        <ImgDigital source={Digital} />
                    </LittleCicle>
                </GreatCicle>
            </View>
            <AreaTextStatus>
                <View>
                    <Icon name="pin-drop" size={26} color="#060606" />
                </View>
                <View>
                    <ValidatingLocation>Validando localização...</ValidatingLocation>
                </View>
            </AreaTextStatus>
        </>
    )
}

export default ValidateLocation