import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    console.log('this.props.todos', this.props.todos)
    return (
      <div>
        {this.props.todos.map((todo) => {
          return <Todo 
            key={todo.id} 
            todo={todo.name}
            />
        })}
        
      </div>
    )
  }

}

export default TodoList;
