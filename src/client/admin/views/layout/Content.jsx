import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import styles from './index.scss';

const { Content } = Layout;

class ContentBar extends React.Component {
  constructor(porps){
    super(porps)
  }

  render(){
    return (
      <Content className={styles.content}>
        {this.props.routers.map((router, index) => router.default ? 
          <Route key={index} exact path={router.url} component={router.component} /> :
          <Route key={index} path={router.url} component={router.component} />
        )}
      </Content>
    )
  }
}

export default ContentBar