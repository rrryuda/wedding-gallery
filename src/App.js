// React
import React from 'react';
import { Lenis } from '@studio-freight/react-lenis'

// CSS
import './css/App.css';

// Component
import MetaTheme from './component/MetaTheme';
import Cell from './component/Cell';
import RImg from './component/RImg';
import Section from './component/Section';
import Text from './component/Text';
import Header from './component/Header';
import Img from './component/Img';
import Footer from './component/Footer';

// Img
import ph1 from './source/placeholder-01.jpg';
import ph2 from './source/placeholder-02.jpg';
import ph3 from './source/placeholder-03.jpg';

// App
const App = () => {

  return (
    <Lenis root>
      <MetaTheme />

      {/* Hero */}
      <Section config="hero">
        <Cell config="-center">
          <Text config="-subtext -dim">2025년 12월 9일 목요일 오후 3시</Text>
        </Cell>
        <span>昇鉉</span>
        <span>&銀正</span>
        <RImg />
      </Section>

      {/* Header */}
      <Header />

      {/* Intro */}
      <Section config="intro">
        <Cell>
          <Text>2025년 12월 9일 목요일 오후 3시</Text>
          <Text type="a">청와대 대통령실</Text>
        </Cell>
        <h2>19년 2월 늦겨울, 찬바람을 뚫고 들어온 따사로운 봄바람같은 서로를 만났습니다. 이제는 그동안 사랑의 결실을 맺습니다.</h2>
      </Section>

      {/* Cover */}
      <Section config="cover">
        <Img config="-landscape" src={ph1} title="Title" />
      </Section>

      {/* Info */}
      <Section config="info">
        <Cell config="-head">
          <Text>소개</Text>
        </Cell>
        <Cell config="-gap-m">
          <Img config="-square" src={ph2} title="Title" />
          <h2>전태풍</h2>
          <Cell>
            <Text bullet={true}>父 홍길동</Text>
            <Text bullet={true}>母 신사임당</Text>
          </Cell>
        </Cell>
        <Cell config="-gap-m">
          <Img config="-square" src={ph3} title="Title" />
          <h2>전태풍</h2>
          <Cell>
            <Text bullet={true}>父 홍길동</Text>
            <Text bullet={true}>母 신사임당</Text>
          </Cell>
        </Cell>
      </Section>

      {/* Gallery */}
      <Section config="-gallery" id="gallery">
        <Cell config="-head">
          <Text>갤러리</Text>
        </Cell>
      </Section>

      {/* Map */}
      <Section config="-map" id="map">
        <Cell config="-head">
          <Text>오시는 길</Text>
        </Cell>
      </Section>

      {/* Contact */}
      <Section config="contact" id="contact">
        <Cell config="-head">
          <Text>연락처</Text>
        </Cell>
        <Cell config="item">
          <h2>홍길동</h2>
          <Cell config="-index">
            <Text config="-subtext -dim">전화</Text>
            <Text>010-1234-1234</Text>
          </Cell>
          <Cell config="-index">
            <Text config="-subtext -dim">계좌</Text>
            <Text>신한 110-223-9938492</Text>
          </Cell>
        </Cell>
        <Cell config="item">
          <h2>김수현</h2>
          <Cell config="-index">
            <Text config="-subtext -dim">전화</Text>
            <Text>010-1234-1234</Text>
          </Cell>
          <Cell config="-index">
            <Text config="-subtext -dim">계좌</Text>
            <Text>신한 110-223-9938492</Text>
          </Cell>
        </Cell>
      </Section>

      {/* Footer */}
      <Footer />

    </Lenis>
  );
}

export default App;