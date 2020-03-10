import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className='bg'>
        <div className='header'>
          <h1>Sales System</h1>
          <button className='button' id='btn'>Get Started</button>
        </div>
        <div className='box'>
          <div className='bg1'></div>
          <div id='title'>
            <h2>Steel Cord</h2>
          </div>
          
        </div>
        <div className='box1'>
          <h2 className='text'>Bead Wire</h2>
        </div>
        <div className='box2'>
          <h2 className='text'>Wire Rope</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
