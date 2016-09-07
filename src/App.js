import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

import Todo from './Todo'

import addTodo from './actions/todos'

class App extends Component {
  addTodo() {
    this.props.dispatch( addTodo( 'This is a todo' ))
  }

  todoItems() {
    const { todos } = this.props

    return todos.map( (todo, index) =>
      <Todo key={`todo-${index}`} {...todo} />
    )
  }

  render() {
    console.log( this.props )
    return (
      <div className="learn">
        <section className="todoapp">

          <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" value="" />
          </header>


          <section className="main">
            <a href="#" onClick={this.addTodo.bind(this)}>Add</a>
            <input className="toggle-all" type="checkbox" />
            <ul className="todo-list">
              {this.todoItems()}
            </ul>
          </section>


          <footer className="footer">
            <span className="todo-count">
              <strong>0</strong>
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