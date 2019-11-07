import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    return(
      <div className='list-container'>
        <ul className='task-list'>
          <li
            className={`${this.props.todo.completed ? " completed" : ""}`}
            onClick={(e) => {
            this.props.strikeTodo(this.props.todo.id) 
            }} 
          >
            {!(this.props.todo.completed) ?  <i className="far fa-circle" /> : <i className="fas fa-check-circle"></i> } 
            {this.props.todo.name}
          </li>
        </ul>
      </div>  
    )
  }
}

export default Todo;
