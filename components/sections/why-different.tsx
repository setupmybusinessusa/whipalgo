'use client';

import { CheckCircle, X } from 'lucide-react';

export default function WhyDifferentSection() {
  const features = [
    {
      feature: 'Confirmation signals (not just buy/sell)',
      whipAlgo: <CheckCircle size={16} style={{ color: '#00d68f' }} />,
      generic: 'Rarely',
    },
    {
      feature: 'Volatility-aware signal filtering',
      whipAlgo: <CheckCircle size={16} style={{ color: '#00d68f' }} />,
      generic: 'No',
    },
    {
      feature: '3-layer confluence system',
      whipAlgo: <CheckCircle size={16} style={{ color: '#00d68f' }} />,
      generic: 'Single indicator',
    },
    {
      feature: 'Works across all asset classes',
      whipAlgo: <CheckCircle size={16} style={{ color: '#00d68f' }} />,
      generic: 'Sometimes',
    },
    {
      feature: 'No fake TP/SL promises',
      whipAlgo: <CheckCircle size={16} style={{ color: '#00d68f' }} />,
      generic: 'Often misleading',
    },
    {
      feature: 'Decision-support (not automation)',
      whipAlgo: <CheckCircle size={16} style={{ color: '#00d68f' }} />,
      generic: 'Variable',
    },
  ];

  return (
    <section
      id="why"
      className="landing-section"
      style={{ padding: '100px 48px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <div
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(14px, 1.5vw, 16px)',
          color: '#7c5cfc',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}
      >
        POSITIONING
      </div>
      <h2
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(26px, 3.5vw, 42px)',
          lineHeight: 1.15,
          letterSpacing: '-1px',
          color: '#fff',
          marginBottom: '16px',
        }}
      >
        Why WhipAlgo is different.
      </h2>
      <p
        style={{
          fontSize: '16px',
          color: '#e2e8f0',
          lineHeight: 1.75,
          maxWidth: '580px',
          marginTop: '16px',
        }}
      >
        Most retail indicators are single-purpose. WhipAlgo was designed from
        the ground up as a modular, interlocking system.
      </p>

      <div
        className="why-table-scroll"
        style={{
          marginTop: '48px',
          overflowX: 'auto',
          paddingBottom: '6px',
        }}
      >
        <div
          className="why-table"
          style={{
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '12px',
          overflow: 'hidden',
          minWidth: '760px',
        }}
        >
          {/* Header Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div
              style={{
                background: '#111122',
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                color: '#e2e8f0',
                fontWeight: 700,
                letterSpacing: '1px',
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Feature
            </div>
            <div
              style={{
                background: '#111122',
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                color: '#7c5cfc',
                fontWeight: 700,
                letterSpacing: '1px',
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderLeft: '1px solid rgba(255,255,255,0.06)',
                borderRight: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              WhipAlgo
            </div>
            <div
              style={{
                background: '#111122',
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                color: '#e2e8f0',
                fontWeight: 700,
                letterSpacing: '1px',
                padding: '16px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Generic Indicators
            </div>
          </div>

          {/* Data Rows */}
          {features.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr',
                borderBottom:
                  index === features.length - 1
                    ? 'none'
                    : '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div
                style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {item.feature}
              </div>
              <div
                style={{
                  background: 'rgba(124,92,252,0.05)',
                  padding: '16px 24px',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderLeft: '1px solid rgba(255,255,255,0.06)',
                  borderRight: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <span style={{ color: '#00d68f', fontSize: '15px' }}>
                  {item.whipAlgo}
                </span>
              </div>
              <div
                style={{
                  padding: '16px 24px',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {item.generic === '✓' ? (
                  <span style={{ color: '#00d68f', fontSize: '15px' }}>
                    {item.generic}
                  </span>
                ) : item.generic === '✗' ? (
                  <span style={{ color: '#ff4d6d', fontSize: '15px' }}>
                    {item.generic}
                  </span>
                ) : (
                  <span style={{ color: '#6b6b85', fontSize: '15px' }}>
                    {item.generic}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
