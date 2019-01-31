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

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_TODOS_SUCCESS:
      return { ...state, isFetching: false, data: action.data };
    case FETCH_TODOS_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    default:
      return {
        ...state,
        data: todos(state.data, action)
      };
  }
};

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

export default reducer;
