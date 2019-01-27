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
    this.nextTodoId = 0;
    this.addTodoItem = this.addTodoItem.bind(this)
    this.toggleTodoItem = this.toggleTodoItem.bind(this)
    this.setFilter = this.setFilter.bind(this)
  }
  render() {
    const todos = this.filterTodos();
    const { filter } = this.state;
    return (
      <div>
        <TodoInput addTodoItem = {this.addTodoItem} />
        <TodoList todos={todos}  toggleTodoItem={this.toggleTodoItem} />
        <TodoFooter filter={filter} setFilter={this.setFilter} />
      </div>
    );
  }

  filterTodos() {
    const currentFilter = this.state.filter;
    return this.state.todos.filter((item) => {
      if (currentFilter === 'actived') {
        return !item.completed
      } else if (currentFilter === 'completed') {
        return item.completed
      } else {
        return true
      }
    })
  }

  addTodoItem(text) {
    const item = {
      id: this.nextTodoId ++,
      text,
      completed: false
    }
    const todos = [item, ...this.state.todos]

    this.setState({
      todos
    })
  }

  toggleTodoItem(id) {
    const newTodos = this.state.todos.map((item) => {
      return item.id === id ? {...item, completed: !item.completed} : item
    })

    this.setState({
      todos: newTodos
    })

  }

  setFilter(filter) {
    this.setState({
      filter,
    })
  }
}

export default App;
