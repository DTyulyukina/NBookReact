import React from 'react'; 
import { createStore } from 'redux';

import ListNotes from './ListNotes';
import data from './dates';
import './Notes.scss';

import reduser from './redusers';
import {addNotes, deleteNotes, updateNotes} from './action';

const store = createStore(reduser, data);

store.subscribe(() => console.log(store.getState()));

store.dispatch(addNotes('note 6'));
store.dispatch(deleteNotes(3));
store.dispatch(updateNotes(2, 'tete'));

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