import { combineReducers } from 'redux';
import types from './contacts-type';

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }
const initialState = JSON.parse(window.localStorage.getItem('contacts')) ?? []

const itemsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.ADD:
            return [...state, payload];
        case types.DELETE:
            return [...state.filter(({ id }) => id !== payload)];
        default:
            return state;
    };
};

const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case types.CHANGE_FILTER:
            return payload;
        default:
            return state;
    };
};

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});

export default contactsReducer;