import React, { useState } from 'react';
import BasicInformation from './components/BasicInformation';
import Work from './components/Work';
import Skills from './components/Skills';
import Resources from './components/Resources';
import DeveloperSetup from './components/DeveloperSetup';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`App ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <button
        className="p-2 bg-gray-300 dark:bg-gray-700 rounded-md"
        onClick={toggleDarkMode}
      >
        Toggle Dark Mode
      </button>
      <BasicInformation />
      <Work />
      <Skills />
      <Resources />
      <DeveloperSetup />
    </div>
  );
}

export default App;
