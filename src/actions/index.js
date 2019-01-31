import * as types from './actionTypes'

let nextTodoId = 0


const fetchTodosRequest = () => ({
  type: types.FETCH_TODOS_REQUEST
})

const fetchTodosSuccess = (data) => ({
  type: types.FETCH_TODOS_SUCCESS,
  data,
})

const fetchTodosFailure = (err) => ({
  type: types.fetchTodosFailure,
  err
})

const fetchTodos = () => {

  return (dispatch) => {

    dispatch(fetchTodosRequest)

    return fetch('./api/todos.json')
      .then(response => {
        return response.json
      }).then(data => {
        dispatch(fetchTodosSuccess(data))
      }).catch(err => {
        dispatch(fetchTodosFailure(err))
      })
  }
}


export const addTodoItem = text => ({
  type: types.ADD_TODO_ITEM,
  id: nextTodoId ++,
  text
})

export const toggleTodoItem = id => ({
  type: types.TOGGLE_TODO_ITEM,
  id
})

export const setFilter = filter => ({
  type: types.SET_FILTER,
  filter
})

export const setTodoItemText = text => ({
  type: types.SET_TODO_ITEM_TEXT,
  text
})