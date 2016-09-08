export const ALL = 'all'
export const ACTIVE = 'active'
export const COMPLETED = 'completed'

export const ADD_TODO = 'add_todo'
export const TOGGLE_TODO = 'toggle_todo'
export const DELETE_TODO = 'delete_todo'
export const CHANGE_FILTER = 'change_filter'

const addTodo = title => {
  return {
    type: ADD_TODO,
    title,
    status: ACTIVE
  }
}

const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

const changeFilter = filter => {
  return {
    type: CHANGE_FILTER,
    filter
  }
}

export { addTodo, toggleTodo, deleteTodo, changeFilter }
