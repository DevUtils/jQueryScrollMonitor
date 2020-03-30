import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './style.css';

export default class Header extends React.Component {
  render(){
  return (
    <Jumbotron className="jumbotron">
      <h1>jQuery Scroll Monitor</h1>
      <p>
        Monitor browser scroll in percentage
      </p>
      <p>
        <Button href="https://github.com/DevUtils/jQueryScrollMonitor/archive/master.zip" variant="primary">Download</Button>
      </p>
    </Jumbotron>)
  }
}