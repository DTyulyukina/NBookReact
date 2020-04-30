import React from 'react';
import { connect } from 'react-redux';

import ListNotes from '../ListNotes';
import {deleteNotes, editForm} from '../action';

function mapStateToProps(state){
    return {
        notes: state
    };
}

function mapDispatchToProps(dispatch){
    return {
        onDelete: id => dispatch(deleteNotes(id)),
        editForm: id => dispatch(editForm(id))
    };
}

const ListNotesContainer = connect(mapStateToProps, mapDispatchToProps)(ListNotes);

export default ListNotesContainer;