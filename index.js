// Sample Actions
{
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'Learn Redux',
    complete: false,
  }
}

{
  type: 'REMOVE_TODO',
  id: 0,
}

{
  type: 'TOGGLE_TODO',
  id: 0,
}

{
  type: 'ADD_GOAL',
  goal: {
    id: 0,
    name: 'Run a Marathon'
  }
}

{
  type: 'REMOVE_GOAL',
  id: 0
}


/// Reducer Function (must be pure function)
// take care of the todos
function todos(state = [], action) {
  switch(action.type){
    case 'ADD_TODO':
      return state.concat([action.todo])
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id != action.id)
    case 'TOGGLE_TODO':
      return state.map((todo) =>{
        return todo.id !== action.id ? todo :
            Object.assign({},todo, {complete: !todo.complete})
      })
    default:
      return state
  }
}
// take care of the goals
function goals(state = [], action){
  switch(action.type){
    case 'ADD_GOAL':
      return state.concat([action.goal])
    case 'REMOVE_GOAL':
      return state.filter((goal) => goal.id !== action.id)
    default:
      return state
  }
}

//Store
function createStore(reducer) {

  // The store should have four parts
  // 1. The state
  // 2. A way to get the state.
  // 3. A way Listen to changes on the state.
  // 4. A way to Update the state

  let state
  let listeners = []

  const getState = () => state
  const subscribe = (listener) => {
    listeners.push(listener)

    return () => listeners.filter((l) => l !== listener )
  }

  const dispatch = (action) => {
      state = reducer(state, action)
      listeners.forEach((listener) => listener())
  }

  return {
    getState,
    subscribe,
    dispatch
  }
}

/// Process example
// define store
const store = createStore(todos)
//get state
store.getState()
// listene to the changes of the state/ subscribe
const unsubscribe = store.subscribe(() => {
  console.log('The new state is', store.getState())
})

 //call dispatch function where we send action
 store.dispatch(
   {
     type: 'ADD_TODO',
     todo: {
       id: 0,
       name: 'Learn Redux',
       complete: false,
     }
   }
 )

 store.dispatch({
  type: 'REMOVE_TODO',
  id: 1
})

  store.dispatch({
    type: 'TOGGLE_TODO',
    id: 0
  })
