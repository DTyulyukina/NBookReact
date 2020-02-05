import React from 'react';
import PropTypes from 'prop-types';

function NewEvent(props){
    return (
    <span className={props.className}>{props.value}</span>
    );
}

NewEvent.propTypes = {
    className: PropTypes.string.isRequired,
    value: PropTypes.string
}

export default NewEvent;