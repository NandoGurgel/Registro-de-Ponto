interface IPontoTypes {
    ASYNC_PONTO: string
    CHANGE_PONTO: string
    ASYNC_INSERT: string
    CHANGE_INSERT: string
    ASYNC_LOGIN: string
    CHANGE_LOGIN: string
    ASYNC_REGISTER: string
    CHANGE_REGISTER: string
    CHANGE_USER_ERROR_VALIDATE: string
    ASYNC_INFO_USER: string
    CHANGE_INFO_USER: string
    ASYNC_HISTORIC: string
    CHANGE_HISTORIC: string

}

const pontoTypes: IPontoTypes = {
    ASYNC_PONTO: '@ponto/ASYNC_PONTO',
    CHANGE_PONTO: '@ponto/CHANGE_PONTO',
    ASYNC_INSERT: '@ponto/ASYNC_INSERT',
    CHANGE_INSERT: '@ponto/CHANGE_INSERT',
    ASYNC_LOGIN: '@ponto/ASYNC_LOGIN',
    CHANGE_LOGIN: '@ponto/CHANGE_LOGIN',
    ASYNC_REGISTER: '@ponto/ASYNC_REGISTER',
    CHANGE_REGISTER: '@ponto/CHANGE_REGISTER',
    CHANGE_USER_ERROR_VALIDATE: '@ponto/CHANGE_USER_ERROR_VALIDATE',
    ASYNC_INFO_USER: '@ponto/ASYNC_INFO_USER',
    CHANGE_INFO_USER: '@ponto/CHANGE_INFO_USER',
    ASYNC_HISTORIC: '@ponto/ASYNC_HISTORIC',
    CHANGE_HISTORIC:'@ponto/CHANGE_HISTORIC'
}

type IPontoType = {
    lat: number,
    lon: number,
    dist: number,
    home_office: boolean
}
interface IAsyncPonto {
    type: string
}
interface IAsyncPontoInsert {
    type: string
    payload: IPontoType
}

interface IAsyncLogin {
    type: string
    payload: {
        nu_ponto: number | null,
        cel_id: string | null
    }
}
interface IChangeLogin {
    type: string
    payload: {
        access_token: string,
        token_type: string
    }
}
interface IChangeRegister {
    type: string
    payload: {
        nu_ponto: number,
        isLogin?: boolean | null,
        cel_id?: string | null
    }
}
interface IChangeUserErrorValidate {
    type: string
    payload: {
        errorUser: string | null
    }
}
export type IInfoUserResponse = {
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
interface IChangeInfoUser {
    type: string
    payload: IInfoUserResponse
}
interface IInfoUser {
    type: string
}
interface IChangePonto {
    type: string
    payload: IPontoMessage
}
type IChangeGetPonto = {
        lat: number,
        lon: number,
        dist: number,
        home_office: boolean,
}

interface IChangeGetPontoResponse {
    type: string
    payload: IChangeGetPonto
}
type IHistoricResponse = {
    cd_num: number,
    dt_data: string,
    dt_hora: string,
    valid: boolean
}
interface IChangeHistoric {
    type: string,
    payload: IHistoricResponse
}
interface IHistoric {
    type: string,
    payload: { id_grade: number | null }
}
export const asyncPonto = (): IAsyncPonto => ({
    type: pontoTypes.ASYNC_PONTO
})
export const changePonto = (
    params: IChangeGetPonto
): IChangeGetPontoResponse => ({
    type: pontoTypes.CHANGE_PONTO,
    payload: params
})
export const asyncInfoUser = (): IInfoUser => ({
    type: pontoTypes.ASYNC_INFO_USER
})
export const changeInfoUser = (
    params: IInfoUserResponse,
): IChangeInfoUser => ({
        type: pontoTypes.CHANGE_INFO_USER,
        payload: params
})
export const asyncHistoric = (
    params: { id_grade: number | null },
): IHistoric => ({
    type: pontoTypes.ASYNC_HISTORIC,
    payload: params
})
export const changeHistoric = (
    params: IHistoricResponse,
): IChangeHistoric => ({
    type: pontoTypes.CHANGE_HISTORIC,
    payload: params
})
export const asyncInsertPonto = (
    params: IPontoType,
): IAsyncPontoInsert => ({
    type: pontoTypes.ASYNC_INSERT,
    payload: params
})
export const changeInsertPonto = (
    params: IPontoMessage,
): IChangePonto => ({
    type: pontoTypes.CHANGE_INSERT,
    payload: params
})
export const asyncLogin = (
    params: { nu_ponto: number | null, cel_id: string | null},
): IAsyncLogin => ({
    type: pontoTypes.ASYNC_LOGIN,
    payload: params
})
export const changeLogin = (
    params: { access_token: string, token_type: string },
): IChangeLogin => ({
    type: pontoTypes.CHANGE_LOGIN,
    payload: params
})
export const asyncRegister = (
    params: { nu_ponto: number, cel_id: string },
): IAsyncLogin => ({
    type: pontoTypes.ASYNC_REGISTER,
    payload: params
})

export const changeRegister = (
    params: { nu_ponto: number, isLogin?: boolean | null, cel_id?: string | null },
): IChangeRegister => ({
    type: pontoTypes.CHANGE_REGISTER,
    payload: params
})

export const changeUserErrorValidate = (
    params: { errorUser: string | null }
): IChangeUserErrorValidate => ({
    type: pontoTypes.CHANGE_USER_ERROR_VALIDATE,
    payload: params
});

type IPontoMessage = {
    message: string
}




export default pontoTypes