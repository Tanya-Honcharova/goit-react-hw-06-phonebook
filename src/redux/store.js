
import contactsReducer from './contacts/contacts-reducer';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import logger from 'redux-logger';


const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
}

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    logger,
];

const rootReducer = combineReducers({
    contacts: contactsReducer,
});

const persistedReducer = persistReducer(contactsPersistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);


export default { store, persistor };
