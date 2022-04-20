import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import pcina from '../images/pcina-700.jpg';
import apartment from '../images/telaAp.jpeg';
import sport from '../images/quadra.jpeg';

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

      <div id="coverd-card-services" className="bg-0">
        <div id="card-text">
          <h1>Rede na piscina</h1>
          <p>
            A Nick Redes de Proteção vem trabalhando com telas defensivas e redes defensivas, garantindo e oferecendo
            aos seus clientes solidez e alta inovação na produção de seu material e envolvimento com a situação,
            incluindo mão de obra própria. específico, qualificado e preparado, quando você realmente deseja uma Pool
            Cover Net e administrações confiáveis e de qualidade, contate os especialistas da Nick Redes, temos custos
            implacáveis e assistência fenomenal.
          </p>
          <div>
            <Button variant="success">
              <i className="fa-brands fa-whatsapp"></i> Solicite seu orçamento
            </Button>
          </div>
        </div>
        <div id="card-img">
          <img src={pcina} alt="pscina com tela" width="600" height="450" />
        </div>
      </div>

      <div id="coverd-card-services">
        <div id="card-img">
          <img src={apartment} alt="pscina com tela" width="600" height="450" />
        </div>
        <div id="card-text">
          <h1>Redes para apartamento</h1>
          <p>Trabalhamos com o melhor item de Goiânia para garantir a você total segurança e satisfação.</p>
          <div>
            <Button variant="success">
              <i className="fa-brands fa-whatsapp"></i> Solicite seu orçamento
            </Button>
          </div>
        </div>
      </div>

      <div id="coverd-card-services" className="bg-1">
        <div id="card-text">
          <h1>Redes para quadras</h1>
          <p>
            A Nick Redes de Proteção vem trabalhando com telas defensivas e redes defensivas, garantindo e oferecendo
            aos seus clientes solidez e alta inovação na produção de seu material e envolvimento com a situação,
            incluindo mão de obra própria.
          </p>
          <div>
            <Button variant="success">
              <i className="fa-brands fa-whatsapp"></i> Solicite seu orçamento
            </Button>
          </div>
        </div>
        <div id="card-img">
          <img src={sport} alt="pscina com tela" width="600" height="450" />
        </div>
      </div>
    </>
  );
}

export default Services;
