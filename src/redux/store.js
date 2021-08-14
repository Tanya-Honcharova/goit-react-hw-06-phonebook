import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import contactsReducer from './contacts/contacts-reducer';

const rootReducer = combineReducers({
    contacts: contactsReducer,
});

// const contactsReducer = combineReducers({
//     items: itemsReducer,
//     filter: filterReducer,
// });




const store = createStore(rootReducer, composeWithDevTools([]));

export default store;
