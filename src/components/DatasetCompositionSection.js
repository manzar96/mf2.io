import React from 'react';
import './DatasetCompositionSection.css';

const DatasetCompositionSection = () => {
  const granularityData = [
    { label: 'Single-scene', percentage: 49.4, color: '#3b82f6' },
    { label: 'Multi-scene', percentage: 43.8, color: '#8b5cf6' },
    { label: 'Global', percentage: 6.8, color: '#ec4899' }
  ];

  const comprehensionData = [
    { label: 'Emotion Understanding', value: 10.8, color: '#3b82f6' },
    { label: 'Temporal Perception', value: 11.2, color: '#8b5cf6' },
    { label: 'Causal Reasoning', value: 20.5, color: '#ec4899' },
    { label: 'Event/Entity Understanding', value: 57.1, color: '#f59e0b' }
  ];

  // Calculate pie chart paths
  const createPieChart = (data) => {
    let cumulativePercent = 0;
    const center = 100;
    const radius = 80;

    return data.map((slice, index) => {
      const startAngle = (cumulativePercent * 360) / 100;
      const sliceAngle = (slice.percentage * 360) / 100;
      cumulativePercent += slice.percentage;

      const startAngleRad = (startAngle - 90) * (Math.PI / 180);
      const endAngleRad = (startAngle + sliceAngle - 90) * (Math.PI / 180);

      const x1 = center + radius * Math.cos(startAngleRad);
      const y1 = center + radius * Math.sin(startAngleRad);
      const x2 = center + radius * Math.cos(endAngleRad);
      const y2 = center + radius * Math.sin(endAngleRad);

      const largeArcFlag = sliceAngle > 180 ? 1 : 0;

      const pathData = [
        `M ${center} ${center}`,
        `L ${x1} ${y1}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
        'Z'
      ].join(' ');

      return { pathData, color: slice.color };
    });
  };

  const pieSlices = createPieChart(granularityData);

  return (
    <section id="dataset-composition-section" className="dataset-composition-section">
      <div className="dataset-composition-container">
        <h3 className="dataset-composition-title">🍰 Dataset Composition</h3>
        
        <p className="dataset-composition-intro">
          MF2 comprises manually annotated claim pairs that span diverse narrative elements across full-length movies. 
          Our claims are categorized by <strong>granularity</strong> (scene-level to global narrative) and 
          <strong>comprehension dimensions</strong> (emotions, causality, temporal dynamics, and entity relationships), 
          ensuring comprehensive evaluation of long-form video understanding.
        </p>

        <div className="charts-container">
          {/* Pie Chart - Claim Granularity */}
          <div className="chart-box">
            <h4 className="chart-title">Claim Granularity</h4>
            <div className="pie-chart-placeholder">
              <svg viewBox="0 0 200 200" className="pie-chart-svg">
                {pieSlices.map((slice, index) => (
                  <path
                    key={index}
                    d={slice.pathData}
                    fill={slice.color}
                    stroke="white"
                    strokeWidth="0.5"
                  />
                ))}
              </svg>
            </div>
            <div className="legend">
              {granularityData.map((item, index) => (
                <div key={index} className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: item.color }}></div>
                  <span className="legend-label">{item.label}</span>
                  <span className="legend-value">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bar Chart - Comprehension Dimensions */}
          <div className="chart-box">
            <h4 className="chart-title">Comprehension Dimensions</h4>
            <div className="bar-chart-placeholder">
              <div className="bar-chart-container">
                {comprehensionData.map((item, index) => (
                  <div key={index} className="bar-item">
                    <div className="bar-label">{item.label}</div>
                    <div className="bar-wrapper">
                      <div 
                        className="bar-fill" 
                        style={{ 
                          width: `${item.value}%`,
                          backgroundColor: item.color 
                        }}
                      >
                        <span className="bar-value">{item.value}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="chart-note">
              <span className="note-asterisk">*</span> A claim pair might belong to more than one comprehension dimension.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatasetCompositionSection;

