import React from 'react';
import { string } from 'prop-types';
function CardServices({ title, image }) {
  return (
    <div id="coverd-card-services">
      <div>
        <h1>{title}</h1>
        <p>
          A Nick Redes de Proteção vem trabalhando com telas defensivas e redes defensivas, garantindo e oferecendo aos
          seus clientes solidez e alta inovação na produção de seu material e envolvimento com a situação, incluindo mão
          de obra própria. específico, qualificado e preparado, quando você realmente deseja uma Pool Cover Net e
          administrações confiáveis e de qualidade, contate os especialistas da Nick Redes, temos custos implacáveis e
          assistência fenomenal.
        </p>
      </div>
      <div>
        <img src={image} alt="pscina com tela" />
      </div>
    </div>
  );
}

CardServices.defaultProps = {
  image: '',
};

CardServices.propTypes = {
  title: string.isRequired,
  image: string,
};

export default CardServices;
