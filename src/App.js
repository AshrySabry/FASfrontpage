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
        <div class="container">
          <div class="card">
            <div class="card__image-container">
              <img class="card__image" src='./asset/image/aerial-view-of-bridge-1211856.jpg' alt=""></img>
            </div>
      
            <svg class="card__svg" viewBox="0 0 800 500">

              <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
              <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
            </svg>
    
            <div class="card__content">
              <h1 class="card__title">Lorem ipsum</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus quam facere illo et quisquam quia earum nesciunt porro.</p>
            </div>
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
