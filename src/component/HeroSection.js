// React
import React, { useState, useEffect } from 'react';

// Component
import Title from './Title';

// CSS
import './css/Section.css';

// HeroSection
const HeroSection = ({ config, content }) => {
  const style = {
    overflow: 'hidden'
  }

  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {

      // Here, we calculate the translateY value based on the scroll position.
      // For example, you can increase the translateY value as the scroll goes down.
      const scrollY = window.scrollY;

      // Increase up to a maximum of 999
      const newTranslateY = Math.min(999, scrollY / 2);

      setTranslateY(newTranslateY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={config} style={style}>
      <Title config="-display" content={content} translateY={translateY} />
    </section>
  );
}

export default HeroSection;