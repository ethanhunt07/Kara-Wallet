import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Dashboard extends Component <Props> {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Container>
          <header>
            <h2>Karacoin Wallet</h2>
          </header>
          <Row>
            <Col>
              Page Loaded!
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
