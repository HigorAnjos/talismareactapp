import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import pcina from '../images/pcina-700.jpg';

function Services() {
  return (
    <>
      <Container fluid="md">
        <Row>
          <Col id="services-title">
            <h1>Nossos Serviços</h1>
          </Col>
        </Row>
      </Container>
      <div id="coverd-card-services">
        <div id="card-text">
          <h1>Rede na piscina</h1>
          <p>
            A Nick Redes de Proteção vem trabalhando com telas defensivas e redes defensivas, garantindo e oferecendo
            aos seus clientes solidez e alta inovação na produção de seu material e envolvimento com a situação,
            incluindo mão de obra própria. específico, qualificado e preparado, quando você realmente deseja uma Pool
            Cover Net e administrações confiáveis e de qualidade, contate os especialistas da Nick Redes, temos custos
            implacáveis e assistência fenomenal.
          </p>
        </div>
        <div id="card-img">
          <img src={pcina} alt="pscina com tela" width="600" height="450" />
        </div>
      </div>
    </>
  );
}

export default Services;
