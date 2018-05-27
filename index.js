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


//Store
function createStore() {

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

  }

  return {
    getState,
    subscribe,
    dispatch
  }
}
