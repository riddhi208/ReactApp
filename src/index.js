import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import cover from './cover';
import login from './login';
import signup from './signup';
import '../public/css/index.css';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute path="/cover" component={cover}/>
      <Route path="/login" component={login}/>
      <Route path="/signup" component={signup}/>
    </Route>
  </Router>
  ),document.getElementById('root'));
