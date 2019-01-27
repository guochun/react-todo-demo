import React, { Component } from "react";

class TodoInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render() {
    return (
      <div>
        <input value={this.state.text} />
        <button>add</button>
      </div>
    );
  }
}

export default TodoInput;
