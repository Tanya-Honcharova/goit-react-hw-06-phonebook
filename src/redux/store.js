
import contactsReducer from './contacts/contacts-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';



const middeleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
    middeleware,
    devTools: process.env.NODE_ENV === 'development',
});


export default store;
