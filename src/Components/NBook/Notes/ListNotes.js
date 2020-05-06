import React from 'react';

import Record from './Record';

function ListNotes(props){
        let styleList = {gridAutoRows: "minmax(" + 50 +"px, auto)", gridRowGap: 10 + 'px'};
        return (
                <div className='list_notes' style={styleList}>
                        {props.notes.map((note, index) =>
                                <Record 
                                       key={index} 
                                       id={note.id} 
                                       heading={note.heading}
                                       text={note.text}
                                       editing={note.editing}
                                       show_text={note.show_text}
                                       onDelete={props.onDelete}
                                       editForm={props.editForm}
                                       showNote={props.showNote}
                                />)  
                        }
                </div>
        );
}

export default ListNotes;