import React from 'react';
import PropTypes from 'prop-types';

import Delete from '@material-ui/icons/Delete';
import Edit   from '@material-ui/icons/Edit';
import Save   from '@material-ui/icons/Save';

function Button(props){
    return (
        <button name={props.index} className={props.nameCss}>
            <Delete>{props.type}</Delete>
        </button>
    ); 
}

Button.propTypes = {
    index: PropTypes.number,
    type: PropTypes.string,
    nameCss: PropTypes.string
}

export default Button;