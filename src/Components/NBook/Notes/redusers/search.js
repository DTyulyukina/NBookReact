import { SET_SEARCH } from '../action';

export default function reduser(state='ALL', action){
    switch(action.type) {
        case SET_SEARCH:
            return action.search;
        
        default:
            return state;
    }
}