// React
import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis'

// CSS
import './css/App.css';

// Component
import MetaTheme from './component/MetaTheme';

// Page
import Home from './Home';
import NotFound from './NotFound';

// App
const App = () => {

  return (
    <ReactLenis root>
      {/* Common Components */}
      <MetaTheme />
      <Home />
    </ReactLenis>
  );
}

export default App;