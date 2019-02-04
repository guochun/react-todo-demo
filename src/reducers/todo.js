import immutable from 'immutable'
import {
  ADD_TODO_ITEM,
  TOGGLE_TODO_ITEM,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_REQUEST
} from "../actions/actionTypes";

const initState = {
  isFetching: false,
  error: null,
  data: []
};

const reducer = (state = immutable.fromJS(initState), action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return state.state('isFetching', true)
    case FETCH_TODOS_SUCCESS:
      return state.merge({
        isFetching: false,
        data: immutable.fromJS(action.data)
      })
    case FETCH_TODOS_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error
      })
    default:
      const data = state.get('data')
      return state.set('data', todos(data, action))
  }
};

const todos = (state = immutable.fromJS([]), action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      const newTodo = immutable.fromJS({
        id: action.id,
        text: action.text,
        completed: false
      })
      return state.push(newTodo)
    case TOGGLE_TODO_ITEM:
      return state.map(item => {
        return item.get('id') === action.id ?
        item.set('completed', !item.get('completed')) : item
      })
    default:
      return state;
  }
};

export default reducer;
