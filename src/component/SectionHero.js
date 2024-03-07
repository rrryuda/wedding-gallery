// React
import React from 'react';

// Component
import RImg from './RImg';
import Section from './Section';
import Text from './Text';
import Title from './Title';

// CSS
import './css/Section.css';

// SectionHero
const SectionHero = () => {

  return (
    <Section config="hero">
      <Title content="우리/ 결혼해요" />
      <Text config="-dim">귀하를 초대합니다</Text>
      <Text config="-dim">스크롤해서 더보기</Text>
      <RImg />
    </Section>
  );
}

export default SectionHero;