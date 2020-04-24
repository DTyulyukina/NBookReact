import React from 'react';
import PropTypes from 'prop-types';

import Notes from './Notes';
import {addNotes, deleteNotes, updateNotes} from './action';

class ListNotes extends React.Component{
    constructor(props){
        super(props);

        this.store = this.props.store;

        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount(){
        this.store.subscribe(() => this.forceUpdate());
    }

    componentWillMount(){
        this.store.subscribe(() => this.forceUpdate());
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

    render() {
        let array = this.store.getState().map((note,index) => {
            return (
                <React.Fragment key={index}>
                    <Notes key={note.id} id={note.id} text={note.text}/>
                </React.Fragment>
            )
        });
        return(array);
    }
}

ListNotes.propTypes = {
    notes: PropTypes.array
}

export default ListNotes;