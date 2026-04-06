'use client';

export default function CTASection() {
  return (
    <section
      style={{ padding: '100px 48px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <div
        style={{
          background:
            'linear-gradient(135deg, rgba(124,92,252,0.15), rgba(92,63,219,0.08))',
          border: '1px solid rgba(124,92,252,0.25)',
          borderRadius: '20px',
          padding: '72px 48px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '500px',
            height: '300px',
            background:
              'radial-gradient(ellipse, rgba(124,92,252,0.2) 0%, transparent 70%)',
          }}
        ></div>

        <div style={{ position: 'relative', zIndex: 10 }}>
          <h2
            style={{
              fontFamily: 'Space Mono, monospace',
              fontWeight: 700,
              fontSize: 'clamp(26px, 3.5vw, 42px)',
              lineHeight: 1.15,
              letterSpacing: '-1px',
              color: '#fff',
              marginBottom: '16px',
            }}
          >
            Ready to trade with
            <br />
            confirmed clarity?
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#6b6b85',
              lineHeight: 1.7,
              maxWidth: '480px',
              margin: '0 auto 36px',
            }}
          >
            Join traders who use WhipAlgo's 3-indicator confirmation system to
            filter noise and focus on high-quality setups.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
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
              Get Started Now
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
              Learn more about the system →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
