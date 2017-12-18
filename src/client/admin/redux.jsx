import { createStore } from 'redux';

/*const createStore = (reducer) => {
  let state = reducer(undefined, {});
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  return { getState, dispatch, subscribe }
}*/

const confirmationMiddleware = stroe => next => action => {
  if(confirm('Are you sure ?')){
    next(action)
  }

  return false;
}

const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);
console.log(store.getState());

const render = () => {
  document.getElementById('redux').innerText = store.getState();
}

store.subscribe(() => { console.log(store.getState()) })

let unsubscribe = store.subscribe(render);

render();

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});

unsubscribe()

console.log('unsubscribed!')