import { createStore } from 'redux'
import rootReducer from './reducers'
import  {
  addTodoItem,
} from './actions'

const store = createStore(rootReducer)

console.log(store.getState())


const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addTodoItem('test'))

unsubscribe()

export default store