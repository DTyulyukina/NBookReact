import { combineReducers } from 'redux';

import datasReduser, * as getDatas from './datas';
import searchReduser from './search';

export default combineReducers({ datas: datasReduser, search: searchReduser });

export function getSearchNotes(state){
    return getDatas.getSearchNotes(state.datas, state.search.type, state.search.text);
}