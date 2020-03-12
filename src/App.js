import React from 'react';
import './App.css';
import Px from './asset/image/wire.jpg';
import Px1 from './asset/image/bridge.jpg';
import Px2 from './asset/image/staff.jpg';

function App() {
  return (
    <div>
      <div className='bg'>
        <div className='header'>
          <h1>aasdas</h1>
          <button className='button'>Get Started</button>
        </div>
        <div class="box">
          <div class="card">
            <div class="card__image-container">
              <img class="card__image" src={Px} alt=""></img>
            </div>
      
            <svg class="card__svg" viewBox="0 0 800 500">
              <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
              <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
            </svg>
            <div class="card__content">
              <h1 class="card__title">Competitive Strength</h1>
              <p></p>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="card">
            <div class="card__image-container">
              <img class="card__image" src={Px1} alt=""></img>
            </div>
      
            <svg class="card__svg" viewBox="0 0 800 500">
              <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
              <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
            </svg>
    
            <div class="card__content">
              <h1 class="card__title">Quality Innovation</h1>
              <p></p>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="card">
            <div class="card__image-container">
              <img class="card__image" src={Px2} alt=""></img>
            </div>
      
            <svg class="card__svg" viewBox="0 0 800 500">
              <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
              <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
            </svg>
    
            <div class="card__content">
              <h1 class="card__title">Zero NC</h1>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;