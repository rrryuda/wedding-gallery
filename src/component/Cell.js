// React
import React from 'react';

// Cell
const Cell = ({ config, children }) => {

  // Construct the classes
  const classes = config ? `cell ${config}` : 'cell';

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default Cell;