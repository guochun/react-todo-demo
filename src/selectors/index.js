export const getText = (state) => state.get('text')
export const getFilter = (state) => state.get('filter')
export const filterTodos = function (state) {
  const data = state.getIn(['todos', 'data'])
  const filter = state.get('filter')
  return data.filter(item => {
    if (filter === "actived") {
      return !item.get('completed')
    } else if (filter === "completed") {
      return item.get('completed')
    } else {
      return true;
    }
  });
}