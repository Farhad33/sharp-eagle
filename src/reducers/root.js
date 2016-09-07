import { ADD_TODO } from '../actions/todos'

const DEFAULT_STATE = {
  todos: [{ title: 'espn', completed: false }, { title: 'hi', completed: true }]
}

const root = (state=DEFAULT_STATE, action) => {
  console.log( action, state )

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