import Styled from 'styled-components/native'

interface IContentProps {
    background_color?: boolean;
}

export const GreatCicle = Styled.View<IContentProps>`
    display:flex
    justify-content: center;
    align-items: center;
    background-color: ${(props) => !props.background_color? '#FF0000' :'#B9F589'};
    width: 216px;
    height: 216px;
    border-radius: 108px;
    z-index: 1;
`
export const LittleCicle = Styled.View<IContentProps>`
    display:flex
    justify-content: center;
    align-items: center;
    background-color: ${(props) => !props.background_color?  '#A00909' :'#00853B'};
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
export const AreaTextOk = Styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 50px;
`
export const OkPonto = Styled.Text`
    font-size: 25px
    font-weight: 500;
    color: #060606;
`