import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function Notes(props){
   return (
            <div className="note">
                <div className="text">
                    note {props.id}
                </div>
                <div className="icon">
                    <Button index={props.id} type="delete" nameCss="icon-notes" action={props.onDelete}/>
                </div>
            </div>
    );
}

Notes.propTypes = {
    id: PropTypes.number,
    onDelete: PropTypes.func
}

export default Notes;