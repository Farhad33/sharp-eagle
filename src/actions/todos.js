export const ACTIVE = 'active'
export const COMPLETED = 'completed'

export const ADD_TODO = 'add_todo'

const addTodo = title => {
  return {
    type: ADD_TODO,
    title,
    status: ACTIVE
  }
}

export default addTodo 