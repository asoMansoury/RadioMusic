import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/index';
import {createLogger} from 'redux-logger';


const persistConfig = {
    key:'root',
    storage,
    blacklist: ['vlaidationReducer']
}

const persistReducerConfig = persistReducer(persistConfig,rootReducer);
const middlware =[thunk];
// middlware.push(createLogger());
export const store = createStore(
    persistReducerConfig,
    undefined,
    compose(applyMiddleware(...middlware)
    )
);
export const persistor = persistStore(store);