// React
import React from 'react';
import { useLenis } from '@studio-freight/react-lenis';

// Component
import Section from './Section';

// CSS
import './css/Nav.css';

// Footer
const Footer = () => {

  const lenis = useLenis()

  const top = () => {
    lenis.scrollTo(0);
  };

  return (
    <Section config="nav -footer">
      <span onClick={top}>©2025</span>
    </Section>
  );
}

export default Footer;