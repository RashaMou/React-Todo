import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    return(
      <div>
        <ul>
          <li
            className={`${this.props.todo.completed ? " completed" : ""}`}
            onClick={(e) => {
            this.props.strikeTodo(this.props.todo.id) 
            }} 
          >
            {this.props.todo.name}
          </li>
        </ul>
      </div>  
    )
  }
}

export default Todo;
