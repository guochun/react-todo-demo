import React, { Component } from "react";

class TodoInput extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return (
      <div>
        <input onChange = {this.handleChange} value={this.props.text} />
        <button onClick={this.handleClick}>add</button>
      </div>
    );
  }

  handleChange (e) {
    this.props.setTodoItemText(e.target.value)
  }

  handleClick () {
    if(this.props.text === '') return;
    this.props.addTodoItem(this.props.text)
  }
}

export default TodoInput;
