import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }
// const initialState = JSON.parse(window.localStorage.getItem('contacts')) ?? []

const initialContacts = [
    {
        id: "id-1",
        name: "Rosie Simpson",
        number: "459-12-56",

    },
    {
        id: "id-2",
        name: "Hermione Kline",
        number: "443-89-12",

    },
    {
        id: "id-3",
        name: "Eden Clements",
        number: "645-17-79",

    },
    {
        id: "id-4",
        name: "Annie Copeland",
        number: "227-91-26",

    },
];

const itemsReducer = createReducer(initialContacts, {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
})



const filterReducer = createReducer('', {
    [actions.changeFilter]: (_, { payloat }) => payloat,
});


export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});