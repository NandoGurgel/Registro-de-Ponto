import styled, {css} from 'styled-components/native';

interface IContainerProps {
  isFocused: boolean;
  isError: boolean;
}

export const Container = styled.View`
  margin-bottom: 10px;
`;

export const Content = styled.View<IContainerProps>`
  width: 250px;
  height: 50px;

  flex-direction: row;
  align-items: center;

  padding-left: 10px;

  border-radius: 10px;
  border-width: 1px;
  border-color: #FFF;
  margin-bottom: 15px;

  ${(props) =>
    props.isError &&
    css`
      border-color: #b03030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #FFF;
      placeholder: #FFF;
    `}
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  width: 200px;
  color: #FFF;

  font-size: 20px;

  padding-left: 10px;
  padding-right: 10px;

  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

export const TextError = styled.Text`
  font-size: 14px;
  color: #b03030;

  margin: 5px;
`;