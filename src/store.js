import { createStore } from 'redux'
import rootReducer from './reducers'
import  {
  addTodoItem,
} from './actions'

const store = createStore(rootReducer)

console.log(store.getState())

store.dispatch(addTodoItem('test'))
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

//unsubscribe()

export default store