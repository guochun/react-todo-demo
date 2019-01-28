import {
  ADD_TODO_ITEM,
  TOGGLE_TODO_ITEM,
  SET_FILTER,
  SET_TODO_ITEM_TEXT
} from "../actions/actionTypes";

const initialState = {
  text: '',
  filter: 'all',
  todos: []
}


const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };
    case TOGGLE_TODO_ITEM:
      return{
        ...state,
        todos: state.todos.map( item => {
          return item.id === action.id ? {...item, completed: !item.completed} : item
        })
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter
      };
    case SET_TODO_ITEM_TEXT:
    return {
      ...state,
      text: action.text
    }
    default: 
      return {...state}
  }

  return state;
};

export default todoApp