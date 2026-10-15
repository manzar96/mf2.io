import React from 'react';
import './AuthorsSection.css';

const AuthorsSection = () => {
  return (
    <section className="authors-main-section">
      <div className="authors-main-container">
        <h3 className="authors-main-title">👥 Cast & Crew: a large collaboration across 19 institutions</h3>
        
        <div className="authors-container">
          <div className="authors-group authors-group-lead">
            <span className="author-name author-primary">
              <a
                href="https://manzar96.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="author-name author-link author-primary"
              >Emmanouil Zaranis</a><sup>1,2,*</sup>
            </span>
            <span className="author-name author-primary">António Farinhas<sup>18,*</sup></span>
            <span className="author-name author-primary">Saul Santos<sup>1,2,*</sup></span>
            <span className="author-name author-primary">Beatriz Canaverde<sup>1,2,*</sup></span>
            <span className="author-name author-primary">Miguel Moura Ramos<sup>1,2,*</sup></span>
          </div>

          <div className="authors-group">
            <span className="author-name">Aditya K Surikuchi<sup>3</sup></span>
            <span className="author-name">André Viveiros<sup>1,2</sup></span>
            <span className="author-name">Baohao Liao<sup>4</sup></span>
            <span className="author-name">Elena Bueno-Benito<sup>5</sup></span>
            <span className="author-name">Nithin Sivakumaran<sup>6</sup></span>
            <span className="author-name">Pavlo Vasylenko<sup>1,2</sup></span>
            <span className="author-name">Shoubin Yu<sup>6</sup></span>
            <span className="author-name">Sonal Sannigrahi<sup>1,2</sup></span>
            <span className="author-name">Wafaa Mohammed<sup>4</sup></span>
            <span className="author-name">Ben Peters<sup>11</sup></span>
            <span className="author-name">Danae Sánchez Villegas<sup>7</sup></span>
            <span className="author-name">Elias Stengel-Eskin<sup>17</sup></span>
            <span className="author-name">Giuseppe Attanasio<sup>2</sup></span>
            <span className="author-name">Jaehong Yoon<sup>16</sup></span>
            <span className="author-name">Stella Frank<sup>7,8</sup></span>
            <span className="author-name">Alessandro Suglia<sup>9</sup></span>
          </div>

          <div className="authors-group">
            <span className="author-name">Chrysoula Zerva<sup>2,13,19</sup></span>
            <span className="author-name">Desmond Elliott<sup>7,8</sup></span>
            <span className="author-name">Mariella Dimiccoli<sup>5,15</sup></span>
            <span className="author-name">Mohit Bansal<sup>6</sup></span>
            <span className="author-name">Oswald Lanz<sup>10,14</sup></span>
            <span className="author-name">Raffaella Bernardi<sup>10,14</sup></span>
            <span className="author-name">Raquel Fernández<sup>3,12</sup></span>
            <span className="author-name">Sandro Pezzelle<sup>3,12</sup></span>
            <span className="author-name">Vlad Niculae<sup>4,12</sup></span>
            <span className="author-name">André F. T. Martins<sup>1,2,11,13</sup></span>
          </div>
        </div>

        <p className="equal-contribution"><sup>*</sup>Equal contribution.</p>
      
        <div className="affiliations">
          <div className="affiliation-group">
            <img src={`${process.env.PUBLIC_URL}/institution_logos/tecnico.png`} alt="Técnico Lisboa" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/it.png`} alt="Instituto de Telecomunicações" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/illc.png`} alt="Institute for Logic, Language and Computation" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/amsterdam.png`} alt="University of Amsterdam" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/iri.png`} alt="Institut de Robòtica i Informàtica Industrial" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/unc.png`} alt="UNC Chapel Hill" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/copenhagen.png`} alt="University of Copenhagen" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/pioneer.png`} alt="Pioneer Centre for AI" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/edinburgh.png`} alt="University of Edinburgh" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/unibz.png`} alt="Free University of Bozen-Bolzano" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/transperfect.png`} alt="TransPerfect" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/ellis.png`} alt="ELLIS" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/ntu.png`} alt="Nanyang Technological University" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/sword.png`} alt="Sword Health" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/ut-austin.png`} alt="The University of Texas at Austin" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/ntua.png`} alt="National Technical University of Athens" className="affiliation-logo" />
          </div>
        </div>
        
        <div className="affiliations-text">
          <div className="affiliation-list">
            <div className="affiliation-row">
              <div className="affiliation-item"><sup>1</sup> Instituto Superior Técnico, Universidade de Lisboa</div>
              <div className="affiliation-item"><sup>2</sup> Instituto de Telecomunicações</div>
              <div className="affiliation-item"><sup>3</sup> ILLC, University of Amsterdam</div>
              <div className="affiliation-item"><sup>4</sup> Language Technology Lab, University of Amsterdam</div>
              <div className="affiliation-item"><sup>5</sup> Institut de Robòtica i Informàtica Industrial, CSIC-UPC</div>
              <div className="affiliation-item"><sup>6</sup> UNC Chapel Hill</div>
              <div className="affiliation-item"><sup>7</sup> University of Copenhagen</div>
            </div>
            <div className="affiliation-row">
              <div className="affiliation-item"><sup>8</sup> Pioneer Center for AI</div>
              <div className="affiliation-item"><sup>9</sup> University of Edinburgh</div>
              <div className="affiliation-item"><sup>10</sup> Free University of Bozen-Bolzano</div>
              <div className="affiliation-item"><sup>11</sup> TransPerfect</div>
              <div className="affiliation-item"><sup>12</sup> ELLIS Unit Amsterdam</div>
              <div className="affiliation-item"><sup>13</sup> ELLIS Unit Lisbon</div>
            </div>
            <div className="affiliation-row">
              <div className="affiliation-item"><sup>14</sup> ELLIS Unit Trento</div>
              <div className="affiliation-item"><sup>15</sup> ELLIS Unit Barcelona</div>
              <div className="affiliation-item"><sup>16</sup> Nanyang Technological University</div>
              <div className="affiliation-item"><sup>17</sup> The University of Texas at Austin</div>
              <div className="affiliation-item"><sup>18</sup> Sword Health</div>
              <div className="affiliation-item"><sup>19</sup> National Technical University of Athens</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AuthorsSection;

