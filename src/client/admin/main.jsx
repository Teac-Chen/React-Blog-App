import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import CommentListContainer from './views/Lesson2_2';

const title = <h1>React Title</h1>

class App extends React.Component{
  render() {
    return (
      <div>
        {title}
        <Button>Hello World!</Button>
        <CommentListContainer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))