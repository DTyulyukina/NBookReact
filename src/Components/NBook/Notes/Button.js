import React from 'react';
import PropTypes from 'prop-types';

import Delete from '@material-ui/icons/Delete';
import Edit   from '@material-ui/icons/Edit';
import Save   from '@material-ui/icons/Save';

function Button(props){
    switch(props.type){
        case 'delete':
            return (
                <button name={props.index} 
                        className={props.nameCss} 
                        onClick={() => props.action(props.index)}>
                    <Delete>{props.type}</Delete>
                </button>
            );
        case 'update':
            return (
                <button name={props.index} 
                        className={props.nameCss} 
                        onClick={() => props.action(props.index)}>
                    <Edit>{props.type}</Edit>
                </button>
            );
        case 'save':
                return (
                    <button name={props.index} 
                            className={props.nameCss} 
                            onClick={() => props.action(props.index)}>
                        <Save>{props.type}</Save>
                    </button>
                );
    } 
}

Button.propTypes = {
    index: PropTypes.number,
    type: PropTypes.string,
    nameCss: PropTypes.string,
    action: PropTypes.func
}

export default Button;