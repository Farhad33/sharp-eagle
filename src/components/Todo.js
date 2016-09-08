import React, { Component } from 'react'
import { COMPLETED } from '../actions/todos'

class Todo extends Component {
  checkHandler() {
    this.props.toggleTodo( this.props.id )
  }

  deleteHandler() {
    this.props.deleteTodo( this.props.id )
  }

  render() {
    return (
      <li className={this.props.status === COMPLETED ? 'completed' : ''}>
        <div className="view">
          <input className="toggle" 
            type="checkbox" 
            onChange={this.checkHandler.bind(this)} 
            checked={this.props.status === COMPLETED} />
          <label>{this.props.title}</label>
          <button className="destroy" onClick={this.deleteHandler.bind(this)}></button>
        </div>
      </li>  
    )
  }
}
 
export default Todo