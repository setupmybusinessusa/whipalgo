'use client';

import { ArrowRight, ShieldCheck, Sparkles, BarChart3 } from 'lucide-react';

export default function HeroSection() {
  const trustItems = [
    'Built for TradingView',
    'Multi-market compatible',
    'Confirmation-first logic',
  ];

  const quickStats = [
    { value: '3', label: 'Proprietary indicators' },
    { value: '4', label: 'Signal types' },
    { value: '8+', label: 'Asset classes' },
  ];

  return (
    <section
      className="hero landing-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '140px',
        paddingBottom: '84px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-240px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1100px',
          height: '760px',
          background:
            'radial-gradient(ellipse at center, rgba(124,92,252,0.2) 0%, transparent 72%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="hero-container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 0.95fr)',
            gap: '32px',
            alignItems: 'center',
          }}
          className="hero-main-grid"
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(124,92,252,0.12)',
                border: '1px solid rgba(124,92,252,0.3)',
                padding: '7px 14px',
                borderRadius: '100px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                color: '#a992ff',
                fontWeight: 700,
                letterSpacing: '0.8px',
                marginBottom: '22px',
                textTransform: 'uppercase',
              }}
            >
              <Sparkles size={14} />
              Confirmation-Based Trading System
            </div>

            <h1
              className="font-heading hero-title"
              style={{
                fontWeight: 800,
                fontSize: 'clamp(36px, 5.8vw, 64px)',
                lineHeight: 1.06,
                letterSpacing: '-0.03em',
                color: '#fff',
                marginBottom: '18px',
                maxWidth: '900px',
              }}
            >
              Trade with
              <br />
              <span
                style={{
                  color: '#7c5cfc',
                  textShadow: '0 10px 30px rgba(124,92,252,0.35)',
                }}
              >
                confirmed clarity.
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: '#d7deeb',
                lineHeight: 1.75,
                maxWidth: '560px',
                marginBottom: '30px',
              }}
            >
              WhipAlgo is a 3-indicator confirmation system for TradingView. Not
              signals. Not bots. A structured framework that filters noise and
              surfaces only high-quality entries.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '24px',
              }}
            >
              <a
                href="#pricing"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'linear-gradient(135deg, #7c5cfc, #5c3fdb)',
                  color: '#fff',
                  padding: '14px 22px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '15px',
                  textDecoration: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.22s ease',
                  boxShadow: '0 12px 30px rgba(124, 92, 252, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow =
                    '0 16px 36px rgba(124, 92, 252, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 12px 30px rgba(124, 92, 252, 0.3)';
                }}
              >
                View Plans
                <ArrowRight size={16} />
              </a>

              <a
                href="#how"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#d7deeb',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.14)',
                  padding: '13px 18px',
                  borderRadius: '10px',
                  fontSize: '15px',
                  fontWeight: 600,
                  transition: 'all 0.22s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(124,92,252,0.5)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.background = 'rgba(124,92,252,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)';
                  e.currentTarget.style.color = '#d7deeb';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Explore System
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
              }}
            >
              {trustItems.map((item) => (
                <span
                  key={item}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    color: '#b8c0d2',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '999px',
                    padding: '6px 10px',
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
              background:
                'linear-gradient(155deg, rgba(124,92,252,0.14), rgba(13,13,26,0.92) 40%, rgba(13,13,26,0.96) 100%)',
              border: '1px solid rgba(124,92,252,0.22)',
              borderRadius: '18px',
              padding: '22px',
              boxShadow: '0 22px 55px rgba(0,0,0,0.35)',
            }}
            className="hero-preview-card"
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '11px',
                    color: '#a7b2c9',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  Signal Quality Layer
                </div>
                <div
                  style={{
                    color: '#fff',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    marginTop: '4px',
                    fontSize: '18px',
                  }}
                >
                  CONFIRM SELL
                </div>
              </div>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(124,92,252,0.16)',
                  border: '1px solid rgba(124,92,252,0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BarChart3 size={18} style={{ color: '#7c5cfc' }} />
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gap: '10px',
              }}
            >
              {[
                ['Trend Core', 'Bearish momentum aligned'],
                ['Trend Confirmation', 'Range filter validated'],
                ['Channel Pro', 'Overextension detected'],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '10px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    padding: '10px 12px',
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: '#fff',
                        fontSize: '13px',
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      {title}
                    </div>
                    <div
                      style={{
                        color: '#a7b2c9',
                        fontSize: '12px',
                        marginTop: '3px',
                        lineHeight: 1.4,
                      }}
                    >
                      {desc}
                    </div>
                  </div>
                  <span
                    style={{
                      color: '#00d68f',
                      fontSize: '12px',
                      fontWeight: 700,
                      alignSelf: 'center',
                    }}
                  >
                    PASS
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '14px',
            marginTop: '34px',
          }}
          className="hero-stats-grid"
        >
          {quickStats.map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: '16px 14px',
                borderRadius: '12px',
                border: '1px solid rgba(124,92,252,0.2)',
                background:
                  'linear-gradient(135deg, rgba(124,92,252,0.09), rgba(124,92,252,0.02))',
              }}
            >
              <div
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(24px, 4.2vw, 32px)',
                  color: '#fff',
                  fontWeight: 800,
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: '#c8d0df',
                  fontSize: '12px',
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-main-grid {
            grid-template-columns: 1fr !important;
            gap: 22px !important;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: clamp(30px, 9.2vw, 44px) !important;
            line-height: 1.08 !important;
          }

          .hero-preview-card {
            padding: 18px !important;
          }

          .hero-stats-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 530px) {
          .hero-title {
            font-size: clamp(28px, 8.8vw, 36px) !important;
            line-height: 1.1 !important;
          }

          .hero-preview-card {
            padding: 14px !important;
            border-radius: 14px !important;
          }

          .hero-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
