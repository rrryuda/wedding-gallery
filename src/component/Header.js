// React
import React from 'react';
import { useLenis } from '@studio-freight/react-lenis';

// CSS
import './css/Nav.css';

// Header Component
const Header = () => {

  const lenis = useLenis()

  const gallery = () => {
    lenis.scrollTo('#gallery');
  };

  const map = () => {
    lenis.scrollTo('#map');
  };

  const contact = () => {
    lenis.scrollTo('#contact');
  };

  return (
    <header>
      <a href="#gallery" onClick={gallery}>갤러리</a>
      <a href="#map" onClick={map}>오시는길</a>
      <a href="#contact" onClick={contact}>연락처</a>
    </header>
  );
}

export default Header;