// React
import React from 'react';

// CSS
import './css/Img.css';

// Img
const Img = ({ config, src }) => {
  const classes = config ? `img ${config}` : 'img';

  return (
    <picture className={classes}>
      <img src={src} />
    </picture>
  );
}

export default Img;