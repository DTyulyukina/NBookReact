import React from 'react'; 
import { createStore } from 'redux';

import ListNotesContainer from './containers/ListNotesContainer';
import FormContainer      from './containers/FormContainer';

import data from './dates';
import './Note.scss';

import reduser from './redusers';

const store = createStore(reduser, data);

class Notes extends React.Component{
    render() {
        return (
            <div className="area-note">
                <FormContainer store={store} />
                <ListNotesContainer store={store}/>
            </div>
        )
    }
}

export default Notes;