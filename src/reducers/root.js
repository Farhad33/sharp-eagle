import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/todos'

import addTodo from './addTodo'
import toggleTodo from './toggleTodo'
import deleteTodo from './deleteTodo'

import DEFAULT_STATE from './defaultState'

const root = (state=DEFAULT_STATE, action) => {
  console.log( action, state )

  switch( action.type ) {
    case ADD_TODO:
      return addTodo( state, action )
    case TOGGLE_TODO: 
      return toggleTodo( state, action )
    case DELETE_TODO:
      return deleteTodo( state, action )
    default:
      return state
  }
}

export default root