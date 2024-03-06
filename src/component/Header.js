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
      <Text type="a">연락처</Text>
      <Text type="a">갤러리</Text>
      <Text type="a">오시는 길</Text>
    </header>
  );
}

export default Header;