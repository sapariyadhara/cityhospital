import { applyMiddleware, createStore } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga'


import { rootReducer } from "./reducer"
import thunk from "redux-thunk"
import { rootSaga } from "./saga/rootSaga"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['Medicine', 'cart' , 'myfav']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()

const allMeddleware = [sagaMiddleware , thunk]


export const configureStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(...allMeddleware))
    sagaMiddleware.run(rootSaga)
    
    return store
}

export let store = configureStore()
export let persistor = persistStore(store);

