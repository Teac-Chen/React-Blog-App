import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import routers from 'routers';

import { Layout } from 'antd';
import SiderBar from './SiderBar';
import Header from './Header';
import Content from './Content';

class LayoutBar extends React.Component {
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
      <BrowserRouter basename="/admin">
        <Layout style={{height: '100vh'}}>
          <SiderBar collapsed={this.state.collapsed} routers={routers} location={location} />
          <Layout>
            <Header collapsed={this.state.collapsed} handleClick={() => this.toggle()} />
            <Content routers={routers} />
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default LayoutBar