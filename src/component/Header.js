// React
import React from 'react';
import { useLenis } from '@studio-freight/react-lenis';

// Component
import Section from './Section';

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
    <Section config="nav -header">
      <span onClick={gallery}>갤러리</span>
      <span onClick={map}>오시는길</span>
      <span onClick={contact}>연락처</span>
    </Section>
  );
}

export default Header;