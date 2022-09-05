import {createStore} from 'redux';
import allReducers from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(allReducers, devToolsEnhancer());

export default store;