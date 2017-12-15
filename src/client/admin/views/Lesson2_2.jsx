import React from 'react';

class CommentList extends React.Component {
  constructor(props){
    super(props)
  }

  renderComment({body, author}){
    return <li>{body}-{author}</li>
  }

  render(){
    return <ul>{this.props.comments.map(this.renderComment)}</ul>
  }
}

class CommentListContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      comments: []
    }
  }

  componentDidMount(){
    this.setState({
      comments: [{
        body: '啊',
        author: 'a'
      },{
        body: '吧',
        author: 'b'
      },{
        body: '才',
        author: 'c'
      }]
    })
  }

  render(){
    return <CommentList comments={this.state.comments} />
  }
}

export default CommentListContainer