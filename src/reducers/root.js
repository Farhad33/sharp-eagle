import {
  ADD_TODO, TOGGLE_TODO, DELETE_TODO, CHANGE_FILTER, EDIT_TITLE, CLEAR_COMPLETED
} from '../actions/todos'

import addTodo from './addTodo'
import toggleTodo from './toggleTodo'
import deleteTodo from './deleteTodo'
import changeFilter from './changeFilter'
import editTitle from './editTitle'
import clearCompleted from './clearCompleted'

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
    case CHANGE_FILTER:
      return changeFilter( state, action )
    case EDIT_TITLE:
      return editTitle( state, action )
    case CLEAR_COMPLETED:
      return clearCompleted( state, action )
    default:
      return state
  }
}

export default root
