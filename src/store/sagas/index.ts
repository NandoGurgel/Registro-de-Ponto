import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../rootReducer'
import rootSaga from '../rootSaga'

import { IPontoState } from '../reducers/ponto.reducers'

export interface AplicationState {
    PontoReducer: IPontoState
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;