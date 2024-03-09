// React
import React from 'react';

// CSS
import './css/Text.css';

// Text
const Text = ({ config, id, type, bullet, href, style, children }) => {
  const Tag = type || 'p';
  const classes = config ? `text ${config}` : 'text';

  return (
    <Tag className={classes} id={id} href={href} style={style}>
      {bullet && <span></span>}
      {children}
    </Tag>
  );
}

export default Text;