import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import routers from 'routers';

import { Layout, Menu, Icon } from 'antd';
import SiderBar from 'views/layout/SiderBar';
import Header from 'views/layout/Header';
import Content from 'views/layout/Content';

import 'styles/main.scss';

/*class App extends React.Component {
  render(){
    return (
      <BrowserRouter basename="/admin">
        <div>
          {routers.map((router, index) => <Link key={index} to={router.url}>{router.name}</Link>)}
          <hr/>
          {routers.map((router, index) => router.default ? 
            <Route key={index} exact path={router.url} component={router.component} /> :
            <Route key={index} path={router.url} component={router.component} />
          )}
        </div>
      </BrowserRouter>
    )
  }
}*/

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      collapsed: false
    }
  }

  toggle(){
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render(){
    return (
      <Layout>
        <SiderBar collapsed={this.state.collapsed} routers={routers} />
        <Layout>
          <Header collapsed={this.state.collapsed} handleClick={() => this.toggle()} />
          <Content routers={routers} />
        </Layout>
      </Layout>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))