import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SlideProgress from './SlideProgress'

function App() {
  return (
    <div className="App">
      <SlideProgress value={.5} onChange={(p) => {
        console.log('p',p)
      }}></SlideProgress>
      
    </div>
  );
}

export default App;
