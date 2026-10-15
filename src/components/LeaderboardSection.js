import React from 'react';
import './LeaderboardSection.css';

const formatScore = (value) => (value == null ? '—' : value.toFixed(1));

const LeaderboardSection = () => {
  // Ranked by pairwise accuracy on Video+Subs. Subs and Video are pairwise accuracy as well.
  const leaderboardData = [
    { rank: '👤', model: 'Human Baseline', parameters: '—', openSource: null, subs: null, videoOnly: null, videoSubs: 84.1, isHuman: true },
    { rank: '—', model: 'Random Baseline', parameters: '—', openSource: null, subs: 25.0, videoOnly: 25.0, videoSubs: 25.0, isBaseline: true },
    { rank: 1, model: 'Gemini 2.5 Pro', parameters: '—', openSource: false, subs: 58.9, videoOnly: 37.9, videoSubs: 63.8 },
    { rank: 2, model: 'InternVL3', parameters: '78B', openSource: true, subs: 49.0, videoOnly: 22.1, videoSubs: 51.3 },
    { rank: 3, model: 'GPT-4o', parameters: '—', openSource: false, subs: 48.8, videoOnly: 19.5, videoSubs: 49.8 },
    { rank: 4, model: 'Ovis2', parameters: '34B', openSource: true, subs: 47.2, videoOnly: 20.7, videoSubs: 48.5 },
    { rank: 5, model: 'Qwen2.5-VL', parameters: '72B', openSource: true, subs: 37.6, videoOnly: 29.7, videoSubs: 47.5 },
    { rank: 6, model: 'InternVL3.5', parameters: '38B', openSource: true, subs: 47.5, videoOnly: 26.6, videoSubs: 46.2 },
    { rank: 7, model: 'Qwen3VL-IT', parameters: '30B', openSource: true, subs: 33.5, videoOnly: 19.2, videoSubs: 43.8 },
    { rank: 8, model: 'Molmo2', parameters: '8B', openSource: true, subs: 41.0, videoOnly: 28.3, videoSubs: 43.0 },
    { rank: 9, model: 'LLaVA-Video', parameters: '72B', openSource: true, subs: 41.7, videoOnly: 15.6, videoSubs: 41.8 },
    { rank: 10, model: 'Gemma3', parameters: '27B', openSource: true, subs: 42.3, videoOnly: 31.5, videoSubs: 39.7 },
    { rank: 11, model: 'MiMo-VL-7B-RL', parameters: '7B', openSource: true, subs: 36.4, videoOnly: 25.8, videoSubs: 38.6 },
    { rank: 12, model: 'InternVL3.5', parameters: '8B', openSource: true, subs: 39.2, videoOnly: 18.9, videoSubs: 37.2 },
    { rank: 13, model: 'VideoLLaMA3', parameters: '7B', openSource: true, subs: 36.3, videoOnly: 21.1, videoSubs: 36.1 },
    { rank: 14, model: 'Aria', parameters: '25B (3.9B)', openSource: true, subs: 36.2, videoOnly: 2.5, videoSubs: 33.4 },
    { rank: 15, model: 'Qwen2.5-VL', parameters: '7B', openSource: true, subs: 31.7, videoOnly: 24.5, videoSubs: 32.8 },
    { rank: 16, model: 'GLM-4.5V-FP8', parameters: '108B', openSource: true, subs: 38.4, videoOnly: 26.6, videoSubs: 31.4 },
    { rank: 17, model: 'LLaVA-OneVision1.5', parameters: '8B', openSource: true, subs: 37.4, videoOnly: 4.9, videoSubs: 26.4 },
    { rank: 18, model: 'LLaVA-Video', parameters: '7B', openSource: true, subs: 20.5, videoOnly: 6.5, videoSubs: 19.1 },
    { rank: 19, model: 'LongVILA-R1', parameters: '7B', openSource: true, subs: 9.8, videoOnly: 11.5, videoSubs: 16.9 },
    { rank: '—', model: 'Phi4', parameters: '14B', openSource: true, subs: 26.8, videoOnly: null, videoSubs: null, hasAsterisk: true },
    { rank: '—', model: 'mPLUG-Owl3', parameters: '7B', openSource: true, subs: null, videoOnly: null, videoSubs: null, hasAsterisk: true },
    { rank: '—', model: 'Kangaroo', parameters: '8B', openSource: true, subs: null, videoOnly: null, videoSubs: null, hasAsterisk: true },
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
                <th className="opensource-header">Open-weight</th>
                <th className="score-header">
                  <div className="header-text">🏆 Pairwise Acc</div>
                  <div className="header-subtext">(Video+Subs)</div>
                </th>
                <th className="score-header">
                  <div className="header-text">Pairwise Acc</div>
                  <div className="header-subtext">(Video Only)</div>
                </th>
                <th className="score-header">
                  <div className="header-text">Pairwise Acc</div>
                  <div className="header-subtext">(Transcript Only)</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((entry, index) => (
                <tr
                  key={index}
                  className={[
                    'leaderboard-row',
                    entry.isHuman ? 'human-row' : '',
                    entry.rank === 1 ? 'rank-1' : '',
                    entry.rank === 2 ? 'rank-2' : '',
                    entry.rank === 3 ? 'rank-3' : '',
                  ].filter(Boolean).join(' ')}
                >
                  <td className="rank-cell">
                    {typeof entry.rank === 'number' ? (
                      <span className="rank-number">{entry.rank}</span>
                    ) : (
                      <span className={entry.isHuman ? 'rank-icon' : 'rank-dash'}>{entry.rank}</span>
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
                  <td className="score-cell">{formatScore(entry.videoSubs)}</td>
                  <td className="score-cell">{formatScore(entry.videoOnly)}</td>
                  <td className="score-cell">{formatScore(entry.subs)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="leaderboard-notes">
          <p className="note-text">
            <span className="note-asterisk">(*)</span> These models failed to follow the instruction prompt on a substantial fraction of samples, so missing scores are not reported. Phi4 reports transcript-only results only.
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

