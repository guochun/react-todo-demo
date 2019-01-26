import React, { Component } from "react";

class TodoFooter extends Component {
  render() {
    const { filter } = this.props;
    return (
      <div>
        <span>Show: </span>
        <button disabled={filter === "all"}>All</button>
        <button disabled={filter === "actived"}>Active</button>
        <button disabled={filter === "complete"}>Completed</button>
      </div>
    );
  }
}

export default TodoFooter;
