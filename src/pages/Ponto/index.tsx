import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import api from '../../services/api';

import {
  Container,
  ContainerBackground,
  ImgSmartPonto,
  CurrentTime,
  ButtonPonto,
  TextButtonPonto,
  ButtonHistoric,
  TextButtonHistoric,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import routesConstants from '../../utils/routesConstants';
import {useDispatch} from 'react-redux';
import {asyncInfoUser} from '../../store/actions/ponto.actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getHora = async () => {
  const token = await AsyncStorage.getItem('token');
  const response = await api.get('/api/v1/registro/horas-exatas', {
    headers: {Authorization: `Bearer ${token}`},
  });
  return response.data;
};

const Ponto = () => {
  const dispatch = useDispatch();

  const navigate = useNavigation();

  const [data] = useState<Date>(new Date());
  const [time, setTime] = useState('');

  useEffect(() => {
    dispatch(asyncInfoUser());

    getHora()
      .then(function (response) {
        // handle success
        setTime(response.hora);
        // console.log(response);
        const qualquerNome = response.hora.split(':');
        data.setHours(
          Number(qualquerNome[0]),
          Number(qualquerNome[1]),
          Number(qualquerNome[2]),
        );
      })
      .catch(function (error) {
        // handle error
        console.log('teste de hora: ', error);
      });
  }, []);

  useEffect(() => {
    const tempo = setTimeout(() => {
      const seconds = data.toString().split(' ')[4].split(':')[2];
      data.setSeconds(Number(seconds) + 1);

      setTime(data.toString().split(' ')[4]);
    }, 1000);

    return () => {
      clearTimeout(tempo);
    };
  }, [time]);

  const checkPoint = () => navigate.navigate(routesConstants.STATUS_PONTO);

  const historicPonto = () => navigate.navigate(routesConstants.HISTORY_PONTO);

  return (
    <Container>
      <Header />
      <ContainerBackground>
        <View>
          <>
            <CurrentTime>{time}</CurrentTime>
          </>
        </View>
        <View>
          <ButtonHistoric onPress={historicPonto}>
            <TextButtonHistoric>Histórico do dia</TextButtonHistoric>
          </ButtonHistoric>
          <ButtonPonto onPress={checkPoint}>
            <TextButtonPonto>Bater Ponto</TextButtonPonto>
          </ButtonPonto>
        </View>
      </ContainerBackground>
    </Container>
  );
};

export default Ponto;
