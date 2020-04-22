import React from 'react';
import PropTypes from 'prop-types';

import Delete from '@material-ui/icons/Delete';
import Edit   from '@material-ui/icons/Edit';
import Save   from '@material-ui/icons/Save';

function Button(props){
   return (
       <div name={props.index} className="icon">
           <Delete>{props.type}</Delete>
       </div>
    );
}

Button.propTypes = {
    index: PropTypes.number,
    type: PropTypes.string
}

export default Button;