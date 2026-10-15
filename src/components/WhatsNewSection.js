import React from 'react';
import './WhatsNewSection.css';

const WhatsNewSection = () => {
  return (
    <section className="whatsnew-section">
      <div className="whatsnew-container">
        <h3 className="whatsnew-header">🔥 What's New</h3>
        <div className="news-container">
          
          {/* <div className="news-item">
            <div className="news-date">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="date-text">January 2026</span>
            </div>
            <div className="news-content">
              <p>Updated paper version on arXiv!</p>
            </div>
          </div> */}
          <div className="news-item">
            <div className="news-date">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="date-text">October 2026</span>
            </div>
            <div className="news-content news-content-with-logo">
              <p>Paper accepted at EMNLP 2026 in Budapest.</p>
              <img
                src={`${process.env.PUBLIC_URL}/emnlp2026-budapest.png`}
                alt="EMNLP 2026, Budapest, October 24–29"
                className="news-logo"
              />
            </div>
          </div>
          <div className="news-item">
            <div className="news-date">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="date-text">June 2025</span>
            </div>
            <div className="news-content">
              <p>Dataset and code released!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNewSection;

