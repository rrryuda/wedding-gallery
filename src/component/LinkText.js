// React
import React from 'react';
import { useNavigate } from 'react-router-dom';

// CSS
import './css/LinkText.css';

// LinkText
const LinkText = ({ config, type, index, content, hover, to, href }) => {

  // Navigate
  const navigate = useNavigate();
  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  // Construct the classes
  const classes = config ? `linktext ${config}` : 'linktext';

  // Detect the tag type
  const Tag = type || 'div';

  return (
    <div className={classes} onClick={handleClick}>
      {index && <span className="index">{index}</span>}
      <Tag className="box" {...(type === 'a' && { href })} target={href ? '_blank' : undefined}>
        <span>{content}</span>
        <span>{hover}</span>
      </Tag>
    </div>
  );
}

export default LinkText;