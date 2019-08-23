import {combineReducers} from 'redux';
import {test} from './testReducers';
import {vlaidationReducer} from './validationReducer';

export default combineReducers({
    test,
    vlaidationReducer
})