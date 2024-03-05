// React
import React from 'react';
import { useNavigate } from 'react-router-dom';

// CSS
import './css/Cell.css';

// Cell
const Cell = ({ type, config, href, to, children }) => {

  // Navigate
  const navigate = useNavigate();
  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  // Mouse over effect
  const handleMouseOver = (e) => {
    const cell = e.currentTarget;
    if (!cell.classList.contains('-hover')) {
      cell.classList.add('-hover');
    }
  };

  // Mouse out effect
  const handleMouseOut = (e) => {
    const cell = e.currentTarget;
    if (cell.classList.contains('-hover')) {
      cell.classList.remove('-hover');
    }
  };

  // Construct the classes
  const classes = config ? `cell ${config}` : 'cell';

  // Detect the tag type
  const Tag = type || 'div';

  return (
    <Tag {...(type === 'a' && { href })}
      className={classes}
      onClick={handleClick}
      onMouseOver={to || href ? handleMouseOver : undefined} // Only add mouseover event if "to" prop is set
      onMouseOut={to || href ? handleMouseOut : undefined} // Only add mouseout event if "to" prop is set
      style={{ cursor: (to || href) ? 'pointer' : 'auto' }} target={href ? '_blank' : undefined}>
      {children}
    </Tag>
  );
}

export default Cell;