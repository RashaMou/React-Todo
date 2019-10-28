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
      <form onSubmit={this.handleSubmit}>
        <label></label>
        <input
          type='text'
          name='todoitem'
          value={this.state.newTodo}
          onChange={this.changeHandler}
        />
        <button type='submit'>Add</button>
      </form>
    )
  }
}

export default TodoForm;