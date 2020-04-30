import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function Record(props){
    return (
        <div className="note">
            <div className="text">
                {props.text}
            </div>
            <div className="buttons">
                <Button index={props.id} icon="update" nameCss="icon-notes" action={props.editForm}/>
                <Button index={props.id} icon="delete" nameCss="icon-notes" action={props.onDelete}/>
            </div>
        </div>    
    )
}

Record.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    action: PropTypes.func
}

export default Record;