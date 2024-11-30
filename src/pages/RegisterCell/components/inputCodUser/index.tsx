import React, {useCallback, useState} from 'react';
import {TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Content, Input, TextError} from './styles';

interface IInputCodUserProps extends TextInputProps {
  icon: string;
  stringError?: string | null
  callOnBlur?: Function
}

const InputCodUser: React.FC<IInputCodUserProps> = ({
  icon,
  stringError,
  callOnBlur,
  value,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!value);

    if (callOnBlur) {
      callOnBlur();
    }
  }, [value, callOnBlur]);

  return (
    <Container>
      <Content isFocused={isFocused} isError={!!stringError}>
        <Icon
          name={icon}
          size={24}
          color={isFocused || isFilled ? '#FFF' : '#DEDEDE'}
        />
        <Input
          value={value}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          placeholderTextColor="#DEDEDE"
          {...props}
        />
      </Content>
      {!!stringError && <TextError>{stringError}</TextError>}
    </Container>
  );
};

export default InputCodUser;