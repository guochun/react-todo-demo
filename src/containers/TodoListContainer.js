import { connect} from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodoItem, fetchTodos } from "../actions";
import { filterTodos } from '../selectors'



const mapStateToProps = state => ({
  todos: filterTodos(state)
});

const mapDispatchToProps = dispatch => ({
  toggleTodoItem: id => dispatch(toggleTodoItem(id)),
  fetchTodos: () => dispatch(fetchTodos())
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
