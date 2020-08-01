import React from 'react';
import { FooterBase, MyLogo } from './styles';
import Logo from '../../assets/Logo.svg'


function Footer() {
  return (
    <FooterBase>
      <a target='_blank' rel=' noopener noreferrer' href="https://www.google.com">
        <MyLogo src={Logo} alt="MSpilari Logo" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
