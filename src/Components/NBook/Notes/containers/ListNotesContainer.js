import React from 'react';

import ListNotes from './../ListNotes';
import {addNotes, deleteNotes, updateNotes} from '../action';

class ListNotesContainer extends React.Component{
    constructor(props){
        super(props);

        this.store = this.props.store;

        this.unsubscribe = this.unsubscribe.bind(this);

        this.handleAdd    = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    unsubscribe(){
        this.store.subscribe(() => this.forceUpdate());
    }

    componentDidMount(){
        this.unsubscribe();
    }

    componentWillMount(){
        this.unsubscribe();
    }

    handleAdd(text){
        this.store.dispatch(addNotes(text));
    }

    handleDelete(id){
        this.store.dispatch(deleteNotes(id));
    }

    handleUpdate(id, text){
        this.store.dispatch(updateNotes(id, text));
    }

    render(){
        const notes = this.store.getState();
        return (
            <ListNotes 
                notes={notes}
                onDelete={this.handleDelete}
                onUpdate={this.handleUpdate}
                onAdd={this.handleAdd}
                />
        )
    }
}

export default ListNotesContainer;