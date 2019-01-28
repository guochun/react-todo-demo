import { combineReducers } from 'redux';
import todo from './todo';
import filter from './filter';
import text from './text';


export default combineReducers({
  todo,
  filter,
  text
});

