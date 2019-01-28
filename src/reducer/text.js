import {
  SET_TODO_ITEM_TEXT
} from "../actions/actionTypes";

const text = (state = '', action) => {
  switch (action.type) {
    case SET_TODO_ITEM_TEXT:
    return action.text
    default: 
      return state
  }

};

export default text;