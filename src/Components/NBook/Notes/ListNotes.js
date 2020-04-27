import React, { Fragment } from 'react';

import Notes from './Notes';

function ListNotes(props){
        let num = Math.trunc(props.notes.length/3) + 1;
        console.log(num)
        const style = {
                gridTemplateColumns: 'repeat( 3, 265px)',
                gridTemplateRows: 'repeat( ' + num + ', 150px)'
        }

        console.log(style)
        return (
                <div className='list_notes' style={style}>
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