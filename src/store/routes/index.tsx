import React, { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import RegisterCell from "../../pages/RegisterCell"
import { AplicationState } from '../sagas/index'
import AppRoutes from "./app.routes"
import { asyncLogin } from "../actions/ponto.actions"
import AsyncStorage from '@react-native-async-storage/async-storage'

const ValueItem = async () => {
    const tokenValid = await AsyncStorage.getItem('token')

    return tokenValid
}

const Routes: React.FC = () => {

    const [token, setToken] = useState('')

    const { access_token, isLogin, nu_ponto, cel_id } = useSelector((state: AplicationState) => state.PontoReducer)
    const dispatchLogin = useDispatch()

    ValueItem().then((value) => {
        setToken(value? value: '')
        return value
    })
    console.log('Token: ', token)
    
    useEffect(() => {
        
        dispatchLogin(asyncLogin({ nu_ponto, cel_id }))
        console.log('isLoginChegando: ', isLogin)
        
    }, [isLogin])
    
    const getRoutes = useCallback(() => {
        if(access_token || token) {
            return <AppRoutes />
        } return <RegisterCell/>
        
    }, [access_token, token])
    
    return getRoutes()
}

export default Routes