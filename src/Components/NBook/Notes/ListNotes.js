import React from 'react';
import PropTypes from 'prop-types';

import Notes from './Notes';

function ListNotes(props){
        return (
                <div className='list_notes'>
                        {props.notes.map((note, index) =>
                                <Notes 
                                       key={index} 
                                       id={note.id} 
                                       text={note.text}
                                       onDelete={props.onDelete}
                                       onUpdate={props.onUpdate}
                                       onAdd={props.onAdd}
                                />)  
                        }
                </div>
        );
}

ListNotes.propTypes = {
        notes: PropTypes.array,
        onDelete: PropTypes.func,
        onUpdate: PropTypes.func,
        onAdd: PropTypes.func
}

export default ListNotes;