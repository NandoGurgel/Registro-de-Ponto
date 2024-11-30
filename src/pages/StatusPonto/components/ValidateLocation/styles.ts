import Styled from 'styled-components/native'

export const GreatCicle = Styled.View`
    display:flex
    justify-content: center;
    align-items: center;
    background-color: #FFE600;
    width: 216px;
    height: 216px;
    border-radius: 108px;
    z-index: 1;
`
export const LittleCicle = Styled.View`
    display:flex
    justify-content: center;
    align-items: center;
    background-color: #FFBD00;
    width: 144px;
    height: 144px;
    border-radius: 72px;
    z-index: 2;
`
export const ImgDigital = Styled.Image`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 137px;
    width: 137px;
`
export const AreaTextStatus = Styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 50px
`
export const ValidatingLocation = Styled.Text`
    font-size: 25px
    font-weight: 500;
    color: #060606;
`