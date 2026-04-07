'use client';

import { CheckCircle, XCircle, Globe, Clock } from 'lucide-react';

export default function PerformanceSection() {
  const stats = [
    {
      icon: <CheckCircle size={24} />,
      number: '4',
      label: 'Signal Types Generated',
      color: '#7c5cfc',
    },
    {
      icon: <XCircle size={24} />,
      number: '2×',
      label: 'Confirmation filter over base signals',
      color: '#00d68f',
    },
    {
      icon: <Clock size={24} />,
      number: '15+',
      label: 'Timeframes supported',
      color: '#e8e8f0',
    },
    {
      icon: <Globe size={24} />,
      number: '∞',
      label: 'Markets: Crypto, Forex, Indices, Stocks, Commodities',
      color: '#00d68f',
    },
  ];

  return (
    <section
      id="performance"
      className="landing-section"
      style={{ padding: '100px 48px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <div
        style={{
          position: 'relative',
          border: '1px solid rgba(124,92,252,0.22)',
          background:
            'linear-gradient(145deg, rgba(12,12,24,0.95), rgba(10,10,20,0.95))',
          borderRadius: '22px',
          padding: '32px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-80px',
            width: '340px',
            height: '340px',
            background:
              'radial-gradient(circle, rgba(124,92,252,0.2), transparent 68%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              color: '#a791ff',
              letterSpacing: '1.1px',
              textTransform: 'uppercase',
              marginBottom: '12px',
              fontWeight: 700,
            }}
          >
            System Overview
          </div>

          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(28px, 3.6vw, 44px)',
              lineHeight: 1.12,
              letterSpacing: '-1px',
              color: '#fff',
              marginBottom: '12px',
              maxWidth: '720px',
            }}
          >
            Built for quality
            <br />
            over quantity.
          </h2>

          <p
            style={{
              color: '#c8d1e2',
              lineHeight: 1.75,
              maxWidth: '640px',
              marginBottom: '24px',
              fontSize: 'clamp(14px, 1.7vw, 16px)',
            }}
          >
            WhipAlgo's confirmation layer is specifically designed to reduce
            low-quality signals. CONFIRM BUY / CONFIRM SELL requires multi-layer
            agreement between trend, volatility, and momentum conditions.
          </p>

          <div
            className="performance-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '14px',
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid rgba(124,92,252,0.22)',
                  borderRadius: '14px',
                  background:
                    'linear-gradient(135deg, rgba(124,92,252,0.1), rgba(255,255,255,0.02))',
                  padding: '18px 14px',
                  transition: 'all 0.22s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'rgba(124,92,252,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(124,92,252,0.22)';
                }}
              >
                <div
                  style={{
                    color: stat.color,
                    marginBottom: '10px',
                  }}
                >
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(24px, 4vw, 34px)',
                    fontWeight: 800,
                    color: '#fff',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: '#d5dcea',
                    lineHeight: 1.45,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '20px',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '10px',
              padding: '14px 16px',
              background: 'rgba(255,255,255,0.02)',
              borderLeft: '3px solid #7c5cfc',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(12px, 1.5vw, 14px)',
                color: '#d5dcea',
                lineHeight: 1.72,
              }}
            >
              <strong style={{ color: '#e8e8f0' }}>Disclaimer:</strong> WhipAlgo
              is a decision-support tool, not a financial advisor. Past system
              behavior does not guarantee future results. All trading involves
              risk.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 530px) {
          .performance-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
