import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import { CommentListContainer, Nav, ControlledInput, UncontrolledInput } from './lessons/Lesson2_2';
import { Counter, CurrencyConvertor } from './lessons/Lesson2_3';
import { RedditFetch } from './lessons/Lesson2_4';

import './styles/main.scss';

import './redux';

const Title = props => <h3>{props.title}</h3>

class Number extends React.Component{
  constructor(props){
    super(props)
    console.log('%cconstructor' + '%c 子组件已构造', 'font-weight:bold', 'color: blue')
  }

  componentWillMount(){
    console.group('%c React 挂在', 'color: #00d8ff')
    console.log('%ccomponentWillMount' + '%c 组件即将挂载', 'font-weight: bold', '')
  }

  componentDidMount(){
    console.log('%ccomponentDidMount' + '%c 组件已挂载', 'font-weight: bold', '')
    console.groupEnd()
  }

  componentWillReceiveProps(newProps){
    console.group('%c React Updating', 'color: green')
    console.log('%ccomponentWillReceiveProps' + '%c 组件即将接受props', 'font-weight: bold', '')
    console.log('子组件componentWillReceiveProps newProps => ', newProps.counter)
    console.log('子组件componentWillReceiveProps this.props => ', this.props.counter)
  }

  shouldComponentUpdate(newProps, newState){
    const result = true
    console.info('%cshouldComponentUpdate' + '%c 返回判断是否要更新组件' + `%c ${result}`, 'font-weight: bold', 'color: #ff3c41', 'font-weight: bold; color: #236fd4')
    if(!result) console.groupEnd()
    return result;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('%ccomponentWillUpdate' + '%c 组件即将更新', 'font-weight:bold', '')
    console.log('子组件componentWillUpdate nextProps => ', nextProps.counter)
    console.log('子组件componentWillUpdate this.props => ', this.props.counter)
  }

  componentDidUpdate(prevProps, prevState){
    console.log('%ccomponentDidUpdate' + '%c 组件已更新', 'font-weight:bold', '')
    console.log('子组件componentDidUpdate prevProps => ', prevProps.counter)
    console.log('子组件componentDidUpdate this.props => ', this.props.counter)
    console.groupEnd();
  }

  componentWillUnmount(){
    console.group('%c React Unmounting', 'color: brown')
    console.log('%ccomponentWillUnmount' + '%c 组件即将卸载', 'font-weight:bold', 'color: gray')
    console.groupEnd()
  }
  render(){
    console.log('%crender' + '%c 组件渲染中...', 'font-weight: bold', '')
    console.log('子组件render this.props => ', this.props.counter)
    return <p>{this.props.counter}</p>
  }
}

class Counters extends React.Component {
  constructor(props){
    super(props)
    console.log('%cconstructor' + '%c 父组件已构造', 'font-weight: bold', 'color: #ae63e4')
    this.state = {
      counter: 0
    }
    console.log('父组件constructor this.state => ', this.state.counter)
  }

  addOne(){
    console.log('%caddOne()' + '%c 事件处理函数触发', 'font-weight: bold', '')
    console.log('父组件addOne prevState => ', this.state.counter)
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }))
  }

  unMount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('lifecycle'))
  }

  update(){
    this.forceUpdate()
  }

  render(){
    console.log('%crender' + '%c 父组件渲染中...', 'font-weight:bold', '')
    console.log('父组件render nextState => ', this.state.counter)
    return (
      <div>
        <Number counter={this.state.counter} />
        <button onClick={() => this.addOne()}>增加</button>
        <button onClick={() => this.update()}>强制更新</button>
        <button onClick={() => this.unMount()}>卸载</button>
      </div>
    )
  }
}

class App extends React.Component{
  render() {
    return (
      <div>
        <Title title="React Title" />
        <Button>Hello World!</Button>
        <CommentListContainer />
        <Nav />
        <ControlledInput />
        <UncontrolledInput />
        <Counter />
        <CurrencyConvertor title="汇率转换" />
        <RedditFetch subreddit="reactjs" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

const render = () => ReactDOM.render(<Counters />, document.getElementById('lifecycle'))

document.getElementById('render').addEventListener('click', render)