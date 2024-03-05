// React
import React, { useState } from 'react';

// Component
import Text from './Text';

// CSS
import './css/Slot.css';

const Slot = ({ content }) => {

  // Creates 8 copies of the <ul> tag during initial rendering.
  // Applies the -hidden class to all but the first <ul> tag.
  const [ulCopies] = useState(new Array(6).fill([...content]));

  return (
    <div className="slot">
      {ulCopies.map((copy, index) => (

        // Apply -hidden class to all copies except for the first one.
        <ul key={index} className={index > 0 ? '-hidden' : ''}>
          {copy.map((item, itemIndex) => {

            // Split each item into title and description,
            // then render them using the Cell and Text components.
            const [title, description] = item.split('/');
            return (
              <li key={itemIndex}>
                <Text config="-headline">{title.trim()}</Text>
                <Text>{description.trim()}</Text>
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
}

export default Slot;