'use client';

export default function HeroSection() {
  return (
    <section
      className="hero"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '160px',
        paddingBottom: '80px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-200px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background:
            'radial-gradient(ellipse at center, rgba(124,92,252,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      ></div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 48px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(124,92,252,0.12)',
            border: '1px solid rgba(124,92,252,0.3)',
            padding: '6px 14px',
            borderRadius: '100px',
            fontFamily: 'Space Mono, monospace',
            fontSize: '12px',
            color: '#7c5cfc',
            fontWeight: 700,
            letterSpacing: '1px',
            marginBottom: '32px',
          }}
        >
          <span style={{ fontSize: '8px', animation: 'pulse 2s infinite' }}>
            ●
          </span>
          CONFIRMATION-BASED TRADING SYSTEM
        </div>

        <h1
          style={{
            fontFamily: 'Space Mono, monospace',
            fontWeight: 700,
            fontSize: 'clamp(36px, 5vw, 62px)',
            lineHeight: 1.1,
            letterSpacing: '-2px',
            color: '#fff',
            marginBottom: '24px',
          }}
        >
          Trade with
          <br />
          <em style={{ color: '#7c5cfc', fontStyle: 'normal' }}>confirmed</em>
          <br />
          clarity.
        </h1>

        <p
          style={{
            fontSize: '18px',
            color: '#a0a0b8',
            lineHeight: 1.7,
            maxWidth: '560px',
            marginBottom: '40px',
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
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          <a
            href="#pricing"
            style={{
              background: '#7c5cfc',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#5c3fdb';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#7c5cfc';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View Plans
          </a>
          <a
            href="#how"
            style={{
              color: '#6b6b85',
              fontSize: '14px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#e8e8f0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#6b6b85';
            }}
          >
            See how it works →
          </a>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '48px',
            marginTop: '64px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '28px',
                fontWeight: 700,
                color: '#fff',
              }}
            >
              3
            </div>
            <div
              style={{ fontSize: '13px', color: '#6b6b85', marginTop: '4px' }}
            >
              Proprietary Indicators
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '28px',
                fontWeight: 700,
                color: '#fff',
              }}
            >
              8+
            </div>
            <div
              style={{ fontSize: '13px', color: '#6b6b85', marginTop: '4px' }}
            >
              Asset Classes Supported
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '28px',
                fontWeight: 700,
                color: '#fff',
              }}
            >
              4
            </div>
            <div
              style={{ fontSize: '13px', color: '#6b6b85', marginTop: '4px' }}
            >
              Signal Types
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '28px',
                fontWeight: 700,
                color: '#fff',
              }}
            >
              100%
            </div>
            <div
              style={{ fontSize: '13px', color: '#6b6b85', marginTop: '4px' }}
            >
              TradingView Native
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
