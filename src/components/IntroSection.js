import './IntroSection.css';
import React, { useState } from 'react';

const IntroSection = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-main-content">
          <div className="intro-content">
            <div className="paper-title">
              {/* TODO: Add the image here */}
                {/* <div className="tower-container-title">
                  <img src={`${process.env.PUBLIC_URL}/a.png`} alt="Movie Facts and Fibs (MF2): A Benchmark for Long Movie Understanding" className="tower-image-title" />
                </div> */} 
              <h1 className="paper-main-title">
                🍿 MF<sup>2</sup>: Movie Facts and Fibs 
              </h1>
              {/* <h2 className="paper-subtitle-text">
                <span style={{fontStyle: 'normal'}}>⏳</span> MF2 is under review ...
              </h2> */}
              <h2 className="paper-subtitle-text">
                <span style={{fontStyle: 'normal'}}>🎥</span> A Benchmark for Long Movie Understanding ...
              </h2>
            </div>

            <div className="hero-buttons">
              <button 
                className="btn-arxiv" 
                style={{height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                onClick={() => window.open('https://arxiv.org/abs/2506.06275', '_blank')}
              >
                <img 
                  src={`${process.env.PUBLIC_URL}/arxiv-logo.svg`} 
                  alt="arXiv" 
                  style={{width: '62px', height: '20px'}}
                />
              </button>
              <button 
                className="btn-code"
                style={{height: '3.5rem', width: '122px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                onClick={() => window.open('https://github.com/deep-spin/MF2', '_blank')}
              ><img
                  src={`${process.env.PUBLIC_URL}/github-mark.svg`}
                  alt="GitHub repository"
                  width={20}
                  height={20}
                />Code
              </button>
              <button 
                className="btn-huggingface"
                style={{height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                onClick={() => window.open('https://huggingface.co/datasets/sardinelab/MF2', '_blank')}
              >🤗 Dataset
              </button>
              <button 
                className="btn-leaderboard"
                style={{height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                onClick={() => document.getElementById('leaderboard-section')?.scrollIntoView({ behavior: 'smooth' })}
              >🏆 Leaderboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

