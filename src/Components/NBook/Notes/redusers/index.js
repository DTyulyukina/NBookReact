import { DELETE_NOTES } from './../action';

export default function reducer(state = [], action){
    switch(action.type){
        case DELETE_NOTES:
            const index = state.findIndex(data => data.id === action.id)
            return [ 
                ...state.slice( 0, index), 
                ...state.slice( index + 1)
            ];

        default:
            return state;
    }
}