import React, { Component } from 'react'

import addTodo from './actions/todos'

class Todo extends Component {
  addTodo() {
    this.props.dispatch( addTodo( 'This is a todo' ))
  }

  render() {
    return (
      <div className="Todo">
            
      </div>
    )
  }
}

export default Todo