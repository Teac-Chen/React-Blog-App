import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

class SiderBar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed} >
        <div className='logo' />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
          {this.props.routers.map((router, index) => (
            <Menu.Item key={index}>
              <Icon type="user" />
              <span>{router.name}</span>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    )
  }
}

export default SiderBar