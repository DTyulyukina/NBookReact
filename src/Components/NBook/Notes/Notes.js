import React from 'react';
import PropTypes from 'prop-types';

function Notes(props){
   return (
        <div className="note">
            <div className="text">
                note {props.id}
            </div>
        </div>
    );
}

Notes.propTypes = {
    id: PropTypes.number
}

export default Notes;