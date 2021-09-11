import React from 'react';
import { FooterBase, MyLogo } from './styles';
import Logo from '../../assets/Logo.svg'


function Footer() {
  return (
    <FooterBase>
      <a target='_blank' rel=' noopener noreferrer' href="https://mspilariportfolio.vercel.app/">
        <MyLogo src={Logo} alt="MSpilari Logo" />
      </a>
    </FooterBase>
  );
}

export default Footer;
