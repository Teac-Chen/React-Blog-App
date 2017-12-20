import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import routers from 'routers';

console.log(routers);

class App extends React.Component {
  render(){
    return (
      <BrowserRouter basename="/admin">
        <div>
          {routers.map((router, index) => <div key={index}><Link to={router.url}>{router.name}</Link></div>)}
          <hr/>
          <div>
            {routers.map((router, index) => router.default ? 
              <Route key={index} exact path={router.url} component={router.component} /> :
              <Route key={index} path={router.url} component={router.component} />
            )}
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))