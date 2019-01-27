import React, { Component } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      todos: [],
      filter: 'all'
    }
  }
  render() {
    const todos = this.getVisiableTodos();
    const { filter } = this.props;
    return (
      <div>
        <TodoInput />
        <TodoList todos={todos} />
        <TodoFooter filter={filter} />
      </div>
    );
  }

  getVisiableTodos() {
    const currentFilter = this.state.filter;
    this.state.todos.filter((item) => {
      if (currentFilter === 'actived') {
        return !item.completed
      } else if (currentFilter === 'completed') {
        return item.completed
      } else {
        return true
      }
    })
  }
}

export default App;
