import { connect } from "react-redux";
import TodoInput from "../components/TodoInput";
import { addTodoItem, setTodoItemText} from "../actions";
import { getText } from '../selectors'


const mapStateToProps = (state) => ({
  text: getText(state)
});

const mapDispatchToProps = (dispatch) => ({
  addTodoItem: text => dispatch(addTodoItem(text)),
  setTodoItemText: text => dispatch(setTodoItemText(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput);
