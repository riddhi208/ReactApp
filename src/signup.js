import React, { Component } from 'react';
import '../public/css/signup.css';
import { Button, Carousel, Jumbotron, ProgressBar, Panel } from 'react-bootstrap';

class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      mob: '',
      country: '',
      gender: '',
      dob: '',
      pwd:'',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }
  handleSubmit(event) {
    alert('A Name was submitted: '+this.state.name +'\n'
      + 'A email was submitted: ' + this.state.email +'\n'
      + 'A mob was submitted: ' + this.state.mob +'\n'
      + 'A country was submitted: ' + this.state.country +'\n'
      + 'A gender was submitted: ' + this.state.gender +'\n'
      + 'A dob was submitted: ' + this.state.dob +'\n'
      + 'A password was submitted: ' + this.state.pwd) +'\n';
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

          <header>Create New One!!</header>
          <label>Name :</label>
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
            minLength="3"
            required
          />
          <div className="help">At least 6 character</div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            onChange={this.handleInputChange}
            required
          />
          <div className="help">i.e. example@example.com</div>
          <label>Mobile No. :</label>
          <input
            type="text"
            name="mob"
            onChange={this.handleInputChange}
            minLength="10"
            maxLength="15"
            pattern="^\d{3}-\d{3}-\d{4}$"
            inputmode="numeric"
            required
          />
          <div className="help">Enter your valid 10 digit mobile number. i.e. (format: xxx-xxx-xxxx)</div>
          <label>Country :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select
            onChange={this.handleInputChange}
            name="country"
          >
            <option
              value="India"
              required
            >India
            </option>
            <option
              value="Pakistan"
              required>Pakistan
            </option>
            <option
              value="U.S"
              required>U.S
            </option>
            <option
              value="Australia"
              required>Australia
            </option>
          </select>
          <br/>
          <label>Gender :</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleInputChange}
            required
          />
            <a className="radioname">Male</a>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleInputChange}
            required
          />
            <a className="radioname">Female</a>
          <br/>
          <label>DOB :</label>
          <input
            type="date"
            name="dob"
            onChange={this.handleInputChange}
            className="dob"
            required
          />
          <br/>
          <label>Password :</label>
          <input
            type="password"
            name="pwd"
            onChange={this.handleInputChange}
            minLength="8"
            required
          />
          <div className="help">Use upper and lowercase lettes as well.</div>
          <Button
            name="submit"
            type="submit"
            bsStyle="success"
            block
          >Submit
          </Button>
          <br/>
        </form>

        <footer className="footer">
          <div className="container">
            <p className="text-muted">@2017 designed By Riddhi</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default signup;
