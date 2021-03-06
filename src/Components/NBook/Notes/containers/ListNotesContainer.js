import { connect } from 'react-redux';

import ListNotes from '../ListNotes';
import { deleteNotes, editText, showNote } from '../action';
import { getSearchNotes } from './../redusers';

function mapStateToProps(state){
    return {
        notes: getSearchNotes(state)
    };
}

function mapDispatchToProps(dispatch){
    return {
        onDelete: id => dispatch(deleteNotes(id)),
        editText: id => dispatch(editText(id)),
        showNote: id => dispatch(showNote(id))
    };
}

const ListNotesContainer = connect(mapStateToProps, mapDispatchToProps)(ListNotes);

export default ListNotesContainer;