import { combineReduders } from 'redux';
import todo from './todo';
import filter from './filter';
import text from './text';


export default combineReduders({
  todo,
  filter,
  text
});