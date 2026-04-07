'use client';

import { Zap, CheckCircle, Activity, TrendingUp } from 'lucide-react';

export default function HowItWorksSection() {
  const indicators = [
    {
      number: '01 / INDICATOR',
      icon: <Zap size={24} style={{ color: '#7c5cfc' }} />,
      iconBg: 'rgba(124,92,252,0.12)',
      iconColor: '#7c5cfc',
      title: 'Whip Trend Core',
      description:
        'Measures directional momentum using volatility-adjusted highs and lows. Uses ATR-normalized calculations to separate genuine trend moves from noise. Identifies bullish and bearish strength zones and exhaustion conditions.',
      tags: ['ATR-Normalized', 'Trend Bias', 'Exhaustion Zones'],
    },
    {
      number: '02 / INDICATOR',
      icon: <CheckCircle size={24} style={{ color: '#00d68f' }} />,
      iconBg: 'rgba(0,214,143,0.1)',
      iconColor: '#00d68f',
      title: 'Whip Trend Confirmation',
      description:
        'The signal engine of the system. Uses a volatility-based range filter to detect breakouts and reversals. Generates BUY/SELL signals and upgrades them to CONFIRM BUY / CONFIRM SELL using SMA-based trend validation.',
      tags: ['Range Filter', 'BUY / SELL', 'CONFIRM Signals', 'SMA Validation'],
    },
    {
      number: '03 / INDICATOR',
      icon: <Activity size={24} style={{ color: '#7c5cfc' }} />,
      iconBg: 'rgba(255,77,109,0.1)',
      iconColor: '#ff4d6d',
      title: 'Whip Channel Pro',
      description:
        'SMA + standard deviation bands that visualize volatility expansion and contraction cycles. Highlights overextension, breakout zones, and squeeze conditions that precede major price moves.',
      tags: ['SMA Bands', 'Volatility Squeeze', 'Breakout Zones'],
    },
  ];

  return (
    <section
      id="how"
      className="landing-section"
      style={{ padding: '100px 48px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <div
        className="how-grid"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(14px, 1.5vw, 16px)',
          color: '#7c5cfc',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}
      >
        THE SYSTEM
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
        Three indicators.
        <br />
        One unified framework.
      </h2>
      <p
        style={{
          fontSize: '16px',
          color: '#e2e8f0',
          lineHeight: 1.75,
          maxWidth: '560px',
          marginTop: '16px',
        }}
      >
        Each indicator in the WhipAlgo system has a distinct purpose. Together
        they create layered confluence — removing subjective guesswork from your
        entries.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginTop: '56px',
        }}
      >
        {indicators.map((indicator, index) => (
          <div
            key={index}
            style={{
              background: '#0d0d1a',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '16px',
              padding: '32px 28px',
              position: 'relative',
            }}
          >
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                color: '#7c5cfc',
                letterSpacing: '2px',
                marginBottom: '20px',
              }}
            >
              {indicator.number}
            </div>

            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                fontSize: '22px',
                backgroundColor: indicator.iconBg,
                color: indicator.iconColor,
              }}
            >
              {indicator.icon}
            </div>

            <h3
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(18px, 2.5vw, 20px)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '10px',
              }}
            >
              {indicator.title}
            </h3>
            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: '#e2e8f0',
                marginTop: '10px',
                lineHeight: 1.75,
              }}
            >
              {indicator.description}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                marginTop: '16px',
              }}
            >
              {indicator.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(14px, 1.5vw, 14px)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    background: '#111122',
                    color: '#e2e8f0',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
