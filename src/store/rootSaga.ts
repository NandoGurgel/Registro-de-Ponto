import { all } from 'redux-saga/effects'

import pontoSaga from '../../src/store/sagas/ponto.saga'

export default function* rootSaga() {
    return yield all([
        pontoSaga()
    ])
}
