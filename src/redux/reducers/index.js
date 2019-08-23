import {combineReducers} from 'redux';
import {test} from './testReducers';
import {validationReducer} from './validationReducer';
import {UserIsLogin} from './UserReducers';

export default combineReducers({
    test,
    validationReducer,
    UserIsLogin:UserIsLogin

})