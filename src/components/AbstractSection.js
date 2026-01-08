import React from 'react';
import './AbstractSection.css';

const AbstractSection = () => {
  return (
    <section className="abstract-section">
      <div className="abstract-container">
        <h3 className="section-subtitle">Abstract</h3>
        <p className="abstract-text">
          Despite recent progress in vision-language models (VLMs), holistic understanding of long-form video content remains a significant challenge, partly due to limitations in current benchmarks.
          Many focus on peripheral, "needle-in-a-haystack" details, encouraging context-insensitive retrieval over deep comprehension. Others rely on large-scale, semi-automatically generated questions (often produced by language models themselves) that are easier for models to answer but fail to reflect genuine understanding.
          In this paper, we introduce <strong>MF2</strong>, a new benchmark for evaluating whether models can comprehend, consolidate, and recall key narrative information---requiring integration of both visual and linguistic modalities---from full-length movies (<strong>50-170 minutes long</strong>). 
          MF2 includes over 50 full-length, <strong>open-licensed</strong> movies, each paired with manually constructed sets of claim pairs---one true (fact) and one plausible but false (fib), totalling over 850 pairs.
          These claims target core narrative elements such as <strong>character motivations</strong> and <strong>emotions</strong>, <strong>causal chains</strong>, and <strong>event order</strong>, and refer to <strong>memorable moments</strong> that humans can recall without rewatching the movie.
          Instead of multiple-choice formats, we adopt a binary claim evaluation protocol: for each pair, models must correctly identify both the true and false claims.
          This reduces biases like answer ordering and enables a more precise assessment of reasoning.
          Our experiments demonstrate that both open-weight and closed state-of-the-art models fall well short of human performance, underscoring the relative ease of the task for humans and their superior ability to retain and reason over critical narrative information---an ability current VLMs lack.
        </p>
      </div>
    </section>
  );
};

export default AbstractSection;

