import { put, call, takeEvery } from 'redux-saga/effects'
import { getHistoric, getPersonData, userLogin, userRegister } from '../../services/componentsApi'

import { registerPoint } from '../../services/componentsApi'
import pontoTypes, { changeHistoric, changeInfoUser, changeInsertPonto, changeLogin, changePonto, changeRegister, changeUserErrorValidate } from '../actions/ponto.actions'
import AsyncStorage from '@react-native-async-storage/async-storage'

type IUserPonto = {
    type: string
    payload: {
        lat: number,
        lon: number,
        dist: number,
        home_office: boolean
    }
}

interface IUserResponse {
    data: {
        lat: number,
        lon: number,
        dist: number,
        home_office: boolean
    }
}


type ILogin = {
    type: string
    payload: {
        nu_ponto: number,
        cel_id: string
    }
}

type ILogingResponse = {
    data:{
        access_token: string,
        token_type: string
    }
}

type ILogingResponseRegister = {
    data:{
        nu_ponto: number,
        isLogin?: boolean | null,
        cel_id?: string | null
    }
}

export type IInfoUserResponse = {
    data: {
        nu_ponto: number,
        template_digital: string,
        block: boolean,
        arquiva: boolean,
        home_office: boolean,
        grade: [
            {
            id_grade: number,
            in1: string,
            out1: string,
            in2: string,
            out2: string
            }
        ],
        pessoa: {
            id_pessoal: number,
            nm_nome: string
        }
    }
}
type IHistoric = {
    type: string
    payload: {
        id_grade: number | null,
    }
}
type IHistoricResponse = {
    data: {
        cd_num: number,
        dt_data: string,
        dt_hora: string,
        valid: boolean
    }
}

function* asyncInfoUser() {
    try {
        const { data }: IInfoUserResponse = yield call(
            getPersonData      
        )
        console.log('Retorno InfoUser(saga): ', data.grade[0].id_grade)
        console.log('Retorno do InfoUser', data)
        yield put(changeInfoUser(data))
        
    } catch ({response: error}) {
        console.log('Erro da InfoUser',error.data)
    }
}

function* asyncHistoric( {payload}: IHistoric ) {
    try {
        const { data }: IHistoricResponse = yield call (
            getHistoric,
            payload
            )
           // console.log('Resposta do histórico(saga): ', data)
        yield put(changeHistoric(data))
    } catch (  {response: error } ){
        console.log('Erro no histórico', error.data)
    }
}

function* asyncLogin ({ payload }: ILogin) {
    try {
        const { data }: ILogingResponse = yield call(
            userLogin,
            payload
        )
        yield put(changeLogin(data))
        AsyncStorage.setItem('token', data.access_token)
        console.log('Token no saga: ', data)
    } catch ({ response: error }){
        if (error.status === 401) {
        yield put(changeUserErrorValidate( error.data.detail ))
            console.log('Erro Login: ', error.data)
        }
    }
}

function* asyncRegister ({ payload }: ILogin) {
    try {
        yield put(changeRegister({ nu_ponto: payload.nu_ponto, isLogin: false, cel_id: payload.cel_id }))

        const { data }: ILogingResponseRegister = yield call(
            userRegister,
            payload
        )
        console.log('Resposta do cadastro do usuário: ', data)
        yield put(changeRegister(data))
        yield put(changeRegister({ nu_ponto: payload.nu_ponto, isLogin: true, cel_id: payload.cel_id }))

    } catch ({ response: error }){
        if (error.status == 406) {
            // const { data }: ILogingResponse = yield call(
            //     securityLogin,
            //     payload
            // )
            yield put(changeRegister({ nu_ponto: payload.nu_ponto, isLogin: true, cel_id: payload.cel_id }))
            // localStorage.setItem('Token', data.access_token)
        }
        yield put(changeUserErrorValidate( error.data.detail ))
        console.log('Erro registro de celular: ', error.data)
    }
}

function* asyncInsertPonto({ payload }: IUserPonto) {
    try {
        const { data }: IUserResponse = yield call(
            registerPoint,
            payload
        )
        yield put(changePonto(data))
    } catch ({ response: error }) {
        if (error.status === 401) {
            changePonto(error)
        }
        console.log('Erro inserção de ponto: ', error.data)

    }
}

function* pontoSaga() {

    yield takeEvery(
        pontoTypes.ASYNC_INSERT,
        asyncInsertPonto
    )
    yield takeEvery(
        pontoTypes.ASYNC_HISTORIC,
        asyncHistoric
    )
    yield takeEvery(
        pontoTypes.ASYNC_LOGIN,
        asyncLogin
    )
    yield takeEvery(
        pontoTypes.ASYNC_REGISTER,
        asyncRegister
    )
    yield takeEvery(
        pontoTypes.ASYNC_INFO_USER,
        asyncInfoUser
    )
}

export default pontoSaga