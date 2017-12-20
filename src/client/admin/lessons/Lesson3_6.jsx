import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'

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

const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <p>{value}</p>
    <button onClick={onIncrement}>INCREMENT</button>
    <button onClick={onDecrement}>DECREMENT</button>
  </div>
)

/*export class CounterContainer2 extends React.Component {
  componentDidMount(){
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  handleAction(action){
    store.dispatch(action)
  }

  render(){
    return (
      <Counter
        value={store.getState()}
        onIncrement={() => this.handleAction({type: 'INCREMENT'})}
        onDecrement={() => this.handleAction({type: 'DECREMENT'})}
      />
    )
  }
}*/

const mapStateToProps = state => ({
  value: state
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch({type: 'INCREMENT'}),
  onDecrement: () => dispatch({type: 'DECREMENT'})
})

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

store.subscribe(() => {console.log(store.getState())})

export class CounterContainer2 extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    )
  }
}