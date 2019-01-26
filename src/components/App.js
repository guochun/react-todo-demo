import React, { Component } from "react";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

const todos = [
  {
    id: "1",
    text: "学习react",
    completed: true
  },
  {
    id: "2",
    text: "学习redux",
    completed: true
  },
  {
    id: "3",
    text: "学习react router",
    completed: true
  }
];

const filter = "all";

class App extends Component {
  render() {
    return (
      <div>
        <TodoInput />
        <TodoList todos={todos} />
        <TodoFooter filter={filter} />
      </div>
    );
  }
}

export default App;
