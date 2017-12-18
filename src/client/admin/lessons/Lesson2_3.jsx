import React from 'react';

export class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }

  addOne(){
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }))
  }

  render(){
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={() => this.addOne()}>Increment</button>
      </div>
    )
  }
}

export class CurrencyConvertor extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      money: 100
    }
  }

  handleChange(event){
    this.setState({money: event.target.value})
  }

  render(){
    return (
      <div>
        <h2>{this.props.title}</h2>
        <YuanInput handleChange={(e) => this.handleChange(e)} money={this.state.money} />
        <MoneyConvertor type="美元" unit="dollar" money={this.state.money} rate={0.1453} />
        <MoneyConvertor type="日元" unit="yen" money={this.state.money} rate={16.1814} />
      </div>
    )
  }
}

class YuanInput extends React.Component {
  constructor(props){
    super(props)
  }

  handleChange(event){
    this.props.handleChange(event)
  }

  render(){
    return (
      <p>
        <label>人民币<input type="text" value={this.props.money} onChange={(e) => this.handleChange(e)} /></label>
      </p>
    )
  }
}

const MoneyConvertor = props => (
  <p>
    <label>{props.type}<input type="text" value={(props.money * props.rate).toFixed(2) + props.unit} disabled /></label>
  </p>
)