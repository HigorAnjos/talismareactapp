import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide2 from '../images/Rede-de-protecao.jpg';

function Carrousel() {
  return (
    <div>
      <div id="mk-pai">
        <div id="mk">
          <h1>Redes de Proteção</h1>
          <p>Proporcionar a sua segurança e de seus familiares é nosso compromisso.</p>
        </div>
        <Carousel variant="dark">
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
