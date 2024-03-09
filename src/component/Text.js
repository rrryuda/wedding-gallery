// React
import React from 'react';

// CSS
import './css/Text.css';

// Text
const Text = ({ config, type, bullet, href, children }) => {
  const Tag = type || 'p';
  const classes = config ? `text ${config}` : 'text';

  return (
    <Tag className={classes} href={href} target="__blank">
      {bullet && <span></span>}
      {children}
    </Tag>
  );
}

export default Text;