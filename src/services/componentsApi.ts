import {AxiosResponse} from 'axios';
import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Dados pessoais: código do ponto, grade de horário, nome, status do usuário, se está de home office ou não, etc.
export const getPersonData = async () => {
  const token = await AsyncStorage.getItem('token');
  //console.log('Token: ', token)
  const response = await api.get('/api/v1/ponto/', {
    headers: {Authorization: `Bearer ${token}`},
  });

  return response;
};

// código do ponto / data e hora do registro / ponto válido ou não(dentro ou fora do horário)
export const getHistoric = async ({id_grade}) => {
  console.log('Resposta da grade: ', id_grade);
  const token = await AsyncStorage.getItem('token');

  const response = await api.get(`/api/v1/registro/registros-dia/${id_grade}`, {
    headers: {Authorization: `Bearer ${token}`},
  });

  //console.log('Resposta GetHistoric', response.data)
  return response;
};

// Trás a informação exatada de data e hora atual.
export const currentTimeApi = async () => {
  const response = await api.get('/api/v1/registro/horas-exatas');
  console.log('Hora exata: ', response.data);
  return response.data;
};

// Capturando localização, distância para o ponto central do Ponto,
// validando home-office e registrando o ponto.
export const registerPoint = async ({lat, lon, dist, home_office}) => {
  const token = await AsyncStorage.getItem('token');

  const response = await api.post(
    '/api/v1/ponto/set-ponto',
    {
      lat,
      lon,
      dist,
      home_office,
    },
    {headers: {Authorization: `Bearer ${token}`}},
  );

  console.log('Registro de ponto', response.data);
  return response;
};

//cadastro de usuario - Associa o usuário que está na base ao seu smartphone, podendo assim, usar o app somente no seu aparelho.
export const userRegister = async ({nu_ponto, cel_id}) => {
  const response = await api.post(
    '/api/v1/seguranca/cadastrar-usuario',
    {
      nu_ponto,
      cel_id,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  console.log('Cadastrar usuário: ', {nu_ponto, cel_id});

  return response.data;
};

//Login - Responsável pelo login do usuário e por coletar as informações pela token.
export const userLogin = async ({nu_ponto, cel_id}) => {
  const response = await api.post(
    '/api/v1/seguranca/login',
    {
      nu_ponto,
      cel_id,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  console.log('Dados do login: ', {nu_ponto, cel_id});

  return response;
};
