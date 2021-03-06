import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk'

//import detail from './detail/detail'
//import user from './user/user'
//数据拆分

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler:autoMergeLevel2,
    whitelist: ['','']//白名单  持久化数据选择
}

const charReducer = combineReducers({
//    detail,
//    user
//拆分
})

const persistedReducer = persistReducer(persistConfig, charReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
//引入中间价
  // other store enhancers if any
);

const store = createStore(
    persistedReducer, enhancer
)

export const persist = persistStore(store)
export default store





//如果使用saga！
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
// import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'

import user from './user/user'
import homeData from './data/homeData'

const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler:autoMergeLevel2,
    whitelist: ['username','password']
}

const charReducer = combineReducers({
    homeData
})

const persistedReducer = persistReducer(persistConfig, charReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware, promise),
  // other store enhancers if any
);

const store = createStore(
    persistedReducer, enhancer
)
sagaMiddleware.run(todoSagas)

export const persist = persistStore(store)
export default store

