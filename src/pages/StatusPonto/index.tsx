import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Page, Hora} from './styles';
import Header from '../../components/Header';
import api from '../../services/api';
import ValidateLocation from './components/ValidateLocation';
import Status from './components/Status';
import {asyncInsertPonto} from '../../store/actions/ponto.actions';

//Imports external
import Local from '@react-native-community/geolocation';
import haversine from 'haversine-distance';
import {useDispatch, useSelector} from 'react-redux';
import {AplicationState} from '../../store/sagas';
import routesConstants from '../../utils/routesConstants';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getHora = async () => {
  const response = await api.get('/api/v1/registro/horas-exatas');

  return response.data;
};

const StatusPonto = () => {
  const LBStudioLocation = {
    latitude: -3.72471434827,
    longitude: -38.5287117994,
  };

  const [load, setLoad] = useState(true);

  const {ponto} = useSelector((state: AplicationState) => state.PontoReducer);

  // const navigate = useNavigation()

  const dispath = useDispatch();
  const navigate = useNavigation();

  const [data] = useState<Date>(new Date());
  const [time, setTime] = useState('');

  useEffect(() => {
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
        console.log(error);
      });
  }, []);

  console.log('Ponto: ', ponto);

  useEffect(() => {
    const BaterPonto = async () => {
      try {
        Local.getCurrentPosition(
          pos => {
            const calcDistance = Number(
              haversine(LBStudioLocation, {
                lat: pos.coords.latitude,
                lon: pos.coords.longitude,
              }).toFixed(2),
            );

            if (calcDistance <= 50) {
              dispath(
                asyncInsertPonto({
                  lat: pos.coords.latitude,
                  lon: pos.coords.longitude,
                  dist: calcDistance,
                  home_office: false,
                }),
              );
              setLoad(false);
            } else {
              return alert('perímetro do LBStudio excedido!');
            }
          },
          erro => {
            alert(`Erro: ${erro.message}`);
          },
          {enableHighAccuracy: false, timeout: 20000, maximumAge: 10000},
        );
      } catch (error) {
        console.log(error);
      }
    };
    BaterPonto();
  }, []);

  useEffect(() => {
    const historicPonto = () => {
      setTimeout(() => {
        navigate.navigate(routesConstants.HISTORY_PONTO);
      }, 2500);
    };
    historicPonto();
  }, []);

  return (
    <Page>
      <Header />
      <View>
        <Hora>{time}</Hora>
      </View>
      {load ? <ValidateLocation /> : <Status ponto={ponto} />}
    </Page>
  );
};

export default StatusPonto;

//<Status valid= {false} text = 'Ponto não registrado' />
