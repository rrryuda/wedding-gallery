// React
import React from 'react';

// Component
import Cell from './component/Cell';
import Footer from './component/Footer';
import Img from './component/Img';
import RImg from './component/RImg';
import Section from './component/Section';
import Text from './component/Text';
import Title from './component/Title';

// Img
import ph from './source/placeholder-01.jpg';

// Home
const Home = () => {

  return (
    <>
      {/* Hero */}
      <Section config="-hero">
        <Cell>
          <span>昇鉉</span>
          <span>& 銀正</span>
        </Cell>
        <RImg />
      </Section>

      {/* Lastest Works */}
      <Section>
        <Cell>
          <Text bullet={true}>일시: 2025년 12월 9일 목요일</Text>
          <Text bullet={true}>장소: 신라호텔</Text>
        </Cell>
        <Cell>
          <Text config="-headline">5년간의 연애 끝에 결혼합니다. 앞으로 저희 두사람의 앞날에 행복한 일만 가득하도록 축복해주시면 감사드리겠습니다.</Text>
        </Cell>
      </Section>

      {/* Cover */}
      <Section config="-cover">
        <Img src={ph} />
      </Section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;