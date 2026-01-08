import React from 'react';
import './App.css';

import IntroSection from './components/IntroSection';
import WhatsNewSection from './components/WhatsNewSection';
import AbstractSection from './components/AbstractSection';
import MoviePreviewSection from './components/MoviePreviewSection';
import ContributionsSection from './components/ContributionsSection';
import DatasetCompositionSection from './components/DatasetCompositionSection';
import LeaderboardSection from './components/LeaderboardSection';
import AblationsSection from './components/AblationsSection';
import AuthorsSection from './components/AuthorsSection';
import CitationSection from './components/CitationSection';
import ContactSection from './components/ContactSection';
// import ResultsSection from './components/ResultsSection';
// import ModelStructureSection from './components/ModelStructureSection';
// import DataSection from './components/DataSection';

function App() {
  return (
    <div className="App">
      <IntroSection />
      <WhatsNewSection />
      {/* <AbstractSection /> */}
      <MoviePreviewSection />
      <ContributionsSection/>
      <DatasetCompositionSection />
      <LeaderboardSection />
      <AblationsSection />
      <AuthorsSection />
      <CitationSection />
      <ContactSection />
      {/* <ModelStructureSection /> */}
      {/* <DataSection /> */}
    </div>
  );
}

export default App;
