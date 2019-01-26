import React, { Component } from 'react';

import TodoInput from './TodoInput'
import TodoList from "./TodoList"
import TodoFooter from "./TodoFooter"

class App extends Component {
  render() {
    return (
      <div>
        <TodoInput /> 
        <TodoList />
        <TodoFooter />
      </div>
    );
  }
}

export default App;