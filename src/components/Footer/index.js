import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado por <a href="https://github.com/leofalves">Leo</a> durante a quarentena através da
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a> com Mario Souto, Juliana Negreiros e Marco Bruno
      </p>
    </FooterBase>
  );
}

export default Footer;
