import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

import Header from './components/Header'
import Todo from './components/Todo'

import { addTodo, toggleTodo, deleteTodo } from './actions/todos'

class App extends Component {
  createTodo( title ) {
    this.props.dispatch( addTodo( title ) )
  }

  toggleTodo( id ) {
    this.props.dispatch( toggleTodo( id ))
  }

  deleteTodo( id ) {
    this.props.dispatch( deleteTodo( id ))
  }

  todoItems() {
    const { todos } = this.props

    return todos.map( (todo, index) =>
      <Todo key={`todo-${index}`} {...todo} 
        toggleTodo={this.toggleTodo.bind(this)} 
        deleteTodo={this.deleteTodo.bind(this)} />
    )
  }

  render() {
    return (
      <div className="learn">
        <section className="todoapp">

          <Header addTodo={this.createTodo.bind(this)} />

          <section className="main">
            <input className="toggle-all" type="checkbox" />
            <ul className="todo-list">
              {this.todoItems()}
            </ul>
          </section>


          <footer className="footer">
            <span className="todo-count">
              <strong>{this.props.todos.length}</strong>
              <span> </span>
              <span>items </span>
              <span >left</span>
            </span>
            <ul className="filters">
              <li>
                <a href="#/" className="selected">All</a>
              </li>
              <span></span>
              <li>
                <a href="#/active" className="">Active</a>
              </li>
              <span></span>
              <li>
                <a href="#/completed" className="">Completed</a>
              </li>
            </ul>
              <button className="clear-completed">Clear completed</button>
          </footer>

        </section>

      </div>
    )
  }
}

export default connect( state => state )( App )