import React from 'react';
import './Notes.scss'

class Notes extends React.Component{
    constructor(){
        super();

        this.state = {
            arrayNotes: null
        }
    }

    render() {
        return (
            <div className='notes'>
                Notes
            </div>
        )
    }
}

export default Notes;