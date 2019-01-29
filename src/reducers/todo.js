import { ADD_TODO_ITEM, TOGGLE_TODO_ITEM } from "../actions/actionTypes";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO_ITEM:
      return state.map(item => {
        return item.id === action.id
          ? { ...item, completed: !item.completed }
          : item;
      });
    default:
      return state;
  }
};

export default todos;
