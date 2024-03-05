// React
import React from 'react';

// Component
import Cell from './Cell';
import LinkText from './LinkText';
import Section from './Section';
import Text from './Text';
import Title from './Title';

// Footer
const Footer = () => {

  return (
    <Section config="-footer" line={true}>
      <Cell config="-head -fill">
        <Title config="-title" content="Get in Touch" />
      </Cell>
      <Cell config="-content -fill">
        <Cell>
          <LinkText config="-headline" type="a" content="+82 010 **** ****" hover="+82 010 4245 8923" />
          <LinkText config="-headline" type="a" content="hello@seung-hyun.me" hover="hello@seung-hyun.me" href="mailto:hello@seung-hyun.me?subject=Hi Seung-hyun!" />
          <LinkText config="-headline" type="a" content="linkedin" hover="linkedin" href="https://www.linkedin.com/in/rrryuda" />
          <LinkText config="-headline" type="a" content="dribbble" hover="dribbble" href="https://dribbble.com/rrryuda" />
        </Cell>
        <Cell config="-between">
          <LinkText config="-sub" type="a" content="Seung-Hyun" hover="Seung-Hyun" to="/" />
          <Text config="-sub">©2024</Text>
        </Cell>
      </Cell>
    </Section>
  );
}

export default Footer;