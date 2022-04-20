import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import slide2 from '../images/Rede-de-protecao.jpg';
import slide1 from '../images/slide-rede-ap.jpg';

function Carrousel() {
  return (
    <div>
      <div id="mk-pai">
        <div id="mk">
          <h1>Redes de Proteção</h1>
          <h4>Proporcionar a sua segurança e de seus familiares é nosso compromisso.</h4>
          <div>
            <Button variant="success">
              <i className="fa-brands fa-whatsapp"></i> Solicite seu orçamento
            </Button>
          </div>
        </div>
        <Carousel variant="dark">
          <Carousel.Item>
            <div id="bg-dark">
              <img
                id="carrosel-img"
                className="d-block w-100"
                width="100%"
                height="700"
                src={slide1}
                alt="Second slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div id="bg-dark">
              <img
                id="carrosel-img"
                className="d-block w-100"
                width="100%"
                height="700"
                src={slide2}
                alt="Second slide"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Carrousel;
