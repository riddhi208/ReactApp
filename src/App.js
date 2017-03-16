import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import logo from '../public/image/twitter.png';
import '../public/css/App.css';
import '../public/css/cover.css';


class App extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <Link to="/"><img src={logo} className="logo" alt="logo"/></Link>
          <Link to="/login" className="login">Login</Link>
          <Link to="/signup" className="login">SignUp</Link>
        </div>
        {this.props.children}
      </div>

    );
  }
}

export default App;
