import {ADD_NOTES, DELETE_NOTES, UPDATE_NOTES} from './action';

export default function reducer(state = [], action){
    switch(action.type){
        case ADD_NOTES: 
            return [];

        case DELETE_NOTES:
            return [];

        case UPDATE_NOTES:
            return [];
        
        default:
            return state;
    }
}