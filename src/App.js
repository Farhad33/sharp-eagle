import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'

import addTodo from './actions/todos'

class App extends Component {
  addTodo() {
    this.props.dispatch( addTodo( 'This is a todo' ))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="#" onClick={this.addTodo.bind(this)}>Add</a>
        <div>
          {this.props.todos.map( (todo, index) => <div key={`todo-${index}`}>{todo.title}</div>)}
        </div>
      </div>
    )
  }
}

export default connect( state => state )( App )