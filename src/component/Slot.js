// React
import React from 'react';

// Component
import Text from './Text';

// CSS
import './css/Slot.css';

const Slot = () => {

  // Creates 8 copies of the <ul> tag during initial rendering.
  // Applies the -hidden class to all but the first <ul> tag.

  return (
    <div className="slot">
      <ul>
        <li>
          <Text>We are getting marreid</Text>
        </li>
      </ul>
    </div>
  );
}

export default Slot;