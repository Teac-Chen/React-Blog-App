import React from 'react';

// 展示组件
class CommentList extends React.Component {
  constructor(props){
    super(props)
  }

  renderComment({body, author}, index){
    return <li key={index}>{body}-{author}</li>
  }

  render(){
    return <ul>{this.props.comments.map(this.renderComment)}</ul>
  }
}


// 容器组件
export class CommentListContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      comments: []
    }
  }

  componentDidMount(){
    this.setState({
      comments: [{
        body: '啊',
        author: 'a'
      },{
        body: '吧',
        author: 'b'
      },{
        body: '才',
        author: 'c'
      }]
    })
  }

  render(){
    return <CommentList comments={this.state.comments} />
  }
}

// 有状态组件
class StatefulLink extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active: false
    }
  }

  handleClick(){
    this.setState({
      active: !this.state.active
    })
  }

  render(){
    return <a style={{color: this.state.active ? 'red' : 'black'}} onClick={this.handleClick.bind(this)}>Stateful Link</a>
  }
}

// 无状态组件
class StatelessLink extends React.Component {
  constructor(props){
    super(props)
  }
  handleClick(){
    this.props.handleClick(this.props.router)
  }
  render(){
    const active = this.props.activeRouter === this.props.router
    return (
      <li>
        <a style={{color: active ? 'red' : 'black'}} onClick={this.handleClick.bind(this)}>Stateless Link</a>
      </li>
    )
  }
}

export class Nav extends React.Component {
  constructor(){
    super()
    this.state = {
      activeRouter: 'home'
    }
  }
  handleSwitch(router){
    this.setState({
      activeRouter: router
    })
  }
  render(){
    return (
      <ul>
        <StatelessLink activeRouter={this.state.activeRouter} router='home' handleClick={this.handleSwitch.bind(this)} />
        <StatelessLink activeRouter={this.state.activeRouter} router='blog' handleClick={this.handleSwitch.bind(this)} />
        <StatelessLink activeRouter={this.state.activeRouter} router='about' handleClick={this.handleSwitch.bind(this)} />
      </ul>
    )
  }
}

export class ControlledInput extends React.Component {
  constructor(){
    super()
    this.state = {
      value: 'Please type here...'
    }
  }

  handleChange(event){
    console.log('Controlled change:', event.target.value)
    this.setState({value: event.target.value})
  }

  render(){
    return (
      <label>
        Controlled Component:
        <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
      </label>
    )
  }
}

export class UncontrolledInput extends React.Component {
  constructor(){
    super()
  }

  handleChange(){
    console.log('Uncontrolled change:', this.input.value)
  }

  render(){
    return (
      <label>
        Uncontrolled Component:
        <input type="text" defaultValue='Please type here...' ref={(input) => this.input = input} onChange={() => this.handleChange()} />
      </label>
    )
  }
}