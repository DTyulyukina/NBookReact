import PropTypes from 'prop-types';
import React from 'react';

function Notes(props){
   return (
        <span>note {props.id}</span>
    );
}

Notes.propTypes = {
    id: PropTypes.number
}

export default Notes;