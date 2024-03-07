// React
import React from 'react';

// CSS
import './css/Img.css';

// Img
const Img = ({ config, src, title }) => {
  const classes = config ? `img ${config}` : 'img';

  return (
    <picture className={classes}>
      <img src={src} alt={title} />
    </picture>
  );
}

export default Img;