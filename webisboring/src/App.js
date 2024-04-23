//React
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import componentsData from './data/componentsData';
import ComponentDetails from './components/Main/ComponentDetails';
//Pages
import Landing from './components/Landing/Landing';
import Main from './components/Main/Main';
import Case from './components/Case/Page';
import Motherboard from './components/Motherboard/Page';
import CPU from './components/CPU/Page';
import GPU from './components/GPU/Page';
import RAM from './components/RAM/Page';
import PSU from './components/PSU/Page';
import HDD from './components/HDD/Page';
import SSD from './components/SSD/Page';

const App = () => {
  const [unlockedIds, setUnlockedIds] = useState(componentsData.filter(c => c.unlocked).map(c => c.id));

  const unlockNextComponent = (currentComponentId) => {
    const currentIndex = componentsData.findIndex(comp => comp.id === currentComponentId);
    const nextIndex = currentIndex + 1;

    if (nextIndex < componentsData.length && !unlockedIds.includes(componentsData[nextIndex].id)) {
      const newUnlockedIds = [...unlockedIds, componentsData[nextIndex].id];
      setUnlockedIds(newUnlockedIds);
      componentsData[nextIndex].unlocked = true;
      return componentsData[nextIndex].name;
    }
    return null;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main-page" element={<Main unlockedIds={unlockedIds} />} />
          <Route path="/component/:id" element={<ComponentDetails unlockNextComponent={unlockNextComponent} unlockedIds={unlockedIds} />} />
          <Route path="/pc-case" element={<Case unlockNextComponent={unlockNextComponent} />} />
          <Route path="/motherboard" element={<Motherboard unlockNextComponent={unlockNextComponent} />} />
          <Route path="/cpu" element={<CPU unlockNextComponent={unlockNextComponent} />} />
          <Route path="/gpu" element={<GPU unlockNextComponent={unlockNextComponent} />} />
          <Route path="/ram" element={<RAM unlockNextComponent={unlockNextComponent} />} />
          <Route path="/psu" element={<PSU unlockNextComponent={unlockNextComponent} />} />
          <Route path="/hdd" element={<HDD unlockNextComponent={unlockNextComponent} />} />
          <Route path="/ssd" element={<SSD unlockNextComponent={unlockNextComponent} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
