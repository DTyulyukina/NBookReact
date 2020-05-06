import { combineReducers } from 'redux';

import { default as datasReduser } from './datas';
import { default as searchReduser } from './search';

export default combineReducers({ datas: datasReduser, search: searchReduser });