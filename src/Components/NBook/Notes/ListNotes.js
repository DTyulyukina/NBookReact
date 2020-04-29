import React from 'react';
import PropTypes from 'prop-types';

import Record from './Record';

function ListNotes(props){
        let styleList = {gridTemplateRows: "repeat(" + props.notes.length +", 50px)"};
        return (
                <div className='list_notes' style={styleList}>
                        {props.notes.map((note, index) =>
                                <Record 
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