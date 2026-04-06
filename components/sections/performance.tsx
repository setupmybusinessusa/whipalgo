export default function PerformanceSection() {
  const stats = [
    {
      number: '4',
      label: 'Signal Types Generated',
      color: '#7c5cfc',
    },
    {
      number: '2×',
      label: 'Confirmation filter over base signals',
      color: '#00d68f',
    },
    {
      number: '15+',
      label: 'Timeframes supported',
      color: '#e8e8f0',
    },
    {
      number: '∞',
      label: 'Markets: Crypto, Forex, Indices, Stocks, Commodities',
      color: '#00d68f',
    },
  ];

  return (
    <section
      id="performance"
      style={{ padding: '100px 48px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <div
        style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '11px',
          color: '#7c5cfc',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}
      >
        SYSTEM OVERVIEW
      </div>
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
        Built for quality
        <br />
        over quantity.
      </h2>
      <p
        style={{
          fontSize: '16px',
          color: '#6b6b85',
          lineHeight: 1.75,
          maxWidth: '580px',
          marginTop: '16px',
        }}
      >
        WhipAlgo's confirmation layer is specifically designed to reduce
        low-quality signals. The CONFIRM BUY / CONFIRM SELL signals require
        multi-layer agreement between trend, volatility, and momentum
        conditions.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          marginTop: '48px',
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              background: '#0d0d1a',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px',
              padding: '24px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '32px',
                fontWeight: 700,
                color: stat.color,
              }}
            >
              {stat.number}
            </div>
            <div
              style={{ fontSize: '12px', color: '#6b6b85', marginTop: '6px' }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: '40px',
          background: '#0d0d1a',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '10px',
          padding: '20px 24px',
          borderLeft: '3px solid #7c5cfc',
        }}
      >
        <p style={{ fontSize: '13px', color: '#6b6b85', lineHeight: 1.8 }}>
          <strong style={{ color: '#e8e8f0' }}>Disclaimer:</strong> WhipAlgo is
          a decision-support tool, not a financial advisor. Past system behavior
          does not guarantee future results. All trading involves risk. The
          indicators assist analysis — they do not replace judgment, risk
          management, or professional advice.
        </p>
      </div>
    </section>
  );
}
