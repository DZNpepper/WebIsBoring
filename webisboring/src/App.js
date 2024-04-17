import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import MainPage from './components/MainPage/MainPage';
import ComponentDetails from './components/MainPage/ComponentDetails';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/main-page" element={<MainPage />} />
          <Route path="/component/:id" element={<ComponentDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
