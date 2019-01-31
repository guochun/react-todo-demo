import { connect} from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodoItem, fetchTodos } from "../actions";


function filterTodos(todos, filter) {
  return todos.filter(item => {
    if (filter === "actived") {
      return !item.completed;
    } else if (filter === "completed") {
      return item.completed;
    } else {
      return true;
    }
  });
}
const mapStateToProps = state => ({
  todos: filterTodos(state.todos.data, state.filter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodoItem: id => dispatch(toggleTodoItem(id)),
  fetchTodos: () => dispatch(fetchTodos())
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
