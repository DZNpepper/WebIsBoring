import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import componentsData from './data/componentsData';
import ComponentDetails from './components/MainPage/ComponentDetails';
import LandingPage from './components/LandingPage/LandingPage';
import MainPage from './components/MainPage/MainPage';
import PcCasePage from './components/PcCasePage/PcCasePage';
import MotherboardPage from './components/Motherboard/Motherboard';
import CPUPage from './components/CpuPage/CPUPage';
import GPUPage from './components/GpuPage/GPUPage';
import RAMPage from './components/RamPage/RAMPage';
import PSUPage from './components/PSU/PSUPage';
import HDDPage from './components/HDD/HDDPage';

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
          <Route path="/" element={<LandingPage />} />
          <Route path="/main-page" element={<MainPage unlockedIds={unlockedIds} />} />
          <Route path="/component/:id" element={<ComponentDetails unlockNextComponent={unlockNextComponent} unlockedIds={unlockedIds} />} />
          <Route path="/pc-case" element={<PcCasePage unlockNextComponent={unlockNextComponent} />} />
          <Route path="/motherboard" element={<MotherboardPage unlockNextComponent={unlockNextComponent} />} />
          <Route path="/cpu" element={<CPUPage unlockNextComponent={unlockNextComponent} />} />
          <Route path="/gpu" element={<GPUPage unlockNextComponent={unlockNextComponent} />} />
          <Route path="/ram" element={<RAMPage unlockNextComponent={unlockNextComponent} />} />
          <Route path="/psu" element={<PSUPage unlockNextComponent={unlockNextComponent} />} />
          <Route path="/hdd" element={<HDDPage unlockNextComponent={unlockNextComponent} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
