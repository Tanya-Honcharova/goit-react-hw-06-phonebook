import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import propsTypes from 'prop-types'
import shortid from 'shortid';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    const inputListId = shortid.generate();
    return (
        <>
            <label className={styles.label} htmlFor={inputListId}>
                Find contacts by name
            </label>
            <input className={styles.input}
                id={inputListId}
                value={value} onChange={onChange} />
        </>
    )
};

Filter.defaultProps = {
    value: ' '
}
Filter.propsTypes = {
    value: propsTypes.string,
    onChange: propsTypes.isPequired
}

const mapStateToProps = state => ({
    value: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
    onChange: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);