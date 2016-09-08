import { ALL, ACTIVE, COMPLETED } from '../actions/todos'

const DEFAULT_STATE = {
  statusForToggle: COMPLETED,
  currentFilter: ALL,
  nextId: 3,
  todos: [{ id: 1, title: 'espn', status: ACTIVE }, { id: 2, title: 'hi', status: COMPLETED }]
}

export default DEFAULT_STATE
