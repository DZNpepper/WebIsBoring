import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import MainPage from './components/MainPage/MainPage';
import ComponentDetails from './components/MainPage/ComponentDetails';
import PcCasePage from './components/PcCasePage/PcCasePage'; // Make sure to import PcCasePage

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main-page" element={<MainPage />} />
          <Route path="/component/:id" element={<ComponentDetails />} />
          <Route path="/pc-case" element={<PcCasePage />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
