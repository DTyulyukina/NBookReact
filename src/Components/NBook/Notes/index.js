import React from 'react';
import PropTypes from 'prop-types';

import ListNotes from './ListNotes';
import data from './dates';
import './Notes.scss';

class Notes extends React.Component{
    render() {
        return (
            <div className='list_notes'>
                <ListNotes notes={data} />
            </div>
        )
    }
}

export default Notes;