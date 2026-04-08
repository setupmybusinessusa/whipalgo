'use client';

export default function Footer() {
  return (
    <footer
      className="site-footer"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '38px 48px',
        background: '#0a0a12',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(18px, 2vw, 22px)',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.4px',
              marginBottom: '4px',
            }}
          >
            Whip<span style={{ color: '#7c5cfc' }}>Algo</span>
          </div>
          <p
            style={{
              color: '#98a2b3',
              fontSize: '13px',
              lineHeight: 1.5,
            }}
          >
            Professional confirmation indicators for TradingView.
          </p>
        </div>

        <a
          href="mailto:support@whipalgo.com"
          style={{
            color: '#cbd5e1',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: '8px',
            padding: '9px 12px',
            fontSize: '13px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(124,92,252,0.5)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)';
            e.currentTarget.style.color = '#cbd5e1';
          }}
        >
          support@whipalgo.com
        </a>

        <div
          style={{
            width: '100%',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            marginTop: '8px',
            paddingTop: '14px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ color: '#6b7280', fontSize: '12px', lineHeight: 1.5 }}>
            © 2026 WhipAlgo. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '24px' }}>
            <a
              href="/legal/terms"
              style={{
                color: '#9ca3af',
                textDecoration: 'none',
                fontSize: '13px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#7c5cfc';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#9ca3af';
              }}
            >
              Terms of Service
            </a>
            <a
              href="/legal/privacy"
              style={{
                color: '#9ca3af',
                textDecoration: 'none',
                fontSize: '13px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#7c5cfc';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#9ca3af';
              }}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
