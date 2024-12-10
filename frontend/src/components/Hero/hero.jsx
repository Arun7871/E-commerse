import React from 'react';
import './hero.css'
import hero from '../Assets/hero-1.png'
import handIcon from '../Assets/hello.png'
export const Hero = () => {
  return (
    <div className="hero">
          <div className="left-side">
                <h2>New Arrivals</h2>
                <div>
                    <div className="hand-icon">
                          <p>New<span>👋</span></p>
                          
                    </div>
                    <p>Collections</p>
                    <p>For Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <button>Latest Collections</button>
                </div>
                
          </div>
          <div className="right-side">
              <img src={hero}></img>
          </div>
    </div>
  );
};
