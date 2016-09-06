import { ADD_TODO } from '../actions/todos'

const DEFAULT_STATE = {
  todos: []
}

const root = (state=DEFAULT_STATE, action) => {
  switch( action.type ) {
    case ADD_TODO:
      return {
        todos: [ ...state.todos, { title: action.title, completed: false } ]
      }
    default:
      return state
  }
}

export default root