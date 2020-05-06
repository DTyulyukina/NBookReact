export const SET_SEARCH = 'SET_SEARCH';

export function setFilterNote(search){
    return {
        type: SET_SEARCH,
        search
    }
}