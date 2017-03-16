import React, { Component } from 'react';
import '../public/css/login.css';
import { Button, Carousel, Panel } from 'react-bootstrap';


class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pwd:'',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleSubmit(event) {
    alert('A email was submitted: ' + this.state.email +'\n'+ 'A password was submitted: ' + this.state.pwd);
    event.preventDefault();
  }

  handleInputChange(event) {
    console.log("---->", this.state);
    const target = event.target;
    const name = target.name;
    console.log("333---->", this.state, name);

    this.setState({
      [name]: event.target.value
    });

    console.log("state---->", this.state);
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <header>Login Here!!</header>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            onChange={this.handleInputChange}
            required
          />
          <div className="help">At least 6 character</div>
          <label>Password :</label>
          <input
            type="password"
            name="pwd"
            onChange={this.handleInputChange}
            required
          />
          <div className="help">Use upper and lowercase lettes as well</div>
          <br/>
          <Button name="submit" type="submit" bsStyle="success" block>Submit</Button>
          <br/>
        </form>
        {/*<div>
          My email is {this.state.email}.
          My email is {this.state.pwd}.
        </div>*/}
        <footer className="footer">
          <div className="container">
            <p className="text-muted">@2017 designed By Riddhi</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default login;
