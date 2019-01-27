import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { text, completed, onClick } = this.props;
    return (
      <li
        onClick={onClick}
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
