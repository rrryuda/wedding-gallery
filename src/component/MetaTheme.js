// React
import { useEffect } from 'react';

// MetaTheme
const MetaTheme = () => {

  // useEffect hook to execute when the component mounts
  useEffect(() => {

    // Define the scroll event handler function
    const handleSectionScroll = () => {

      // Select all section elements
      const sections = document.querySelectorAll('section');

      // Iterate over each section
      sections.forEach(section => {

        // Get the position information of the section
        const sectionRect = section.getBoundingClientRect();

        // Get the background color when the section is visible on the screen
        if (sectionRect.top <= 0 && sectionRect.bottom >= 0) {
          const sectionBgColor = window.getComputedStyle(section).backgroundColor;

          // Select the meta theme color meta tag
          const metaThemeColor = document.querySelector('meta[name="theme-color"], meta[name="msapplication-navbutton-color"], meta[name="apple-mobile-web-app-status-bar-style"]');

          // Apply the background color if the meta theme color meta tag exists
          if (metaThemeColor) {
            metaThemeColor.content = sectionBgColor;
          }

          // Apply the background color to the HTML body
          document.body.style.backgroundColor = sectionBgColor;
        }
      });
    };

    // Call the handleSectionScroll function once on page load and add scroll event listener
    handleSectionScroll();
    window.addEventListener('scroll', handleSectionScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleSectionScroll);
    };
  }, []);

  // Since there is no header component, return null
  return null;
}

export default MetaTheme;