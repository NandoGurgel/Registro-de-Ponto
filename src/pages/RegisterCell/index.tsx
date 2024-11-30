import React, {useState} from 'react';
import {Alert, Platform, View} from 'react-native';
//Imports external
import {useDispatch, useSelector} from 'react-redux';

// Imports local project
import Digital from '../../../src/assets/Digital.png';
import Header from '../../components/Header';
import InputCodUser from './components/inputCodUser';
import DeviceInfo from 'react-native-device-info';

// import { ButtonPonto } from './components/buttonPonto/styles';
import {AplicationState} from '../../store/sagas';
import {
  ButtonRegisterCell,
  Container,
  ContainerBackground,
  ImgSmartPonto,
  KeyboardArea,
  Scrow,
  TextButton,
  Texto,
} from './styles';

const RegisterCell = () => {
  const {userError} = useSelector(
    (state: AplicationState) => state.PontoReducer,
  );

  const dispatch = useDispatch();

  const [cod, setCod] = useState('');
  const [codConfirm, setCodConfirm] = useState('');
  const handleSubmit = () => {
    if (cod == codConfirm && cod != '') {
      Alert.alert('Código do ponto', 'Celular cadastrado com sucesso.');
      DeviceInfo.getUniqueId().then(uniqueId => {
        dispatch(asyncRegister({nu_ponto: parseInt(cod), cel_id: uniqueId}));
        dispatch(asyncLogin({nu_ponto: parseInt(cod), cel_id: uniqueId}));
      });
    } else {
      Alert.alert(
        'Código do ponto',
        'Os códigos devem ser informados e devem ser iguais.',
      );
    }
  };

  return (
    <Container>
      <KeyboardArea behavior={Platform.OS == 'ios' && 'padding'}>
        <Header />
        <ContainerBackground>
          <Scrow>
            <ImgSmartPonto source={Digital} />
          </Scrow>
          <View>
            <InputCodUser
              keyboardType="numeric"
              placeholder="Código do ponto"
              icon="perm-identity"
              value={cod}
              onChangeText={e => setCod(e)}
            />
            <InputCodUser
              keyboardType="numeric"
              placeholder="Confirme o código"
              icon="perm-identity"
              value={codConfirm}
              onChangeText={e => setCodConfirm(e)}
              stringError={userError}
              // onSubmitEditing={handleSubmit}
            />
          </View>
          <View>
            <ButtonRegisterCell onPress={handleSubmit}>
              <TextButton>Cadastrar celular</TextButton>
            </ButtonRegisterCell>
          </View>
          <View>
            <Texto />
          </View>
        </ContainerBackground>
      </KeyboardArea>
    </Container>
  );
};

export default RegisterCell;
