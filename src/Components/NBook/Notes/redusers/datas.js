import { ADD_NOTES, DELETE_NOTES, UPDATE_NOTES, TEXT_EDIT, SHOW_NOTE } from './../action';

function reduserNotes(state = {}, action){
    switch(action.type) {
        case ADD_NOTES:
            return {
                id: action.id,
                heading: action.heading,
                text: action.text,
                editing: false,
                show_text: false
            };
            
        case UPDATE_NOTES :
            if (state.id !== action.id){
                return state;
            }

            return Object.assign({}, state, {
                heading: action.heading,
                text: action.text,
                editing: action.editing
            })
        
        case TEXT_EDIT :
            if (state.id !== action.id){
                return state;
            }

            return Object.assign({}, state, {
                editing: !state.editing
            })

       case SHOW_NOTE :
            if (state.id !== action.id){
                return state;
            }

            return Object.assign({}, state, {
                show_text: !state.show_text
            })
        
        default:
            return state;
    }
}

export default function reducer(state = [], action){
    switch(action.type){
        case ADD_NOTES:
            return [ ...state, reduserNotes(undefined, action)];

        case DELETE_NOTES:
            const index = state.findIndex(data => data.id === action.id)
            return [ 
                ...state.slice( 0, index), 
                ...state.slice( index + 1)
            ];

        case UPDATE_NOTES:
            return state.map(data => reduserNotes(data, action));
        
        case TEXT_EDIT:
            state.map(data => 
                data.editing === true ? 
                data.editing = !data.editing : 
                data.editing);
            return state.map(data => reduserNotes(data, action));
        
        case SHOW_NOTE:
            return state.map(data => reduserNotes(data, action));

        default:
            return state;
    } 
}

export function getSearchNotes( state, search, text ){
    switch (search){
        case 'ALL':
            return state;
        
        case 'TITLE':
            return state.filter( note => note.heading === text);

        case 'TEXT': 
            return state.filter( note => note.text.includes(text, 0) === true);
        
        default:
            return state;
    }
}