import Styled from 'styled-components/native'

interface IContentProps {
    border?: string;
  }

export const RegisteredPoint = Styled.View<IContentProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 50px;
    border: 2px solid ${(props) => props.border? '#00853B' : '#A00909'};
    border-radius: 7px;
    margin: 5px;
`
export const HourPoint = Styled.Text`
    font-size: 18px;
    color: #060606;
    font-weight: 600;

`