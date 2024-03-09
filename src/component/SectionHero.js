// React
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Component
import Section from './Section';
import Text from './Text';

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

  // Parallax
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);

  // Opacity
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0.5, 0]);

  return (
    <>
      <Section config="hero">

        {/* Title */}
        <div className="title">
          <div className="-container">
            <div className="-name">
              <span>승현</span>
              <div className="-mark">
                <span>&</span>
                <span>♥</span>
              </div>
              <span>은정</span>
            </div>
            <span className="-catch">결혼합니다</span>
          </div>
        </div>

        {/* Image */}
        <motion.ul style={{ y: yRange }}>
          <li>
            <div><img src={img01} alt="" /></div>
            <div><img src={img02} alt="" /></div>
            <div><img src={img03} alt="" /></div>
            <div><img src={img04} alt="" /></div>
            <div><img src={img05} alt="" /></div>
          </li>
          <li>
            <div><img src={img01} alt="" /></div>
            <div><img src={img02} alt="" /></div>
            <div><img src={img03} alt="" /></div>
            <div><img src={img04} alt="" /></div>
            <div><img src={img05} alt="" /></div>
          </li>
          <li>
            <div><img src={img01} alt="" /></div>
            <div><img src={img02} alt="" /></div>
            <div><img src={img03} alt="" /></div>
            <div><img src={img04} alt="" /></div>
            <div><img src={img05} alt="" /></div>
          </li>
        </motion.ul>
      </Section>

      {/* Guide */}
      <motion.div id="gScroll" style={{ opacity }}>
        <Text>스크롤해서 보기</Text>
      </motion.div>
    </>
  );
}

export default SectionHero;