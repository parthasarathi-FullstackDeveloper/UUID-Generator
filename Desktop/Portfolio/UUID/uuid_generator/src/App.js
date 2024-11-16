import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [uuid, setUuid] = useState('');
  const [copy, setCopy] = useState(false);

  // Generate UUID on first load
  useEffect(() => {
    generateUuid();
  }, []);

  // Function to generate a new UUID
  const generateUuid = () => {
    const newUuid = uuidv4();
    setUuid(newUuid);
  };

  // Function to copy the UUID to the clipboard
  const copyToClipboard = () => {
    setCopy(true);
    setTimeout(() => setCopy(false), 2000); // Hide the alert after 2 seconds
    navigator.clipboard.writeText(uuid);
  };

  return (
    <div className="app">
      <div className="card">
        {/* Show the success message when the UUID is copied */}
        {copy && <div className="alert">Copied  Clipboard SuccessFully !</div>}
        
        <h1>UUID Generator</h1>
        
        <div className="uuid-box">
          <div className="uuid">{uuid}</div>
        </div>
        
        <button onClick={generateUuid} className="generate-button">
          Generate UUID
        </button>
        
        <button className="generate-button" onClick={copyToClipboard}>
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
}
export default  App;