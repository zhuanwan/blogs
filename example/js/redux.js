function createStore(reducer, initState) {
  let state = initState
  const listeners = []

  function subscribe(listener) {
    listeners.push(listener)
  }

  function dispatch(action) {
    state = reducer(state, action)
    for (const listener of listeners) {
      listener()
    }
  }

  function getState() {
    return state
  }

  dispatch({
    type: Symbol()
  })

  return {
    subscribe,
    dispatch,
    getState,
  }
}
function countReducer(state, action) {
  if (!state) {
    state = {
      count: 0
    }
  }
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

function infoReducer(state, action) {
  if (!state) {
    state = {
      name: '',
      description: ''
    }
  }
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.description
      }
    default:
      return state;
  }
}

function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers)
  
  return function combination(state, action) {
    const nextState = {}
    for (let i = 0; i < reducerKeys.length; i+=1) {
      const key = reducerKeys[i]
      const reducer = reducers[key]

      const previousStateForKey = state?.[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      nextState[key] = nextStateForKey
    }
    return nextState
  }
}
const reducer = combineReducers({
  counter: countReducer,
  info: infoReducer
})
let store = createStore(reducer)
console.log(store.getState())

const next = store.dispatch

store.dispatch = (action) => {
  console.log('11111', store.getState())
  next(action)
  console.log('2222', store.getState())
}

store.dispatch({
  type: 'INCREMENT'
})