import React, { Component } from "react";

class TodoInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return (
      <div>
        <input onChange = {this.handleChange} value={this.state.text} />
        <button onClick={this.handleClick}>add</button>
      </div>
    );
  }

  handleChange (e) {
    this.setState({
      text: e.target.value
    })
  }

  handleClick () {
    if(this.state.text === '') return;
    this.props.addTodoItem(this.state.text)
  }
}

export default TodoInput;
