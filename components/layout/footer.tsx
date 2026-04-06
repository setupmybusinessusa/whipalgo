'use client';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '24px',
        maxWidth: '100%',
      }}
    >
      <div
        style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '16px',
          fontWeight: 700,
          color: '#fff',
        }}
      >
        Whip<span style={{ color: '#7c5cfc' }}>Algo</span>
      </div>

      <div style={{ display: 'flex', gap: '28px' }}>
        <a
          href="#calls"
          style={{
            color: '#6b6b85',
            textDecoration: 'none',
            fontSize: '13px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#e8e8f0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#6b6b85';
          }}
        >
          Notable Calls
        </a>
        <a
          href="#how"
          style={{
            color: '#6b6b85',
            textDecoration: 'none',
            fontSize: '13px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#e8e8f0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#6b6b85';
          }}
        >
          System
        </a>
        <a
          href="#performance"
          style={{
            color: '#6b6b85',
            textDecoration: 'none',
            fontSize: '13px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#e8e8f0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#6b6b85';
          }}
        >
          Performance
        </a>
        <a
          href="#pricing"
          style={{
            color: '#6b6b85',
            textDecoration: 'none',
            fontSize: '13px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#e8e8f0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#6b6b85';
          }}
        >
          Pricing
        </a>
        <a
          href="#faq"
          style={{
            color: '#6b6b85',
            textDecoration: 'none',
            fontSize: '13px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#e8e8f0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#6b6b85';
          }}
        >
          FAQ
        </a>
        <a
          href="#about"
          style={{
            color: '#6b6b85',
            textDecoration: 'none',
            fontSize: '13px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#e8e8f0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#6b6b85';
          }}
        >
          About
        </a>
      </div>

      <div
        style={{
          color: '#6b6b85',
          fontSize: '12px',
          lineHeight: 1.6,
          maxWidth: '420px',
        }}
      >
        WhipAlgo is a decision-support tool for traders. Past performance does
        not guarantee future results. Trading involves risk. Always do your own
        research.
      </div>
    </footer>
  );
}
