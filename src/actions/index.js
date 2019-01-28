import * as types from './actionTypes'

let nextTodoId = 0

export const addTodoItem = text => ({
  type: types.ADD_TODO_ITEM,
  id: nextTodoId ++,
  text
})

export const toggleTodoItem = id => ({
  type: types.toggleTodoItem,
  id
})

export const setFilter = filter => ({
  type: types.SET_FILTER,
  filter
})

export const setTodoItemText = text => ({
  type: types.setTodoItemText,
  text
})