import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { text, completed } = this.props;
    return (
      <li
        style={{
          textDecoration: completed ? "line-through" : "none"
        }}
      >
        {text}
      </li>
    );
  }
}

export default TodoItem;
