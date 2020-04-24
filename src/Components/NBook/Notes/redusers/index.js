import { ADD_NOTES, DELETE_NOTES, UPDATE_NOTES } from './../action';

function reduserNotes(state = {}, action){
    switch(action.type) {
        case ADD_NOTES:
            return {
                id: action.id,
                text: action.text
            };
            
        case UPDATE_NOTES :
            if (state.id !== action.id){
                return state;
            }

            return Object.assign({}, state, {
                text: action.text
            })
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

        default:
            return state;
    }
}