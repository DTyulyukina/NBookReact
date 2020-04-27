import React from 'react';

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

export default ListNotes;