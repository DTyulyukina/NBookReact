import { connect } from 'react-redux';

import Form from '../Form';
import {addNotes, updateNotes} from '../action';

function getSearchNotes( notes, search ){
    switch (search){
        case 'ALL':
            return notes;
        
        case 'TITLE':
            return notes.filter( note => note.heading);

        case 'TEXT': 
            return notes.filter( note => note.text)
    }
}

function mapStateToProps(state){
    return {
        notes: getSearchNotes(state.note, state.search)
    };
}

function mapDispatchToProps(dispatch){
    return {
        onAdd: (heading, text) => dispatch(addNotes(heading, text)),
        onUpdate: (id, heading, text) => dispatch(updateNotes(id, heading, text))
    };
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;