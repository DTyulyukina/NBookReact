import React from 'react';
import { connect } from 'react-redux';

import Form from '../Form';
import {addNotes, updateNotes} from '../action';

function mapDispatchToProps(dispatch){
    return {
        onAdd: text => dispatch(addNotes(text)),
        onUpdate: (id, text) => dispatch(updateNotes(id, text))
    };
}

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;