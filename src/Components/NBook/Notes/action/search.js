export const SET_SEARCH = 'SET_SEARCH';

export function setFilterNote(search, text){
    return {
        type: SET_SEARCH,
        search,
        text
    }
}