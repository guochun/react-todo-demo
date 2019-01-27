import React, { Component } from "react";

class TodoFooter extends Component {
  render() {
    const { filter, setFilter } = this.props;
    return (
      <div>
        <span>Show: </span>
        <button onClick={() => {setFilter('all')}} disabled={filter === "all"}>All</button>
        <button onClick={() => {setFilter('actived')}} disabled={filter === "actived"}>Active</button>
        <button onClick={() => {setFilter('completed')}} disabled={filter === "completed"}>Completed</button>
      </div>
    );
  }
}

export default TodoFooter;
