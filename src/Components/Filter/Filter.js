import React from 'react';
import { connect } from 'react-redux';
import contactAction from '../../redux/contacts/contacts-actions';
import propsTypes from 'prop-types'
// import shortid from 'shortid';
import styles from './Filter.module.css';


const Filter = ({ value, onChange }) => {
    // const inputListId = shortid.generate();
    return (
        <div>
            {/* <label className={styles.label}
                // htmlFor={inputListId}
            >
            </label> */}
            <p> Find contacts by name</p>
            <input
                type="text"
                className={styles.input}
                // id={inputListId}
                value={value}
                onChange={onChange}
            />
        </div>
    );
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
    onChange: e => dispatch(contactAction.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

