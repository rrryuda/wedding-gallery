// React
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

// CSS
import './css/Section.css';

// Section
const Section = ({ config, id, children }) => {
  const { ref, inView } = useInView({

    // Only trigger animation once when the component enters the viewport
    triggerOnce: true,

    // Start the animation when 25% of the element is visible
    threshold: 0.1,
  });

  return (
    <motion.section className={config} id={id} ref={ref} initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: 0.6 }}>
      {children}
    </motion.section>
  );
}

export default Section;