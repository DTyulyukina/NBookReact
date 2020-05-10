import { createStore } from 'redux';

import data from './dates.json';
import reduser from '../redusers';

const store = createStore(reduser, data);

export default store;

