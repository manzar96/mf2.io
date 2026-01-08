import React from 'react';
import './LeaderboardSection.css';

const LeaderboardSection = () => {
  const leaderboardData = [
    { rank: '👤', model: 'Human Baseline', parameters: '—', openSource: null, videoTranscript: 84.1, videoOnly: 90.5, isHuman: true },
    { rank: 1, model: 'Gemini 2.5 Pro', parameters: '—', openSource: false, videoTranscript: 60.6, videoOnly: 37.2 },
    { rank: 2, model: 'InternVL3', parameters: '78B', openSource: true, videoTranscript: 51.3, videoOnly: 22.1 },
    { rank: 3, model: 'GPT-4o', parameters: '—', openSource: false, videoTranscript: 46.8, videoOnly: 18.8 },
    { rank: 4, model: 'InternVL3.5', parameters: '38B', openSource: true, videoTranscript: 46.2, videoOnly: 26.6 },
    { rank: 5, model: 'Qwen2.5-VL', parameters: '72B', openSource: true, videoTranscript: 45.9, videoOnly: 29.7 },
    { rank: 6, model: 'Ovis2', parameters: '34B', openSource: true, videoTranscript: 45.6, videoOnly: 18.8 },
    { rank: 7, model: 'Claude 3.7 Sonnet', parameters: '—', openSource: false, videoTranscript: 44.6, videoOnly: 3.8 },
    { rank: 8, model: 'LLaVA-Video', parameters: '72B', openSource: true, videoTranscript: 41.8, videoOnly: 15.6 },
    { rank: 9, model: 'MiMo-VL-7B-RL', parameters: '7B', openSource: true, videoTranscript: 38.59, videoOnly: 25.81 },
    { rank: 10, model: 'InternVL3', parameters: '8B', openSource: true, videoTranscript: 36.9, videoOnly: 10.9 },
    { rank: 11, model: 'VideoLLaMA3', parameters: '7B', openSource: true, videoTranscript: 33.5, videoOnly: 20.5 },
    { rank: 12, model: 'Aria', parameters: '25B', openSource: true, videoTranscript: 33.41, videoOnly: 2.53 },
    { rank: 13, model: 'Qwen2.5-VL', parameters: '7B', openSource: true, videoTranscript: 32.8, videoOnly: 24.6 },
    { rank: 14, model: 'LLaVAOneVision1.5', parameters: '8B', openSource: true, videoTranscript: 26.4, videoOnly: 4.9 },
    { rank: 15, model: 'LLaVA-Video', parameters: '7B', openSource: true, videoTranscript: 19.0, videoOnly: 6.6 },
    { rank: 16, model: 'LongVILA-R1', parameters: '7B', openSource: true, videoTranscript: 16.9, videoOnly: 11.5 },
    { rank: 17, model: 'Kangaroo', parameters: '8B', openSource: true, videoTranscript: null, videoOnly: null, hasAsterisk: true },
    { rank: 18, model: 'LLaVA-Cinepile', parameters: '7B', openSource: true, videoTranscript: null, videoOnly: null, hasAsterisk: true },
  ];

  return (
    <section id="leaderboard-section" className="leaderboard-section">
      <div className="leaderboard-container">
        <h3 className="leaderboard-title">🏆 Leaderboard</h3>
        
        <div className="leaderboard-intro">
          <p className="evaluation-text">
            <strong className="evaluation-label">Evaluation:</strong> Instead of multiple-choice formats, we adopt a binary claim evaluation protocol. For each pair, models must correctly identify both the true and false claims. This reduces biases like answer ordering and enables a more precise assessment of reasoning. Our experiments demonstrate that both open-weight and closed state-of-the-art models fall well short of human performance, underscoring the relative ease of the task for humans and their superior ability to retain and reason over critical narrative information---an ability current VLMs lack.
          </p>
        </div>
        
        <div className="leaderboard-table-wrapper">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th className="rank-header">Rank</th>
                <th className="model-header">Model</th>
                <th className="parameters-header">Parameters</th>
                <th className="opensource-header">Open-source</th>
                <th className="score-header">
                  <div className="header-text">🏆 Pairwise Acc</div>
                  <div className="header-subtext">(Video+Transcript)</div>
                </th>
                <th className="score-header">
                  <div className="header-text">Pairwise Acc</div>
                  <div className="header-subtext">(Video Only)</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((entry, index) => (
                <tr key={index} className={entry.isHuman ? "leaderboard-row human-row" : "leaderboard-row"}>
                  <td className="rank-cell">
                    {entry.isHuman ? (
                      <span className="rank-icon">{entry.rank}</span>
                    ) : (
                      <span className="rank-number">{entry.rank}</span>
                    )}
                  </td>
                  <td className="model-cell">
                    {entry.model}
                    {entry.hasAsterisk && <span className="model-asterisk">*</span>}
                  </td>
                  <td className="parameters-cell">{entry.parameters}</td>
                  <td className="opensource-cell">
                    {entry.openSource === null ? (
                      <span>—</span>
                    ) : entry.openSource ? (
                      <span className="icon-check">✓</span>
                    ) : (
                      <span className="icon-cross">✗</span>
                    )}
                  </td>
                  <td className="score-cell">{entry.videoTranscript !== null ? entry.videoTranscript.toFixed(entry.videoTranscript % 1 === 0 ? 1 : 2) : '—'}</td>
                  <td className="score-cell">{entry.videoOnly !== null ? entry.videoOnly.toFixed(entry.videoOnly % 1 === 0 ? 1 : 2) : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="leaderboard-notes">
          <p className="note-text">
            <span className="note-asterisk">(*)</span> Results for these models are omitted, as they did not comply with the instruction prompt.
          </p>
          <p className="note-text">
            🚀 <strong>Add your model to the leaderboard!</strong> Reach out at {' '}
            <a href="mailto:emmanouil.zaranis@tecnico.ulisboa.pt?subject=MF2 Leaderboard Submission" className="contact-email">
              emmanouil.zaranis@tecnico.ulisboa.pt
            </a>
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default LeaderboardSection;

