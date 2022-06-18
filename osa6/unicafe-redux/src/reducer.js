import { createStore } from 'redux'

const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return {...state, good: state.good + 1}
    case 'OK':
      return {...state, ok: state.ok + 1}
    case 'BAD':
      return {...state, bad: state.bad + 1}
    case 'ZERO':
      return initialState
    default: return initialState
  }
  
}

const store = createStore(counterReducer)
console.log(store.getState())
store.dispatch({type: 'GOOD'})
store.dispatch({type: 'GOOD'})
store.dispatch({type: 'OK'})
console.log(store.getState())
store.dispatch({type: 'ZERO'})
console.log(store.getState())
store.dispatch({type: 'BAD'})
store.dispatch({type: 'GOOD'})
console.log(store.getState())


export default counterReducer