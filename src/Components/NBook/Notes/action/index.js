export const ADD_NOTES    = 'ADD_NOTES';
export const DELETE_NOTES = 'DELETE_NOTES';
export const UPDATE_NOTES = 'UPDATE_NOTES';

let nextId = 6;

export function addNotes(text){
    return {
        type: ADD_NOTES,
        id: nextId++,
        text
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
