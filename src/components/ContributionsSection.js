import React from 'react';
import './ContributionsSection.css';

const ContributionsSection = () => {
  

  return (
    <section className="results-section">
      <div className="results-container">

        <div className="key-insights">
          <h3 className="insights-title">🔑 Key Contributions</h3>
         
          <div className="insights-grid">

            <div className="insight-card">
              <div className="insight-icon">✍️</div>
              <h4 className="insight-heading">Fully Manual Annotation</h4>
              <p className="insight-text">
              MF2 is fully manually annotated, ensuring high-quality and consistent annotations across all movies. A large team of 26 annotators with expertise in NLP and Vision-Language Modeling were employed to create the claims. 
              </p>
            </div>

            <div className="insight-card">
              <div className="insight-icon">🌍</div>
              <h4 className="insight-heading">Open-Licensed Movies</h4>
              <p className="insight-text">
              All movies in MF2 are open-licensed, allowing for unrestricted use and reuse by the research community. This is a significant departure from previous benchmarks, which often have restrictive licensing terms and copyrighted content.
              </p>
            </div>
            
            
            
            <div className="insight-card">
              <div className="insight-icon">🧠</div>
              <h4 className="insight-heading">Memory Consolidation</h4>
              <p className="insight-text">
              MF2 is designed to assess memory consolidation capabilities by requiring models to recall key narrative information from movies, challenging them to integrate and retain complex visual and linguistic content over extended periods.
              </p>
            </div>

            <div className="insight-card">
              <div className="insight-icon">⏱️</div>
              <h4 className="insight-heading">Extensive Duration</h4>
              <p className="insight-text">
              To the best of our knowledge, MF2 constitutes the longest long-form video understanding benchmark reported in the literature, with movies spanning from 50 to 170 minutes.
              </p>
            </div>

            <div className="insight-card">
              <div className="insight-icon">🔍</div>
              <h4 className="insight-heading">Claim-Based Evaluation Protocol</h4>
              <p className="insight-text">
                We shift away from traditional multiple-choice formats and adopt a <strong>binary claim evaluation protocol</strong>, following <a href="https://aclanthology.org/2024.findings-acl.112/" target="_blank" rel="noopener noreferrer">Karpinska et al. (2024)</a>: for each contrastive pair, models must correctly identify both the true and false claims, avoiding biases like answer ordering and enabling this way a more precise assessment.
              </p>
            </div>

            <div className="insight-card">
              <div className="insight-icon">🤖 &nbsp;&nbsp;&nbsp;👤</div>
              <h4 className="insight-heading">Extensive Model Coverage and Human-Level Evaluation</h4>
              <p className="insight-text">
              We include a comprehensive suite of models spanning a wide range of architectures and parameter scales, from small to large models.
              Unlike previous benchmarks, we additionally establish a human-level baseline by measuring human performance on the full set of claims.
              </p>
            </div>

          </div>
        </div>

         {/* <div className="radar-chart-container">
           <img 
             src={`${process.env.PUBLIC_URL}/res.png`}
             alt="Benchmark Performance Comparison - Radar Chart showing TowerVision model performance across multiple benchmarks"
             className="radar-chart-image"
           />
         </div> */}

      </div>
    </section>
  );
};

export default ContributionsSection;
