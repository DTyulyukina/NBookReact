import React from 'react'; 
import { createStore } from 'redux';

import SearchContainer     from './containers/SearchContainer';
import ListNotesContainer from './containers/ListNotesContainer';
import FormContainer      from './containers/FormContainer';

import data from './dates.json';
import './Note.scss';

import reduser from './redusers';

const store = createStore(reduser, data);

class Notes extends React.Component{
    render() {
        return (
            <div className="area-note">
                <SearchContainer    store={store}/>
                <div className="container">
                   <FormContainer      store={store}/>
                   <ListNotesContainer store={store}/>
                </div>
            </div>
        )
    }
}

export default Notes;