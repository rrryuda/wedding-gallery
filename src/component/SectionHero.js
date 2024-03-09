// React
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

  // Parallax
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.75], ['0%', '-100%']);
  const sRange = useTransform(scrollYProgress, [0, 0.5], ['54rem', '27rem']);
  const oRange = useTransform(scrollYProgress, [0, 0.125], ['1', '0']);

  // Opacity
  const { scrollY } = useScroll();
  const inviteOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scrollOpacity = useTransform(scrollY, [0, 200], [0.5, 0]);

  // Infinite Slide
  const slideInVariants = {
    hidden: { x: '0%' }, visible: {
      x: '-100%', transition: { duration: 24, ease: "linear", repeat: Infinity }
    }
  };

  return (
    <>
      {/* Intro */}
      <motion.p className="text -invite" initial={{ x: '-50%', y: '-100%', opacity: 0 }} animate={{ y: '0%', opacity: 1 }} style={{ opacity: inviteOpacity }} transition={{ duration: 0.4, delay: 0.6 }}>
        우리의 시작을 축복해주세요
      </motion.p>

      {/* Scroll Guide */}
      <motion.p className="text -scroll" initial={{ x: '-50%', y: '100%', opacity: 0 }} animate={{ y: '0%', opacity: 0.5 }} style={{ opacity: scrollOpacity }} transition={{ duration: 0.4, delay: 0.6 }}>
        ↓ 스크롤해서 보기
      </motion.p>

      {/* Hero */}
      <Section config="hero">

        {/* Title */}
        <motion.div className="title" initial={{ y: '100%', opacity: 0 }} animate={{ y: '0%', opacity: 1 }} transition={{ duration: 0.4, delay: 0.6 }}>
          <span>Shawn</span>
          <motion.div className="-glyph" initial={{ y: '0%' }} animate={{ y: '-50%' }} transition={{ ease: "anticipate", duration: 0.4, delay: 1.4 }}>
            <span>&</span>
            <span>♥</span>
          </motion.div>
          <span>EJ</span>
        </motion.div>

        {/* Image */}
        <motion.ul style={{ y: yRange, opacity: oRange }}>
          <motion.li variants={slideInVariants} initial="hidden" animate="visible" style={{ height: sRange }}>
            <div><img src={img01} alt="" /></div>
            <div><img src={img02} alt="" /></div>
            <div><img src={img03} alt="" /></div>
            <div><img src={img04} alt="" /></div>
            <div><img src={img05} alt="" /></div>
          </motion.li>
          <motion.li variants={slideInVariants} initial="hidden" animate="visible" style={{ height: sRange }}>
            <div><img src={img01} alt="" /></div>
            <div><img src={img02} alt="" /></div>
            <div><img src={img03} alt="" /></div>
            <div><img src={img04} alt="" /></div>
            <div><img src={img05} alt="" /></div>
          </motion.li>
          <motion.li variants={slideInVariants} initial="hidden" animate="visible" style={{ height: sRange }}>
            <div><img src={img01} alt="" /></div>
            <div><img src={img02} alt="" /></div>
            <div><img src={img03} alt="" /></div>
            <div><img src={img04} alt="" /></div>
            <div><img src={img05} alt="" /></div>
          </motion.li>
        </motion.ul>
      </Section>
    </>
  );
}

export default SectionHero;