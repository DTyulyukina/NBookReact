import { SET_SEARCH } from '../action';

function reduser( state = 'ALL', action){
    switch(action.type) {
        case SET_SEARCH:
            return {
                type: action.search,
                text: action.text
            };
        
        default:
            return state;
    }
}

export default reduser;