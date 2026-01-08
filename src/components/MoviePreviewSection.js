import React from 'react';
import VideoPlayerCarousel from './VideoPlayerCarousel';
import './MoviePreviewSection.css';

const MoviePreviewSection = () => {
  return (
    <section className="movie-preview-section">
      <div className="movie-preview-container">
        <h3 className="movie-preview-title">🧩 What our dataset consists of?</h3>
        <div className="movie-preview-intro">
          <p className="intro-text">
            MF2 is a benchmark designed to evaluate whether models can <strong>comprehend</strong>, <strong>consolidate</strong>, and <strong>recall</strong> key narrative information by integrating both visual and linguistic modalities. It consists of <strong>53 full-length, open-licensed movies</strong> (50–170 minutes each), paired with fully manually constructed claim pairs—one true (<strong className="fact-text">fact</strong>) and one plausible but false (<strong className="fib-text">fib</strong>)—totaling <strong>868 pairs</strong>.
            These claims target core narrative elements such as character motivations and emotions, causal chains, and event order, focusing on <strong>memorable moments that humans can recall without rewatching the movie</strong>. 
             Annotators have also labeled each claim with the relevant comprehension dimensions and the reasoning granularity required (see <a href="#dataset-composition-section">Dataset Composition</a>),  indicating whether the answer should be grounded on a single scene, multiple scenes, or across the entire movie.
          </p>
        </div>
        <VideoPlayerCarousel />
      </div>
    </section>
  );
};

export default MoviePreviewSection;

