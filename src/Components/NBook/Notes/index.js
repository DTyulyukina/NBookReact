import React from 'react'; 
import { createStore } from 'redux';

import ListNotes from './ListNotes';
import data from './dates';
import './Notes.scss';

import reduser from './redusers';
import {deleteNotes} from './action';

const store = createStore(reduser, data);

store.subscribe(() => console.log(store.getState()));

store.dispatch(deleteNotes(3));

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