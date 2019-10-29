import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super()
  }
  render() {

    return (
      <div className='list'>
        {this.props.todos.map((task) => {
          return <Todo 
            key={task.id} 
            todo={task}
            strikeTodo={this.props.strikeTodo}
            />
        })}
        
      </div>
    )
  }
}

export default TodoList;
