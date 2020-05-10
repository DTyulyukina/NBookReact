import React from 'react'; 

import SearchContainer     from './containers/SearchContainer';
import ListNotesContainer from './containers/ListNotesContainer';
import FormContainer      from './containers/FormContainer';

import './Note.scss';

import store from './store';

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