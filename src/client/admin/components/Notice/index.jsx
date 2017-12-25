import React from 'react';
import { Popover, Icon, Tabs, Badge, Spin } from 'antd';

import styles from './index.scss';

class Notice extends React.Component {
  constructor(props){
    super(props)
  }

  onPopupVisibleChange(){
    console.log(this.props)
  }

  getNoticeList(){
    const { children, loading } = this.props;

    if(!children){
      return null;
    }
  }

  render(){
    const { count } = this.props;
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    )

    return (
      <Popover
        placement="bottomRight"
        content={content}
        trigger="click"
        arrowPointAtCenter
        onVisibleChange={() => this.onPopupVisibleChange()}
      >
        <Badge count={count}>
          <Icon type="bell" className={styles.icon} />
        </Badge>
      </Popover>
    )
  }
}

export default Notice
