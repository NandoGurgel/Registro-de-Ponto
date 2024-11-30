import pontoActions from '../actions/ponto.actions'
import { IInfoUserResponse } from '../actions/ponto.actions'

export type IGetponto = {
    id: number,
    nu_ponto: number,
    lat: number,
    lon: number,
    dist: number,
    validade: number,
    datetime: string,
    id_cel: string,
}
type IHistoricResponse = {
    nu_ponto: number,
    dt_data: string,
    dt_hora: string,
    valid: boolean
}

export interface IPontoState {
    message: string | null,
    loading: boolean,
    ponto: IGetponto | null
    nu_ponto: number | null,
    cel_id: string | null,
    access_token: string | null,
    isLogin?: boolean | null,
    userError: string | null,
    infoUser: IInfoUserResponse | null,
    historic: IHistoricResponse | null
}

const initState: IPontoState = {
    message: null,
    loading: false,
    ponto: null,
    nu_ponto: 0,
    cel_id: null,
    access_token: null,
    isLogin: false,
    userError: null,
    infoUser: null,
    historic: null
}

interface IActionDTO {
    type:string
    payload: any
}

const pontoReducer = (
    state = initState,
    { type, payload }: IActionDTO,
): IPontoState => {
    switch(type) {
        case pontoActions.CHANGE_INSERT:
            return {
                ...state,
                message: payload
            }
        case pontoActions.CHANGE_PONTO:
            return {
                ...state,
                ponto: payload
            }
        case pontoActions.CHANGE_LOGIN:
            return {
                ...state,
                access_token: payload
            }
        case pontoActions.CHANGE_REGISTER:
            return {
                ...state,
                nu_ponto: payload,
                isLogin: payload,
                cel_id: payload
            }
        case pontoActions.CHANGE_USER_ERROR_VALIDATE:
            return {
                ...state,
                userError: payload
            }
        case pontoActions.CHANGE_INFO_USER:
            return {
                ...state,
                infoUser: payload
            }
        case pontoActions.CHANGE_HISTORIC:
            return {
                ...state,
                historic: payload
            }
        default:
            return state
    }
}

export default pontoReducer