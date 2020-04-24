import React from 'react'; 
import { createStore } from 'redux';

import ListNotes from './ListNotes';
import data from './dates';
import './Notes.scss';

import reduser from './redusers';

const store = createStore(reduser, data);

class Notes extends React.Component{
    render() {
        return (
            <div className='list_notes'>
                <ListNotes store={store} />
            </div>
        )
    }
}

export default Notes;