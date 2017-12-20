import React from 'react';
import { Layout, Icon } from 'antd';

const { Header } = Layout;

class HeaderBar extends React.Component {
  constructor(porps){
    super(porps)
  }

  render(){
    return (
      <Header style={{background: '#fff', padding: 0}}>
        <Icon
          className='triggerIcon'
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={() => this.props.handleClick()}
        />
      </Header>
    )
  }
}

export default HeaderBar