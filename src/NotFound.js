// React
import React, { useEffect } from 'react';

// Component
import Cell from './component/Cell';
import LinkText from './component/LinkText';
import Section from './component/Section';

// NotFound
const NotFound = () => {

  useEffect(() => {

    // Additional page id
    const body = document.querySelector('body');
    if (body) {
      body.setAttribute('class', '-error');
    }

    // Additional page title
    const originalTitle = document.title;
    const additionalTitle = 'Not Found ― ';
    document.title = additionalTitle + originalTitle;

    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <>
      <Section>
        <h1>404</h1>
        <Cell config="-fill -center">
          <h2>Page Not Found</h2>
          <LinkText type="a" to="/" content="Back to home ↗" hover="Back to home ↗" />
        </Cell>
      </Section>
    </>
  );
}

export default NotFound;