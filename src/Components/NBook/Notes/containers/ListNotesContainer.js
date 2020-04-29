import React from 'react';
import { connect } from 'react-redux';

import ListNotes from './../ListNotes';
import {addNotes, deleteNotes, updateNotes} from '../action';

function mapStateToProps(state){
    return {
        notes: state
    };
}

function mapDispatchToProps(dispatch){
    return {
        onAdd: text => dispatch(addNotes(text)),
        onDelete: id => dispatch(deleteNotes(id)),
        onUpdate: (id, text) => dispatch(updateNotes(id, text))
    };
}

const ListNotesContainer = connect(mapStateToProps, mapDispatchToProps)(ListNotes);

export default ListNotesContainer;