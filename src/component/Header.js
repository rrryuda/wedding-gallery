// React
import React from 'react';

// Component
import Text from '../component/Text';

// CSS
import './css/Nav.css';

// Header Component
const Header = () => {

  return (
    <header>
      <Text config="-subtext" type="a" href="#gallery">갤러리</Text>
      <Text config="-subtext" type="a" href="#map">오시는길</Text>
      <Text config="-subtext" type="a" href="#contact">연락처</Text>
    </header>
  );
}

export default Header;