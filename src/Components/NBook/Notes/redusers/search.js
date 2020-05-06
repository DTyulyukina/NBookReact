import { SET_SEARCH } from '../action';

function reduser( state = 'ALL', action){
    switch(action.type) {
        case SET_SEARCH:
            return action.search;
        
        default:
            return state;
    }
}

export default reduser;