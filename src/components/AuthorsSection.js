import React from 'react';
import './AuthorsSection.css';

const AuthorsSection = () => {
  return (
    <section className="authors-main-section">
      <div className="authors-main-container">
        <h3 className="authors-main-title">👥 Authors</h3>
        
        <div className="authors-container">
          <div className="authors-group">
            <span className="author-name author-primary">
              <a 
                href="https://manzar96.github.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="author-name author-link author-primary"
              > Emmanouil Zaranis
              </a><sup>1,2</sup>
            </span>
            <span className="author-name author-primary">
              António Farinhas<sup>1,2,17</sup>
            </span>
            <span className="author-name author-primary">
              Saul Santos<sup>1,2</sup>
            </span>
            <span className="author-name author-primary">
              Beatriz Canaverde<sup>1,2</sup>
            </span>
            <span className="author-name author-primary">
              Miguel Moura Ramos<sup>1,2</sup>
            </span>
          </div>
          
          <div className="authors-group">
            <span className="author-name">Aditya K. Surikuchi<sup>3</sup></span>
            <span className="author-name">André Viveiros<sup>1,2</sup></span>
            <span className="author-name">Baohao Liao<sup>4</sup></span>
            <span className="author-name">Elena Bueno-Benito<sup>5</sup></span>
            <span className="author-name">Nithin Sivakumaran<sup>6</sup></span>
            <span className="author-name">Pavlo Vasylenko<sup>1,2</sup></span>
            <span className="author-name">Shoubin Yu<sup>6</sup></span>
            <span className="author-name">Sonal Sannigrahi<sup>1,2</sup></span>
            <span className="author-name">Wafaa Mohammed<sup>4</sup></span>
          </div>
          
          <div className="authors-group">
            <span className="author-name">Ben Peters<sup>2</sup></span>
            <span className="author-name">Danae Sánchez Villegas<sup>7</sup></span>
            <span className="author-name">Elias Stengel-Eskin<sup>6</sup></span>
            <span className="author-name">Giuseppe Attanasio<sup>1,2</sup></span>
            <span className="author-name">Jaehong Yoon<sup>16</sup></span>
            <span className="author-name">Stella Frank<sup>7,8</sup></span>
            <span className="author-name">Alessandro Suglia<sup>9</sup></span>
            <span className="author-name">Chrysoula Zerva<sup>1,2,13</sup></span>
            <span className="author-name">Desmond Elliott<sup>7,8</sup></span>
          </div>

          <div className="authors-group">
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
      
        <div className="affiliations">
          <div className="affiliation-group">
            <img src={`${process.env.PUBLIC_URL}/institution_logos/ist.jpg`} alt="IST" className="affiliation-logo first-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/it.png`} alt="IT" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/illc.png`} alt="ILLC" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/iri_industrial.png`} alt="IRI" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/unc.svg`} alt="UNC" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/uni_compenhagen.png`} alt="University of Copenhagen" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/PCAI.jpg`} alt="Pioneer Center for AI" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/heriot-watt.png`} alt="Heriot-Watt" className="affiliation-logo logo-no-background" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/UniBZ-Logo.svg.png`} alt="UniBZ" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/transperfect.jpg`} alt="TransPerfect" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/sword.png`} alt="Sword Health" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/ellis.jpg`} alt="ELLIS" className="affiliation-logo" />
            <img src={`${process.env.PUBLIC_URL}/institution_logos/NTU_Logo.webp`} alt="NTU" className="affiliation-logo last-logo" />
          </div>
        </div>
        
        <div className="affiliations-text">
          <div className="affiliation-list">
            <div className="affiliation-item"><sup>1</sup> Instituto Superior Técnico, Universidade de Lisboa</div>
            <div className="affiliation-item"><sup>2</sup> Instituto de Telecomunicações</div>
            <div className="affiliation-item"><sup>3</sup> ILLC, University of Amsterdam</div>
            <div className="affiliation-item"><sup>4</sup> Language Technology Lab, University of Amsterdam</div>
            <div className="affiliation-item"><sup>5</sup> Institut de Robòtica i Informàtica Industrial, CSIC-UPC</div>
            <div className="affiliation-item"><sup>6</sup> UNC Chapel Hill</div>
            <div className="affiliation-item"><sup>7</sup> University of Copenhagen</div>
            <div className="affiliation-item"><sup>8</sup> Pioneer Center for AI</div>
            <div className="affiliation-item"><sup>9</sup> Heriot-Watt University</div>
            <div className="affiliation-item"><sup>10</sup> Free University of Bozen-Bolzano</div>
            <div className="affiliation-item"><sup>11</sup> TransPerfect</div>
            <div className="affiliation-item"><sup>12</sup> ELLIS Unit Amsterdam</div>
            <div className="affiliation-item"><sup>13</sup> ELLIS Unit Lisbon</div>
            <div className="affiliation-item"><sup>14</sup> ELLIS Unit Trento</div>
            <div className="affiliation-item"><sup>15</sup> ELLIS Unit Barcelona</div>
            <div className="affiliation-item"><sup>16</sup> Nanyang Technological University</div>
            <div className="affiliation-item"><sup>17</sup> Sword Health</div>
          </div>
        </div>
        
        {/* <div className="corresponding-authors">
          <div className="corresponding-text">
            <sup>*</sup>Joint first authors.
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AuthorsSection;

