import React from 'react';
import { connect } from 'react-redux';

import Form from '../Form';
import {addNotes, updateNotes} from '../action';

function mapStateToProps(state){
    return {
        notes: state
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