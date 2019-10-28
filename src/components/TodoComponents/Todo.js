import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    return(
      <ul>
        <li>{this.props.todo}</li>
      </ul>
    )
  }
}

export default Todo;
