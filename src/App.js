// React
import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis'

// CSS
import './css/App.css';

// Component
import MetaTheme from './component/MetaTheme';
import Cell from './component/Cell';
import Footer from './component/Footer';
import RImg from './component/RImg';
import Section from './component/Section';
import Text from './component/Text';
import Header from './component/Header';
import Img from './component/Img';

// Img
import ph1 from './source/placeholder-01.jpg';
import ph2 from './source/placeholder-02.jpg';
import ph3 from './source/placeholder-03.jpg';

// App
const App = () => {

  return (
    <ReactLenis root>
      <MetaTheme />

      {/* Header */}
      <Header />

      {/* Footer */}
      <Footer />

      {/* Hero */}
      <Section config="-hero">
        <span>昇鉉</span>
        <span>&銀正</span>
        <RImg />
      </Section>

      {/* Intro */}
      <Section config="-intro">
        <Cell>
          <Text bullet={true}>2025년 12월 9일 목요일 오후 3시</Text>
          <Text type="a" bullet={true}>청와대 대통령실 ↗</Text>
        </Cell>
        <h2>19년 2월 늦겨울, 찬바람을 뚫고 들어온 따사로운 봄바람같은 서로를 만났습니다. 이제는 그동안 사랑의 결실을 맺습니다.</h2>
      </Section>

      {/* Cover */}
      <Section config="-cover">
        <Img config="-landscape" src={ph1} />
      </Section>

      {/* Info */}
      <Section config="-grid">
        <Cell config="-gap-m">
          <Img config="-square" src={ph2} />
          <h2>전태풍</h2>
          <Cell>
            <Text bullet={true}>父 홍길동</Text>
            <Text bullet={true}>母 신사임당</Text>
          </Cell>
        </Cell>
      </Section>

      {/* Gallery */}
      <Section config="-gallery" id="gallery">
      </Section>

      {/* Map */}
      <Section config="-map" id="map">
      </Section>

      {/* Contact */}
      <Section config="-contact" id="contact">
      </Section>

    </ReactLenis>
  );
}

export default App;