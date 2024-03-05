// React
import React from 'react';

// CSS
import './css/Section.css';

// Section
const Section = ({ config, children }) => {

  return (
    <section className={config}>
      {children}
    </section>
  );
}

export default Section;