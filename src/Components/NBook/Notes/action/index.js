export const ADD_NOTES    = 'ADD_NOTES';
export const DELETE_NOTES = 'DELETE_NOTES';
export const UPDATE_NOTES = 'UPDATE_NOTES';
export const FORM_EDIT    = 'FORM_EDIT';

let nextId = 6;

export function addNotes(text){
    return {
        type: ADD_NOTES,
        id: nextId++,
        text,
        editing: false
    }
}

export function deleteNotes(id){
    return {
        type: DELETE_NOTES,
        id
    }
}

export function updateNotes(id, text){
    return {
        type: UPDATE_NOTES,
        id,
        text
    }
}

export function editForm(id){
    return {
        type: FORM_EDIT,
        id
    }
}
