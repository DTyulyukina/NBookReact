import { combineReducers } from 'redux';

import { default as datas } from './datas';
import { default as search } from './search';

export default combineReducers({ datas, search });