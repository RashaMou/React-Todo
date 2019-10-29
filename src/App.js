import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  addTodo = (name) => { 
    const newTodo ={
      name: name,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  strikeTodo = (taskId) => { 
    this.setState({ 
      todos: this.state.todos.map(task => { 
        if (task.id === taskId) { 
          return {...task, completed: !task.completed} 
        } 
        else {
          return task
        }
      })   
    }) 
  }
  
  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div>
        <header>
          <h1>Do Stuff!</h1>
        </header>
        <TodoForm  
          addTodo={this.addTodo}
          todos={this.state.todos}
          clearCompleted={this.clearCompleted}
        />
        <TodoList 
          todos={this.state.todos} 
          strikeTodo={this.strikeTodo}
        />
      </div>
    );
  }
}

export default App;
