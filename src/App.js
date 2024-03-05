// React
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis'

// CSS
import './css/App.css';

// Component
import MetaTheme from './component/MetaTheme';
import ScrollToTop from './component/ScrollToTop';

// Page
import Home from './Home';
import NotFound from './NotFound';

// App
const App = () => {

  return (
    <ReactLenis root>
      <HashRouter basename={process.env.PUBLIC_URL}>
        {/* Common Components */}
        <MetaTheme />
        <ScrollToTop />

        {/* Page */}
        <Routes>

          {/* Home */}
          <Route exact path="/" element={<Home />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </ReactLenis>
  );
}

export default App;