import React from 'react';
import PropTypes from 'prop-types';

function NewEvent(props){
    return (
    <span className={props.className} onClick={() => props.removeEvent(props.keyId)}>{props.value}</span>
    );
}

NewEvent.propTypes = {
    className: PropTypes.string.isRequired,
    value: PropTypes.string,
    keyId: PropTypes.number,
    removeEvent: PropTypes.func
}

export default NewEvent;