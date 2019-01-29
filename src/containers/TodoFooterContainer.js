import { connect } from "react-redux";
import TodoFooter from "../components/TodoFooter";
import { setFilter } from "../actions";


const mapStateToProps = (state) => ({ 
  filter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: filter => dispatch(setFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFooter);
