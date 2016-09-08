import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

import Header from './components/Header'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

import {
  addTodo, toggleTodo, deleteTodo, changeFilter, editTitle, ALL
} from './actions/todos'

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

  changeFilter( filter ) {
    this.props.dispatch( changeFilter( filter ))
  }

  editTitle( id, title ) {
    this.props.dispatch( editTitle( id, title ))
  }

  render() {
    const { todos: allTodos, currentFilter } = this.props
    const todos = allTodos.filter( todo =>
      currentFilter === ALL || todo.status === currentFilter
    )

    return (
      <div className="learn">
        <section className="todoapp">
          <Header addTodo={this.createTodo.bind(this)} />

          <TodoList todos={todos}
            editTitle={this.editTitle.bind(this)}
            toggleTodo={this.toggleTodo.bind(this)}
            deleteTodo={this.deleteTodo.bind(this)} />

          <Footer count={todos.length}
            currentFilter={currentFilter}
            changeFilter={this.changeFilter.bind(this)} />
        </section>
      </div>
    )
  }
}

export default connect( state => state )( App )
