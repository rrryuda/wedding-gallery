// React
import React from 'react';

// CSS
import './css/Text.css';

// Text
const Text = ({ config, bullet, children }) => {

  // Construct the classes
  const classes = config ? `text ${config}` : 'text';

  return (
    <p className={classes}>
      {bullet && <span></span>}
      {children}
    </p>
  );
}

export default Text;