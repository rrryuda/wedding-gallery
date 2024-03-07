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
      <a onClick={top}>©2025 Shawn</a>
    </footer>
  );
}

export default Footer;