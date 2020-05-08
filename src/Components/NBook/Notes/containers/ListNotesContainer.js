import { connect } from 'react-redux';

import ListNotes from '../ListNotes';
import { deleteNotes, editText, showNote } from '../action';

function getSearchNotes( datas, search, text ){
    switch (search){
        case 'ALL':
            return datas;
        
        case 'TITLE':
            return datas.filter( note => note.heading === text);

        case 'TEXT': 
            return datas.filter( note => note.text.includes(text, 0) === true);
    }
}


function mapStateToProps(state){
    return {
        notes: getSearchNotes(state.datas, state.search.type, state.search.text)
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