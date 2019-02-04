import React, { Component } from "react";

import TodoItem from "./TodoItem";

class TodoList extends Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    const { todos, toggleTodoItem } = this.props;
    console.log(todos)
    return (
      <ul>
        {todos.map(todo => {
          return (
            <TodoItem
              onClick={() => {
                toggleTodoItem(todo.id);
              }}
              key={todo.id}
              {...todo}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
