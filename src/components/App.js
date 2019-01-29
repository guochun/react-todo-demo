import React, { Component } from "react";

import TodoInputContainer from "../containers/TodoInputContainer";
import TodoListContainer from "../containers/TodoListContainer";
import TodoFooterContainer from "../containers/TodoFooterContainer";

class App extends Component {
  render() {
    return (
      <div>
        <TodoInputContainer />
        <TodoListContainer />
        <TodoFooterContainer />
      </div>
    );
  }
}

export default App;
