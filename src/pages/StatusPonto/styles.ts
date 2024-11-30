import Styled from 'styled-components/native'

export const Page = Styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    margin:0;
    padding:0;
`
export const Hora = Styled.Text`
    margin-top: 40px;
    margin-bottom: 50px;
    font-size: 30px
    font-weight: 900;
    color: #060606;
`
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
    margin-top: 50px
`
export const ValidatingLocation = Styled.Text`
    font-size: 20px
    font-weight: 500;
    color: #060606;
`