import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

class ContentBar extends React.Component {
  constructor(porps){
    super(porps)
  }

  render(){
    return (
      <Content>
        Content
      </Content>
    )
  }
}

export default ContentBar