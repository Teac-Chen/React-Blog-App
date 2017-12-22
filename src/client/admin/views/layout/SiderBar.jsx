import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
let selectedKeys = [];

class SiderBar extends React.Component {
  constructor(props){
    super(props)
    selectedKeys = this.getCurrentMenuSelectedKeys()
  }

  getCurrentMenuSelectedKeys(props) {
    const { location: { pathname } } = props || this.props;
    const keys = pathname.split('/').slice(2);
    if (keys.length === 1 && keys[0] === '') {
      return ['home'];
    }
    return keys;
  }

  render(){
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed} >
        <div className='logo' />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={selectedKeys}>
          {this.props.routers.map((router, index) => (
            <Menu.Item key={router.key}>
              <Link key={index} to={router.url}>
                <Icon type={router.icon} />
                <span>{router.name}</span>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    )
  }
}

export default SiderBar