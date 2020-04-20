import PropTypes from 'prop-types';
import React from 'react';

function Notes(props){
   return (
        <div className="note">note {props.id}</div>
    );
}

Notes.propTypes = {
    id: PropTypes.number
}

export default Notes;