// React
import React from 'react';

// CSS
import './css/Img.css';

// Img
const Img = ({ config, title, src }) => {

  // Construct the classes
  const classes = config ? `img ${config}` : 'img';

  return (
    <picture className={classes}>
      <div>
        <span>{title}</span>
      </div>
      <img src={src} alt={title} />
    </picture>
  );
}

export default Img;