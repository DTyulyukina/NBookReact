import React from 'react'; 
import { createStore } from 'redux';

import ListNotesContainer from './containers/ListNotesContainer';
import data from './dates';
import './Note.scss';

import reduser from './redusers';

const store = createStore(reduser, data);

class Notes extends React.Component{
    render() {
        return (
            <ListNotesContainer store={store} />
        )
    }
}

export default Notes;