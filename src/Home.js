// React
import React from 'react';

// Component
import Cell from './component/Cell';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
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
        <Title config="-display" content="Marry me?" />
      </Section>

      {/* Lastest Works */}
      <Section>
        <Text config="-headline">asdmkalsdmklasmldka</Text>
      </Section>

      {/* Expertise */}
      <Section config="-hidden">
        <Cell config="-head -fill">
          <Text config="-sub" bullet={true}>Expertise</Text>
          <Title config="-title" content="What I Do" />
        </Cell>
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