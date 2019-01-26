import React, { Component } from "react";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map(todo => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </ul>
    );
  }
}

export default TodoList;
