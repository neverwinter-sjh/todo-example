import todo from 'Store/Reducers';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  todo,
  routing: routerReducer
});
