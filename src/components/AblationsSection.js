import React from 'react';
import './AblationsSection.css';

const AblationsSection = () => {
  return (
    <section className="ablations-section">
      <div className="ablations-container">
        <h3 className="ablations-title">
          📌 Curious to learn more?{' '} Check out our
          <a 
            href="https://arxiv.org/abs/2506.06275" 
            target="_blank" 
            rel="noopener noreferrer"
            className="paper-link"
          > paper
          </a>! 👀
        </h3>

        <div className="ablations-grid">
          <div className="ablation-card">
            <div className="ablation-icon">🎥</div>
            <h4 className="ablation-heading">Modality Ablations</h4>
            <p className="ablation-text">
              How subtitles and visual input shape model performance
            </p>
          </div>

          <div className="ablation-card">
            <div className="ablation-icon">📚</div>
            <h4 className="ablation-heading">Knowledge Analysis</h4>
            <p className="ablation-text">
              The role of textual and world knowledge in long video understanding
            </p>
          </div>

          <div className="ablation-card">
            <div className="ablation-icon">🔍</div>
            <h4 className="ablation-heading">Dimensional Breakdown</h4>
            <p className="ablation-text">
              Differences across comprehension dimensions and reasoning granularity
            </p>
          </div>

          <div className="ablation-card">
            <div className="ablation-icon">⚖️</div>
            <h4 className="ablation-heading">Human vs. Model Analysis</h4>
            <p className="ablation-text">
              Task-specific strengths and weaknesses of humans vs. models
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AblationsSection;

