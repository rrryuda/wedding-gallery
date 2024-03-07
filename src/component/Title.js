// React
import React, { useEffect, useRef } from 'react';

// CSS
import './css/Title.css';

// Title
const Title = ({ config, content, translateY }) => {
  const titleRef = useRef(null);

  useEffect(() => {

    // Options for Intersection Observer
    const options = {

      // Trigger when more than 50% of the element is visible
      threshold: 0.5
    };

    // Intersection Observer Callback
    const handleIntersection = (entries, observer) => {
      let index = 0;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const titleElements = entry.target.querySelectorAll('span');
          titleElements.forEach(element => {
            setTimeout(() => {
              element.classList.add('-loaded');

              // Apply delay based on a fixed index (100ms interval)
            }, index * 500);
            index++;
          });

          // Stop observing once it's detected
          observer.unobserve(entry.target);
        }
      });
    };

    // Create Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, options);
    const title = titleRef.current;
    observer.observe(title);

    // Cleanup function
    return () => {

      // Disconnect the observer when the component unmounts
      observer.disconnect();
    };
  }, []);

  // Splitting the text into title items
  const titleItems = content ? content.split('/').map((item, index) => (
    <div key={index}>
      <span>{item.trim()}</span>
    </div>
  )) : null;

  // Construct the classes
  const classes = config ? `title ${config}` : 'title';

  return (
    <div className={classes} style={{ transform: `translate3d(0, ${translateY}px, 0)` }} ref={titleRef}>
      {titleItems}
    </div>
  );
}

export default Title;