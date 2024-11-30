import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { HistoricPage, NameUser, CurrentDate, AreaDate } from './styles'
import OkPoint from './components/StatusHistoryPoint'
import { getHistoric, getPersonData } from '../../services/componentsApi'
import AsyncStorage from '@react-native-async-storage/async-storage'
import HeaderWithBackButton from '../../components/HeaderWithBackButton'
import { useDispatch, useSelector } from 'react-redux'
import { asyncHistoric, asyncInfoUser } from '../../store/actions/ponto.actions'
import { AplicationState } from '../../store/sagas'

const PointHistory = () => {

    const { infoUser, historic } = useSelector((state: AplicationState) => state.PontoReducer)

    const dispatch = useDispatch()

    const [data, setData] = useState('')
    const [name, setName] = useState('')


    useEffect(() => {
        const current = new Date()
        const dia = `${current.getDate()}`
        const mes = `${current.getMonth() + 1}`
        const date = `${dia.length > 1 ? dia : `0${dia}`}/${mes.length > 1 ? mes : `0${mes}`}/${current.getFullYear()}`

        setData(date)

    }, [])
    //console.log('InfoUser Historic: ', historic)
    
    useEffect(() => {
        dispatch(
            asyncHistoric({ id_grade: Number(infoUser?.grade[0].id_grade) })
            )
            //console.log('InfoUser Teste: ', infoUser)
            
            setName( infoUser?.pessoa.nm_nome )
        }, [])

    return (
        <HistoricPage>
            <HeaderWithBackButton />
            <View>
                <NameUser>{name}</NameUser>
            </View>
            <FlatList
                data={historic}
                renderItem={({ item }) => <OkPoint data={item} />}
                keyExtractor={item => item.dt_hora}
            />
            <AreaDate>
                <CurrentDate>Dia: {data}</CurrentDate>
            </AreaDate>
        </HistoricPage>
    )
}

export default PointHistory