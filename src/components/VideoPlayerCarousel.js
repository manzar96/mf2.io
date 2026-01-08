import React, { useState, useRef } from 'react';
import './VideoPlayerCarousel.css';

const VideoPlayerCarousel = () => {
  const [playingStates, setPlayingStates] = useState([false, false, false, false]);
  const [mutedStates, setMutedStates] = useState([true, true, true, true]);
  const videoRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
  const sceneLabels = [
    "Planning the sabotage",
    "Meeting in cinema",
    "Bus explosion",
    "Explosion in cinema"
  ];

  const toggleVideo = (index) => {
    const video = videoRefs[index].current;
    if (!video) return;

    const newPlayingStates = [...playingStates];
    
    if (newPlayingStates[index]) {
      video.pause();
      newPlayingStates[index] = false;
    } else {
      // Pause all other videos
      videoRefs.forEach((ref, i) => {
        if (i !== index && ref.current) {
          ref.current.pause();
          newPlayingStates[i] = false;
        }
      });
      video.play();
      newPlayingStates[index] = true;
    }
    
    setPlayingStates(newPlayingStates);
  };

  const toggleMute = (index) => {
    const video = videoRefs[index].current;
    if (!video) return;

    const newMutedStates = [...mutedStates];
    newMutedStates[index] = !newMutedStates[index];
    video.muted = newMutedStates[index];
    setMutedStates(newMutedStates);
  };

  return (
    <div className="video-player-section">
      <div className="video-player-container">
        <h4 className="carousel-subtitle">🎬 An illustrative Example from <i>"Sabotage (Hitchcock)"</i></h4>
        
        <div className="video-grid">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="video-box">
              <div className="video-wrapper">
                <video
                  ref={videoRefs[index]}
                  className="video-player"
                  src={`${process.env.PUBLIC_URL}/movie_clips/${index + 1}.mp4`}
                  loop
                  muted
                  playsInline
                  onPlay={() => {
                    const newStates = [...playingStates];
                    newStates[index] = true;
                    setPlayingStates(newStates);
                  }}
                  onPause={() => {
                    const newStates = [...playingStates];
                    newStates[index] = false;
                    setPlayingStates(newStates);
                  }}
                />
                <div className="video-overlay">
                  <button
                    className="video-play-button"
                    onClick={() => toggleVideo(index)}
                    aria-label={playingStates[index] ? 'Pause' : 'Play'}
                  >
                    {playingStates[index] ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    )}
                  </button>
                  <button
                    className="video-sound-button"
                    onClick={() => toggleMute(index)}
                    aria-label={mutedStates[index] ? 'Unmute' : 'Mute'}
                  >
                    {mutedStates[index] ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="video-label">{sceneLabels[index]}</div>
            </div>
          ))}
        </div>
        
        <div className="example-details">
          <div className="claims-container">
            <div className="claim-item fact-claim">
              <span className="claim-icon">✓</span>
              <span className="claim-label">Fact:</span>
              <span className="claim-text">The second bomb exploded in the cinema.</span>
            </div>
            <div className="claim-item fib-claim">
              <span className="claim-icon">✗</span>
              <span className="claim-label">Fib:</span>
              <span className="claim-text">There was a second bomb about to explode, but it didn't.</span>
            </div>
          </div>
          
          <div className="granularity-info">
            <span className="granularity-icon">🔍</span>
            <strong>Granularity:</strong> Global
          </div>
          
          <div className="spoiler-alert">
            <div className="spoiler-header">
              <span className="spoiler-icon">🚨</span>
              <strong>Spoiler Alert:</strong>
            </div>
            <p className="spoiler-text">
              Mr. Verloc and the terrorist meet at the aquarium, where the terrorist first mentions the plan to explode a bomb (he mentions "a parcel of fireworks" and asks Mr. Verloc to meet his friend the bombmaker). The terrorists meet again in the cinema, to discuss about the sabotage. Later in the movie the explosion happens inside the bus. While the second explosion happens inside the cinema. Gemini fails to predict both claims correctly in every modality setting.
            </p>
          </div>
          
          <div className="gemini-predictions">
            <div className="gemini-header">
              <img src={`${process.env.PUBLIC_URL}/gemini-logo.png`} alt="Gemini" className="gemini-icon" />
              <strong>Gemini 2.5 Pro Predictions:</strong>
            </div>
            
            <div className="prediction-item">
              <div className="prediction-label">
                <span className="claim-icon fact-icon">✓</span>
                <strong>Fact Prediction:</strong>
              </div>
              <p className="prediction-text">
                The first act of sabotage was the power station blackout. The second planned act of sabotage, referred to as "a parcel of fireworks", was to be left in the cloakroom at Piccadilly Circus underground station [...] This parcel, carried by Stevie on a bus, explodes on the bus at 1:45. A newspaper headline later confirms "WEST END BOMB SENSATION. Fully-laden bus was blown up in Piccadilly this afternoon". [...] An explosion then occurs at the cinema, as described by an officer: "The roof's gone. The whole of the back of the place - clean blown off". This is a separate, third bomb event. Therefore, the second bomb (the one Stevie was carrying) exploded on the bus, not in the cinema. The explosion in the cinema was a distinct event caused by a different bomb wielded by the bird shop owner.
              </p>
              <div className="prediction-result wrong">
                <strong>Prediction:</strong> FALSE <span className="ground-truth">(Ground-truth: TRUE)</span>
              </div>
            </div>
            
            <div className="prediction-item">
              <div className="prediction-label">
                <span className="claim-icon fib-icon">✗</span>
                <strong>Fib Prediction:</strong>
              </div>
              <p className="prediction-text">
                The statement claims: "There was a second bomb about to explode, but it didn't." Let's analyze the bombs in the film: 1. The first act of sabotage is the power station blackout. While not explicitly shown as a bomb explosion, it is an act of "wilful destruction." 2. The second major plot device is the bomb intended for Piccadilly Circus on Lord Mayor's Show day. Verloc gives this bomb to Stevie. This bomb explodes prematurely on the bus, killing Stevie and many others [...]. So this bomb *did* explode. 3. The third instance involving a bomb is at the cinema, where the Professor (the bomb maker) is cornered by the police. [...] This bomb *does* explode [...]. In all instances where a bomb is primed or ready for its purpose within the narrative, it either explodes (bus bomb, Professor's bomb in the cinema) or fulfills its sabotage (power station). There is no scene in the film where a bomb is "about to explode" and then "didn't." The bombs that are set up to go off, do go off. Therefore, the statement is false.
              </p>
              <div className="prediction-result correct">
                <strong>Prediction:</strong> FALSE <span className="ground-truth">(Ground-truth: FALSE)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerCarousel;

