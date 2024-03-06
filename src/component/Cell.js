// React
import React from 'react';

// CSS
import './css/Cell.css';

// Cell
const Cell = ({ config, children }) => {
  const classes = config ? `cell ${config}` : 'cell';

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default Cell;