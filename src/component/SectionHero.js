// React
import React from 'react';

// Component
import Section from './Section';

// CSS
import './css/SectionHero.css';

// Img
import img01 from './source/placeholder-01.jpg';
import img02 from './source/placeholder-02.jpg';
import img03 from './source/placeholder-03.jpg';
import img04 from './source/placeholder-04.jpg';
import img05 from './source/placeholder-05.jpg';

// SectionHero
const SectionHero = () => {

  return (
    <Section config="hero">
      <div className="title">
        <div><span>우리</span></div>
        <div><span>결혼해요</span></div>
      </div>
      <span className="greeting">귀하를 초대합니다</span>
      <span className="guide">스크롤해서 더보기</span>
      <div className="rimg">
        <ul>
          <li>
            <img src={img01} alt="" />
            <img src={img02} alt="" />
            <img src={img03} alt="" />
            <img src={img04} alt="" />
            <img src={img05} alt="" />
          </li>
          <li>
            <img src={img01} alt="" />
            <img src={img02} alt="" />
            <img src={img03} alt="" />
            <img src={img04} alt="" />
            <img src={img05} alt="" />
          </li>
          <li>
            <img src={img01} alt="" />
            <img src={img02} alt="" />
            <img src={img03} alt="" />
            <img src={img04} alt="" />
            <img src={img05} alt="" />
          </li>
        </ul>
      </div>
    </Section>
  );
}

export default SectionHero;