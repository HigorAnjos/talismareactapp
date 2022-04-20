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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum
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
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum
          </p>
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum
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
