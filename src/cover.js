import React, { Component } from 'react';
import '../public/css/cover.css';
import { Button, Carousel, Jumbotron } from 'react-bootstrap';

class cover extends Component {
  render() {
    return (
      <div className="cover">
        <div className="container">
          <Jumbotron>
            <h1>React world!</h1>
            <p>This is a simple hero unit, a simple style component for calling extra attention to featured content or information.</p>

          </Jumbotron>
        </div>
          <footer className="footer">
            <div className="container">
              <p className="text-muted">@2017 designed By Riddhi</p>
            </div>
          </footer>

      </div>
    );
  }
}

export default cover;
