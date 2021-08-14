import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';

import style from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={style.list}>
            {contacts && contacts.map(({ id, name, number }) => {
                return (
                    <li key={id} className={style.item}>
                        <span>{name}</span><span>{number}</span>
                        <button
                            className={style.btn}
                            type="button"
                            id={id}
                            onClick={() => onDeleteContact(id)}
                        >
                            Delete</button>
                    </li>
                );
            })}
        </ul>

    );
};


ContactList.defaultProps = {
    contacts: []
};

ContactList.propTypes = {
    contacts: propTypes.array,
    onDeleteContact: propTypes.func.isRequired
};

const getVisibleContacts = (allContats, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContats.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
    );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
    contacts: getVisibleContacts(items, filter),
})

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);