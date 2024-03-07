// React
import React from 'react';
import { Lenis } from '@studio-freight/react-lenis'

// CSS
import './css/App.css';

// Component
import Cell from './component/Cell';
import Footer from './component/Footer';
import Header from './component/Header';
import Img from './component/Img';
import MetaTheme from './component/MetaTheme';
import SectionHero from './component/SectionHero';
import Section from './component/Section';
import Text from './component/Text';

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
      <SectionHero />

      {/* Intro */}
      <Section config="intro">
        <Cell>
          <Text>2025년 12월 9일 목요일 오후 3시</Text>
          <Text type="a">신라호텔 3층</Text>
        </Cell>
        <h2>19년 2월 늦겨울, 찬바람을 뚫고 들어온 따사로운 봄바람같은 서로를 만났습니다. 이제는 그동안 사랑의 결실을 맺습니다.</h2>
      </Section>

      {/* Header */}
      <Header />

      {/* Cover */}
      <Section config="cover">
        <Img config="-landscape" src={ph1} title="Title" />
      </Section>

      {/* Info */}
      <Section config="info">
        <Cell config="-center">
          <Cell config="-head">
            <Text>소개</Text>
          </Cell>
          <Cell config="-center -gap-s">
            <Cell config="-index">
              <Text config="-subheadline">유재훈</Text>
              <Text config="-subheadline">한은진</Text>
              <Text config="-dim">의 차남</Text>
              <Text config="-subheadline">승현</Text>
            </Cell>
            <Cell config="-index">
              <Text config="-subheadline">최수종</Text>
              <Text config="-subheadline">하희라</Text>
              <Text config="-dim">의 장녀</Text>
              <Text config="-subheadline">은희</Text>
            </Cell>
          </Cell>
        </Cell>
        <Cell config="-center">
          <Cell config="-head">
            <Text>일정</Text>
          </Cell>
          <Cell config="-center -gap-s">
            <Text config="-subheadline">12월 9일 (목) 오후 3시</Text>
            <Text config="">신라호텔 3층</Text>
          </Cell>
        </Cell>
      </Section>

      {/* Info */}
      <Section config="portrait">
        <Img config="-square" src={ph2} title="Title" />
        <Img config="-square" src={ph3} title="Title" />
      </Section>

      {/* Gallery */}
      <Section id="gallery">
        <Cell config="-head -center">
          <Text>갤러리</Text>
        </Cell>
        <Img config="-square" src={ph3} title="Title" />
      </Section>

      {/* Map */}
      <Section id="map">
        <Cell config="-head -center">
          <Text>오시는 길</Text>
        </Cell>
        <Img config="-landscape" src={ph3} title="Title" />
      </Section>

      {/* Contact */}
      <Section id="contact">
        <Cell config="-head -center">
          <Text>연락처</Text>
        </Cell>
        <Cell config="-list">
          <h3>유승현</h3>
          <Cell config="-index">
            <Text config="-subtext -dim">전화</Text>
            <Text>010-1234-1234</Text>
          </Cell>
          <Cell config="-index">
            <Text config="-subtext -dim">계좌</Text>
            <Text>신한 110-223-9938492</Text>
          </Cell>
        </Cell>
        <Cell config="-list">
          <h3>최은희</h3>
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