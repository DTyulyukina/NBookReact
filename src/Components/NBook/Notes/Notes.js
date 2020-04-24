import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function Notes(props){
   return (
        <div className="note">
            <div className="text">
                note {props.id}
            </div>
            <div className="icon">
                <Button index={props.id} type="delete" nameCss="icon-notes"/>
            </div>
        </div>
    );
}

Notes.propTypes = {
    id: PropTypes.number
}

export default Notes;