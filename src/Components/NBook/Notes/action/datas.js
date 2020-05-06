export const ADD_NOTES    = 'ADD_NOTES';
export const DELETE_NOTES = 'DELETE_NOTES';
export const UPDATE_NOTES = 'UPDATE_NOTES';
export const TEXT_EDIT    = 'TEXT_EDIT';
export const SHOW_NOTE    = 'SHOW_NOTE';

let nextId = 6;

export function addNotes(heading, text){
    return {
        type: ADD_NOTES,
        id: nextId++,
        heading,
        text,
        editing: false,
        show_text: false
    }
}

export function deleteNotes(id){
    return {
        type: DELETE_NOTES,
        id
    }
}

export function updateNotes(id, heading, text){
    return {
        type: UPDATE_NOTES,
        id,
        heading,
        text,
        editing: false
    }
}

export function editText(id){
    return {
        type: TEXT_EDIT,
        id
    }
}

export function showNote(id){
    return {
        type: SHOW_NOTE,
        id
    }
}