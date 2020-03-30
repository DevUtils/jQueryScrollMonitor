import React from 'react';
import Toast from 'react-bootstrap/Toast';

export default class Footer extends React.Component {
  render(){
  return (
    <Toast style={{ position: 'fixed', bottom: 10, left: 10, }}>
      <Toast.Header closeButton={false} style={{'background-color': '#007eff', 'color': '#fff'}}>
        <strong className="mr-auto">Scrollbar Position</strong>
      </Toast.Header>
      <Toast.Body><span id="frPosition">0</span>%</Toast.Body>
    </Toast>
    );
  }
}