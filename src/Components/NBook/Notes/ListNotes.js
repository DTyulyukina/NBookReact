import React from 'react';
import PropTypes from 'prop-types';

import Notes from './Notes';

class ListNotes extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            arrayNotes: this.props.notes
        }
    }

    render() {
        let array = this.state.arrayNotes.map((note,index) => {
            return (
                <React.Fragment key={index}>
                    <Notes key={note.id} id={note.id} text={note.text}/>
                </React.Fragment>
            )
        });
        return(array)
    }
}

ListNotes.propTypes = {
    notes: PropTypes.array
}

export default ListNotes;