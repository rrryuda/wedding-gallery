// React
import React from 'react';

// CSS
import './css/Text.css';

// Text
const Text = ({ config, type, bullet, children }) => {
  const Tag = type || 'p';
  const classes = config ? `text ${config}` : 'text';

  return (
    <Tag className={classes}>
      {bullet && <span></span>}
      {children}
    </Tag>
  );
}

export default Text;