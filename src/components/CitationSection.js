import React, { useState } from 'react';
import './CitationSection.css';

const CitationSection = () => {
  const [copied, setCopied] = useState(false);

//   const bibtex = `@misc{zaranis2025moviefactsfibsmf2,
//       title={Movie Facts and Fibs (MF$^2$): A Benchmark for Long Movie Understanding}, 
//       author={Emmanouil Zaranis and António Farinhas and Saul Santos and Beatriz Canaverde and Miguel Moura Ramos and Aditya K Surikuchi and André Viveiros and Baohao Liao and Elena Bueno-Benito and Nithin Sivakumaran and Pavlo Vasylenko and Shoubin Yu and Sonal Sannigrahi and Wafaa Mohammed and Ben Peters and Danae Sánchez Villegas and Elias Stengel-Eskin and Giuseppe Attanasio and Jaehong Yoon and Stella Frank and Alessandro Suglia and Chrysoula Zerva and Desmond Elliott and Mariella Dimiccoli and Mohit Bansal and Oswald Lanz and Raffaella Bernardi and Raquel Fernández and Sandro Pezzelle and Vlad Niculae and André F. T. Martins},
//       year={2025},
//       eprint={2506.06275},
//       archivePrefix={arXiv},
//       primaryClass={cs.CV},
//       url={https://arxiv.org/abs/2506.06275}, 
// }`;

  const bibtex = String.raw`@inproceedings{zaranis-etal-2026-well,
  title = "How Well Do Vision-Language Models Understand Movies?",
  author = "Zaranis, Emmanouil  and
    Farinhas, Ant{\'o}nio  and
    Santos, Saul  and
    Canaverde, Beatriz  and
    Ramos, Miguel Moura  and
    Mohammed, Wafaa  and
    Attanasio, Giuseppe  and
    Zerva, Chrysoula  and
    Sivakumaran, Nithin  and
    Yu, Shoubin  and
    Bueno-Benito, Elena  and
    Surikuchi, Aditya K  and
    Peters, Ben  and
    Sanchez Villegas, Danae  and
    Viveiros, Andre G.  and
    Vasylenko, Pavlo  and
    Liao, Baohao  and
    Sannigrahi, Sonal  and
    Yoon, Jaehong  and
    Stengel-Eskin, Elias  and
    Dimiccoli, Mariella  and
    Lanz, Oswald  and
    Suglia, Alessandro  and
    Bansal, Mohit  and
    Pezzelle, Sandro  and
    Frank, Stella  and
    Niculae, Vlad  and
    Elliott, Desmond  and
    Bernardi, Raffaella  and
    Fern{\'a}ndez, Raquel  and
    Martins, Andre",
  editor = "Lee, Hung-Yi  and
    Dev, Sunipa  and
    Li, Junyi Jessy  and
    Elliott, Desmond",
  booktitle = "Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing",
  month = oct,
  year = "2026",
  address = "Budapest, Hungary",
  publisher = "Association for Computational Linguistics",
  url = "https://aclanthology.org/2026.emnlp-main.1702/",
  doi = "10.18653/2026.emnlp-main.1702",
  pages = "38762--38801",
  ISBN = "979-8-89176-459-0",
  abstract = "Vision-language models (VLMs) can increasingly handle extended contexts and answer questions about long videos{---}but can they understand the narrative structure of movies as humans do? To investigate this question, we introduce ${'${MF}'}^2$ ($\textit{Movie Facts and Fibs}$), a fully manually curated benchmark designed to evaluate whether models can identify, recall, and comprehend information central to the movie{'}s storyline, using both the visual and textual modalities. ${'${MF}'}^2$ includes over 50 $\textit{open-licensed}$ movies, each paired with manually constructed sets of claim pairs: one true claim ($\textit{fact}$) and one plausible but false ($\textit{fib}$), totaling over 850 pairs. Our analysis across 20 open-source and 2 proprietary models reveals a substantial gap relative to human performance. While subtitles provide a strong signal for narrative understanding, other textual sources (e.g., synopses) are less informative. In contrast, when visual information is distributed across the entire movie and jointly embedded with subtitles, models struggle to identify and effectively use the relevant content. However, when the visual input is restricted to claim-relevant visual content, models improve significantly, indicating substantial room for improvement in processing large multimodal contexts and distinguishing relevant from irrelevant information. Overall, our findings highlight persistent challenges in multimodal narrative understanding for current VLMs. We release our data and code to support further research in this direction."
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

