import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

function Header() {
  return (
    <div className="jumbotron">
      <h1>jQuery Scroll Monitor</h1>
      <p>
        Monitor browser scroll in percentage
      </p>
      <p>
        <Button href="https://github.com/DevUtils/jQueryScrollMonitor/archive/master.zip" variant="primary">Download</Button>
      </p>
    </div>
  )
}

export default Header;
