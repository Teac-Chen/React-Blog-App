import { createStore } from 'redux';

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
  document.body.innerText = store.getState();
}

store.subscribe(() => { console.log(store.getState()) })

let unsubscribe = store.subscribe(render);

render();

store.dispath({type: 'INCREMENT'});
store.dispath({type: 'INCREMENT'});
store.dispath({type: 'DECREMENT'});

unsubscribe()

console.log('unsubscribed!')