export const getText = (state) => state.text 
export const getFilter = (state) => state.filter
export const filterTodos = function(state) {
  const {todos: { data }, filter} = state
  return data.filter(item => {
    if (filter === "actived") {
      return !item.completed;
    } else if (filter === "completed") {
      return item.completed;
    } else {
      return true;
    }
  });
}