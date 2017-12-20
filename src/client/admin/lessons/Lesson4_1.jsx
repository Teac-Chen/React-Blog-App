import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export const BasicExample = () => (
  <BrowserRouter basename="/admin">
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/topic'>Topic</Link></li>
      </ul>
      <hr/>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topic" component={Topics} />
    </div>
  </BrowserRouter> 
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({match}) => (
  <div>
    <h2>Topic</h2>
    <ul>
      <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${match.url}/components`}>Components</Link></li>
      <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

const Topic = ({match}) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)