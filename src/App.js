import React, { useState, useRef } from 'react';
import BasicInformation from './components/BasicInformation';
import Work from './components/Work';
import Skills from './components/Skills';
import Resources from './components/Resources';
import DeveloperSetup from './components/DeveloperSetup';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const basicInfoRef = useRef(null);
  const workRef = useRef(null);
  const skillsRef = useRef(null);
  const resourcesRef = useRef(null);
  const devSetupRef = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`App ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <header className="p-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
        <p className="mt-2">Full Stack Web Developer</p>
      </header>
      <nav className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-10">
        <ul className="flex justify-center space-x-4 p-4">
          <li>
            <button
              className="hover:underline"
              onClick={() => scrollToSection(basicInfoRef)}
            >
              Basic Information
            </button>
          </li>
          <li>
            <button
              className="hover:underline"
              onClick={() => scrollToSection(workRef)}
            >
              Work
            </button>
          </li>
          <li>
            <button
              className="hover:underline"
              onClick={() => scrollToSection(skillsRef)}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className="hover:underline"
              onClick={() => scrollToSection(resourcesRef)}
            >
              Resources
            </button>
          </li>
          <li>
            <button
              className="hover:underline"
              onClick={() => scrollToSection(devSetupRef)}
            >
              Developer Setup
            </button>
          </li>
          <li>
            <button
              className="p-2 bg-gray-300 dark:bg-gray-700 rounded-md"
              onClick={toggleDarkMode}
            >
              Toggle Dark Mode
            </button>
          </li>
        </ul>
      </nav>
      <div className="container mx-auto p-6">
        <section ref={basicInfoRef}>
          <BasicInformation />
        </section>
        <section ref={workRef}>
          <Work />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section ref={resourcesRef}>
          <Resources />
        </section>
        <section ref={devSetupRef}>
          <DeveloperSetup />
        </section>
      </div>
    </div>
  );
}

export default App;
