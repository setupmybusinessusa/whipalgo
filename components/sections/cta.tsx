'use client';

import { ArrowRight, ShieldCheck, LineChart, Layers3 } from 'lucide-react';

export default function CTASection() {
  const highlights = [
    '3-indicator confirmation framework',
    'Designed for all major markets',
    'Built natively for TradingView',
  ];

  return (
    <section
      className="landing-section cta-section"
      style={{
        padding: '110px 48px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '24px',
          background:
            'radial-gradient(circle at 20% 20%, rgba(124,92,252,0.2), transparent 40%), radial-gradient(circle at 80% 80%, rgba(124,92,252,0.1), transparent 45%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          border: '1px solid rgba(124,92,252,0.22)',
          background:
            'linear-gradient(145deg, rgba(16,16,34,0.95), rgba(10,10,20,0.95))',
          borderRadius: '24px',
          padding: '42px',
          boxShadow: '0 24px 60px rgba(0,0,0,0.38)',
        }}
      >
        <div
          className="cta-main-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '28px',
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                color: '#b39eff',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                border: '1px solid rgba(124,92,252,0.35)',
                background: 'rgba(124,92,252,0.12)',
                borderRadius: '999px',
                padding: '7px 12px',
                marginBottom: '18px',
              }}
            >
              <Layers3 size={14} />
              Ready To Trade Smarter
            </div>

            <h2
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(30px, 4vw, 46px)',
                lineHeight: 1.12,
                letterSpacing: '-1.2px',
                color: '#ffffff',
                marginBottom: '14px',
                maxWidth: '700px',
              }}
            >
              Start using WhipAlgo and trade with structured confirmation.
            </h2>

            <p
              style={{
                color: '#c6d0e4',
                lineHeight: 1.72,
                fontSize: 'clamp(15px, 1.8vw, 18px)',
                maxWidth: '640px',
                marginBottom: '26px',
              }}
            >
              Remove guesswork from entries with a 3-layer framework built for
              traders who prioritize consistency over noise.
            </p>

            <div
              className="cta-action-row"
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
            >
              <a
                href="#pricing"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  background: 'linear-gradient(135deg, #7c5cfc, #5b3ee0)',
                  color: '#ffffff',
                  padding: '14px 22px',
                  borderRadius: '11px',
                  fontWeight: 700,
                  fontSize: '15px',
                  textDecoration: 'none',
                  boxShadow: '0 14px 34px rgba(124,92,252,0.35)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow =
                    '0 16px 38px rgba(124,92,252,0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 14px 34px rgba(124,92,252,0.35)';
                }}
              >
                Choose Your Plan
                <ArrowRight size={16} />
              </a>

              <a
                href="#how"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#e2e8f0',
                  padding: '13px 18px',
                  borderRadius: '11px',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(124,92,252,0.5)';
                  e.currentTarget.style.background = 'rgba(124,92,252,0.1)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#e2e8f0';
                }}
              >
                See How It Works
              </a>
            </div>

            <div
              className="cta-highlight-row"
              style={{
                marginTop: '18px',
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
              }}
            >
              {highlights.map((item) => (
                <span
                  key={item}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '999px',
                    padding: '6px 10px',
                    fontSize: '12px',
                    color: '#cdd6e9',
                    background: 'rgba(255,255,255,0.03)',
                  }}
                >
                  <ShieldCheck size={12} style={{ color: '#7c5cfc' }} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              border: '1px solid rgba(124,92,252,0.24)',
              borderRadius: '18px',
              padding: '20px',
              background:
                'linear-gradient(165deg, rgba(124,92,252,0.12), rgba(255,255,255,0.02))',
            }}
          >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'rgba(124,92,252,0.18)',
              border: '1px solid rgba(124,92,252,0.34)',
              marginBottom: '14px',
            }}
          >
            <LineChart size={20} style={{ color: '#7c5cfc' }} />
          </div>

          <div
            style={{
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '8px',
            }}
          >
            Built for quality setups
          </div>

          <p
            style={{
              color: '#c6d0e4',
              fontSize: '14px',
              lineHeight: 1.65,
              marginBottom: '14px',
            }}
          >
            WhipAlgo helps you wait for confirmation instead of chasing
            impulsive entries.
          </p>

          <div
            style={{
              display: 'grid',
              gap: '10px',
            }}
          >
            {[
              ['Signal Structure', 'BUY / SELL + CONFIRM tier'],
              ['System Coverage', 'Crypto, Forex, Stocks, Indices'],
              ['Framework Type', 'Decision-support, not automation'],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '10px',
                  fontSize: '12px',
                  color: '#d4dcf0',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '9px',
                  padding: '8px 10px',
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                <span style={{ color: '#9aa8c3' }}>{k}</span>
                <span style={{ textAlign: 'right' }}>{v}</span>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .cta-main-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 530px) {
          .cta-action-row a {
            width: 100%;
          }

          .cta-highlight-row {
            gap: 6px !important;
          }

          .cta-highlight-row span {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
