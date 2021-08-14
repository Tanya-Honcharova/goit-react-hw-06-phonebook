// import types from './contacts-type';
import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

// export const addContact = ({ name, number }) => ({
//     type: types.ADD,
//     payload: {
//         id: shortid.generate(),
//         name,
//         number,
//     },
// });

// export const deleteContact = (contactId) => ({
//     type: types.DELETE,
//     payload: contactId,
// });

// export const changeFilter = (value) => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// });

// const deleteContact = createAction('contacts/delete');

// const changeFilter = createAction('contacts/changeFilter');

// const addContact = createAction('contacts/add', ({ name, number }) => {
//     return {
//         payload: {
//             id: shortid.generate(),
//             name,
//             number,
//         },
//     };
// });

// export default { addContact, deleteContact, changeFilter };

const addContact = createAction('contacts/add', ({ name, number }) => ({
    payload: {
        id: shortid.generate(),
        name,
        number,
    },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');


export default { addContact, deleteContact, changeFilter };