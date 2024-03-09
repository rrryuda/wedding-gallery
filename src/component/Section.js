// React
import React from 'react';

// CSS
import './css/Section.css';

// Section
const Section = ({ config, id, children }) => {
  return (
    <section className={config} id={id}>
      {children}
    </section>
  );
}

export default Section;