import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBackground = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>Background Color Toggler</h1>
      <button onClick={toggleBackground}>Toggle Background Color</button>
    </div>
  );
}
