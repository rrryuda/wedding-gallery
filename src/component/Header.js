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
      <span onClick={gallery}>갤러리</span>
      <span onClick={map}>오시는길</span>
      <span onClick={contact}>연락처</span>
    </header>
  );
}

export default Header;