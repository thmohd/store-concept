// The store should have four parts
// 1. The state
// 2. A way to get the state.
// 3. A way Listen to changes on the state.
// 4. A way to Update the state

function createStore() {

  let state
  let listeners = []

  const getState = () => state
  const subscribe = (listener) => {
    listeners.push(listener)
  }

  return {
    getState,
    subscribe
  }
}
