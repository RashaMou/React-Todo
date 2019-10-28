import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super()
  }
  render() {

    return (
      <div>
        {this.props.todos.map((task) => {
          return <Todo 
            key={task.id} 
            todo={task}
            strikeTodo={this.props.strikeTodo}
            />
        })}
        {this.props.todos.length > 0 ? <button onClick={
          this.props.clearCompleted}>Clear completed</button> : null
        } 
      </div>
    )
  }
}

export default TodoList;
