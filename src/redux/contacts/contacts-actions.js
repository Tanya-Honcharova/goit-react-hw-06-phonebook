import types from './contacts-type';
import shortid from 'shortid';

const addContact = ({ name, number }) => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name,
        number,
    },
});

const deleteContact = (contactId) => ({
    type: types.DELETE,
    payload: contactId,
});

const changeFilter = (value) => ({
    type: types.CHANGE_FILTER,
    payload: value,
});

const actions = {
    addContact,
    deleteContact,
    changeFilter
}
export default actions;