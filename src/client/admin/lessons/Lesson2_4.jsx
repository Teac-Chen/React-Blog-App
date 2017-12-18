import React from 'react';
import axios from 'axios';

const RedditList = props => (
  <div>
    <h1>{`/r/${props.subreddit}`}</h1>
    <ul>
      {props.posts.map(post => 
        <li key={post.id}>
          <a href={post.url}>{post.title}</a>
        </li>
      )}
    </ul>
  </div>
)

export class RedditFetch extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  fetchFromApi(){
    this.serverRequest = axios.get(`https://www.reddit.com/r/${this.props.subreddit}.json`).then(res => {
      const posts = res.data.data.children.map(obj => obj.data)
      this.setState({
        posts
      })
    })
  }

  componentDidMount(){
    this.fetchFromApi()
  }

  componentWillUnmount(){
    this.serverRequest.abort()
  }

  render(){
    return <RedditList subreddit={this.props.subreddit} posts={this.state.posts} />
  }
}