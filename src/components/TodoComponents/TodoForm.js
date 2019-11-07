import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      newTodo: '',
    }
  }

  changeHandler = (e) => { //sets input to state
    this.setState({
      newTodo: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.newTodo)
    this.setState({newTodo: ''}) //resets form
  }

  render() {
    return (
      <div className='form-container'>
      <form className='addForm ' onSubmit={this.handleSubmit}>
        <label htmlFor='todoitem'>
          <input
            className='input'
            type='text'
            name='todoitem'
            value={this.state.newTodo}
            onChange={this.changeHandler}
          />
        </label>
        <button type='submit' className='add-button button'>Add</button>
      </form>
      {this.props.todos.length > 0 ? <button onClick={
        this.props.clearCompleted} className='button'>Clear completed</button> : null} 
      </div>
    )
  }
}

export default TodoForm;