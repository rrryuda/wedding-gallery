// React
import React from 'react';

// Component
import Cell from './component/Cell';
import Footer from './component/Footer';
import Img from './component/Img';
import LinkText from './component/LinkText';
import Section from './component/Section';
import Slot from './component/Slot';
import Text from './component/Text';
import Title from './component/Title';

// Home
const Home = () => {

  return (
    <>
      {/* Hero */}
      <Section config="-hero">
        <Title config="-display" content="We're Getting/ Married" />
      </Section>

      {/* Lastest Works */}
      <Section>
        <Cell>
          <Text bullet={true}>일시: 2025년 12월 9일 목요일</Text>
          <Text bullet={true}>장소: 신라호텔</Text>
        </Cell>
        <Cell>
          <Text config="-headline-sub">5년간의 연애 끝에 결혼합니다. 앞으로 저희 두사람의 앞날에 행복한 일만 가득하도록 축복해주시면 감사드리겠습니다.</Text>
        </Cell>
      </Section>

      {/* Expertise */}
      <Section>
        <Slot content={[
          "Mobile Design/ Visually implementing a variety of user experiences for mobile applications and web, tailored to the product's features.",
          "Web Design/ Creating visually appealing, professional responsive websites for B2B and B2C products, ensuring effective online presence.",
          "Rapid Prototyping/ Identifying user patterns and reflecting test results in the product through rapid prototyping, enhancing usability and experience.",
          "Micro-Interaction/ Generating positive user experiences by providing clear and beautiful feedback at various points of the product.",
          "Brand & Visual/ Defining user-friendly storytelling and sensory visual identity for companies and services, crafting a memorable brand image.",
          "UX Writing/ Aligning UX Writing with user needs to maximize product usability and increase engagement rates.",
          "Cartography/ Transforming information priorities into concise metaphors through practical and sensory design, effectively communicating complex ideas."
        ]} />
      </Section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;