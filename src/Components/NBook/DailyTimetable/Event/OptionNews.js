import React from 'react';
import PropTypes from 'prop-types';

function NewEvent(props){
    return (
    <span className={props.className} onClick={props.function}>{props.value}</span>
    );
}

NewEvent.propTypes = {
    className: PropTypes.string.isRequired,
    function: PropTypes.func,
    value: PropTypes.string
}

export default NewEvent;