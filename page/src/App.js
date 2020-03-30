import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap.dark.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from "./Components/Header";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Position from './Components/Position';
import code from './config/code';
import './App.css';

class App extends React.Component {
  state = { code };
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <Row>
            <Col>
              <h3>Usage</h3>
              <SyntaxHighlighter
                language="javascript"
                style={atelierForestDark}
                wrapLines={false}
                showLineNumbers={true}
              >
                {this.state.code}
              </SyntaxHighlighter>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </Col>
          </Row>
        </Container>
        <Position/>
      </div>
    );
  }
}

export default App;
