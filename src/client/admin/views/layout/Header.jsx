import React from 'react';
import { Layout, Icon, Spin, Badge, Avatar, Dropdown, Menu } from 'antd';
import Notice from 'components/Notice';

import styles from './index.scss';

const { Header } = Layout;

const menu = (
  <Menu className={styles.menu}>
    <Menu.Item key="password"><Icon type="edit"/>修改密码</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="logout"><Icon type="logout"/>退出登录</Menu.Item>
  </Menu>
);

class HeaderBar extends React.Component {
  constructor(porps){
    super(porps)
    /*this.state = {
      dropdownIcon: "down"
    }*/
  }

  /*dropdownChange(visible){
    this.setState((preState) => ({
      dropdownIcon: visible ? "up" : "down"
    }))
  }*/

  render(){
    return (
      <Header className={styles.header}>
        <Icon
          className={styles.triggerIcon}
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={() => this.props.handleClick()}
        />
        <div className={styles.right}>
          <span className={styles.tool}>
            <Notice count={13}>
              <span>1111</span>
            </Notice>
          </span>
          <span className={styles.tool}>
            <Badge count={12}>
              <Icon type="bell" className={styles.toolIcon} />
            </Badge>
          </span>
          <Dropdown overlay={menu} onVisibleChange={v => this.dropdownChange(v)}>
            <span className={`${styles.tool} ${styles.user}`}>
              <Avatar className={styles.avatar} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              Teac
              <Icon type="down" style={{marginLeft: '2px'}} />
            </span>
          </Dropdown>
        </div>
      </Header>
    )
  }
}

export default HeaderBar