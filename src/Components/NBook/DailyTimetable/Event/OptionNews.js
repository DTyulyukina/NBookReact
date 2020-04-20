import React from 'react';
import PropTypes from 'prop-types';

function NewEvent(props){
    if(props.act){
         return <span className={props.className} 
                      onClick={() => props.funcEvent(props.keyId, props.valueText)}>
                          {props.valueDef}
                </span>;
    }
    else {
        return (
            <span className={props.className}>
                {props.valueDef}
            </span>
        );
    }
}

NewEvent.propTypes = {
    className: PropTypes.string.isRequired,
    valueDef: PropTypes.string,
    keyId: PropTypes.number,
    funcEvent: PropTypes.func,
    valueText: PropTypes.string
}

export default NewEvent;