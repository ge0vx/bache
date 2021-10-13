import {combineReducers} from 'redux';
import {reducer as userReducer} from './user/reducers';

const reducer = combineReducers({
  users: userReducer,
});

export {reducer};
