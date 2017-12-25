import React from 'react';
import { Popover, Icon, Tabs, Badge, Spin } from 'antd';

import styles from './index.scss'

class Notice extends React.Component {
  constructor(props){
    super(props)
  }

  onPopupVisibleChange(){
    console.log(this.props)
  }

  render(){
    const { count } = this.props;
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    )
    const trigger = (
      <Badge count={count}>
        <Icon type="bell" className={styles.icon} />
      </Badge>
    )

    return (
      <Popover
        placement="bottomRight"
        content={content}
        trigger="click"
        arrowPointAtCenter
        onVisibleChange={() => this.onPopupVisibleChange()}
      >
        {trigger}
      </Popover>
    )
  }
}

export default Notice
