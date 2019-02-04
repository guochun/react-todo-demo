import { createSelector } from 'reselect'
export const getText = (state) => state.get('text')
export const getFilter = (state) => state.get('filter')
export const getTodos = (state) => state.getIn(['todos', 'data'])
export const filterTodos = createSelector([
  getTodos,
  getFilter
], (todos, filter) => {
  return todos.filter(item => {
    if (filter === "actived") {
      return !item.get('completed')
    } else if (filter === "completed") {
      return item.get('completed')
    } else {
      return true;
    }
  });
})

