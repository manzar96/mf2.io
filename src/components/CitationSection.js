import React, { useState } from 'react';
import './CitationSection.css';

const CitationSection = () => {
  const [copied, setCopied] = useState(false);

  const bibtex = `@misc{zaranis2025moviefactsfibsmf2,
      title={Movie Facts and Fibs (MF$^2$): A Benchmark for Long Movie Understanding}, 
      author={Emmanouil Zaranis and António Farinhas and Saul Santos and Beatriz Canaverde and Miguel Moura Ramos and Aditya K Surikuchi and André Viveiros and Baohao Liao and Elena Bueno-Benito and Nithin Sivakumaran and Pavlo Vasylenko and Shoubin Yu and Sonal Sannigrahi and Wafaa Mohammed and Ben Peters and Danae Sánchez Villegas and Elias Stengel-Eskin and Giuseppe Attanasio and Jaehong Yoon and Stella Frank and Alessandro Suglia and Chrysoula Zerva and Desmond Elliott and Mariella Dimiccoli and Mohit Bansal and Oswald Lanz and Raffaella Bernardi and Raquel Fernández and Sandro Pezzelle and Vlad Niculae and André F. T. Martins},
      year={2025},
      eprint={2506.06275},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2506.06275}, 
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="citation-section">
      <div className="citation-container">
        <h3 className="citation-title">📚 Citation</h3>
        
        <p className="citation-intro">
          Please cite our paper if you found our work interesting or used MF2 in your research.
        </p>

        <div className="bibtex-container">
          <button className="copy-button" onClick={handleCopy}>
            {copied ? '✓ Copied!' : '📋 Copy'}
          </button>
          <pre className="bibtex-code">
            <code>{bibtex}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default CitationSection;

