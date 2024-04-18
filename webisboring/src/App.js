import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import componentsData from './data/componentsData'; // Ensure this import path is correct
import LandingPage from './components/LandingPage/LandingPage';
import MainPage from './components/MainPage/MainPage';
import ComponentDetails from './components/MainPage/ComponentDetails';
import PcCasePage from './components/PcCasePage/PcCasePage';

const App = () => {
  // State to track the IDs of components that are currently unlocked
  const [unlockedIds, setUnlockedIds] = useState(componentsData.filter(c => c.unlocked).map(c => c.id));

  /**
   * Unlocks the next component in the list relative to the current component.
   * @param {string} currentComponentId - The ID of the current component
   * @returns {string|null} The name of the next component that was unlocked, or null if there is no next component
   */
  const unlockNextComponent = (currentComponentId) => {
    const currentIndex = componentsData.findIndex(comp => comp.id === currentComponentId);
    const nextIndex = currentIndex + 1;

    if (nextIndex < componentsData.length && !unlockedIds.includes(componentsData[nextIndex].id)) {
      const newUnlockedIds = [...unlockedIds, componentsData[nextIndex].id];
      setUnlockedIds(newUnlockedIds); // Update state to include the new unlocked ID
      componentsData[nextIndex].unlocked = true; // Mutate the global data (Note: generally avoid mutating global data)
      return componentsData[nextIndex].name; // Return the name of the newly unlocked component
    }
    return null; // Return null if no components are left to unlock
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main-page" element={<MainPage unlockedIds={unlockedIds} />} />
          <Route path="/component/:id" element={<ComponentDetails unlockNextComponent={unlockNextComponent} unlockedIds={unlockedIds} />} />
          <Route path="/pc-case" element={<PcCasePage unlockNextComponent={unlockNextComponent} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
