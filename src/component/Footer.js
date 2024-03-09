// React
import React from 'react';
import { useLenis } from '@studio-freight/react-lenis';

// CSS
import './css/Nav.css';

// Footer
const Footer = () => {

  const lenis = useLenis()

  const top = () => {
    lenis.scrollTo(0);
  };

  return (
    <footer>
      <span onClick={top}>©2025</span>
    </footer>
  );
}

export default Footer;