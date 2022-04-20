import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardServices from './CardServices';

function Services() {
  return (
    <Container fluid="md">
      <Row>
        <Col id="services-title">
          <h1>Nossos Serviços</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardServices
            title="Rede na piscina"
            image="https://github.com/HigorAnjos/talismareactapp/blob/main/src/images/pcina.jpg"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
