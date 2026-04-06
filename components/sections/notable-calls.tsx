'use client';

export default function NotableCallsSection() {
  const calls = [
    {
      asset: 'XAUUSD · GOLD',
      name: 'Gold Reversal',
      timeframe: 'WEEKLY',
      signal: '▼ CONFIRM SELL',
      from: '$5,200',
      to: '$4,000',
      move: '−23.1% move',
      percentage: '75%',
      drop: '▼ −$1,200 per oz',
      description:
        'Whip Channel Pro flagged extreme overextension at the $5,200 level. Confirm Sell triggered on weekly timeframe as trend validation failed. The system identified exhaustion before price began its correction.',
    },
    {
      asset: 'XAGUSD · SILVER',
      name: 'Silver Top',
      timeframe: 'WEEKLY',
      signal: '▼ CONFIRM SELL',
      from: '$117',
      to: '$60',
      move: '−48.7% move',
      percentage: '88%',
      drop: '▼ −$57 per oz',
      description:
        'Silver showed textbook volatility squeeze followed by a failed breakout. Whip Trend Core registered bearish momentum divergence at the highs. Confirm Sell aligned across trend and volatility layers simultaneously.',
    },
    {
      asset: 'BTCUSDT · BITCOIN',
      name: 'BTC Distribution Top',
      timeframe: 'DAILY',
      signal: '▼ CONFIRM SELL',
      from: '$126K',
      to: '$100K',
      move: '−20.6% move',
      percentage: '62%',
      drop: '▼ −$26,000',
      description:
        'At $126,000 BTC showed channel overextension on Whip Channel Pro with multiple standard deviations above the SMA baseline. The Confirm Sell signal triggered as trend validation broke down, preceding the correction to $100K.',
    },
    {
      asset: 'BTCUSDT · BITCOIN',
      name: 'BTC Dead Cat Rejection',
      timeframe: '4H',
      signal: '▼ CONFIRM SELL',
      from: '$105K',
      to: '$70K',
      move: '−33.3% move',
      percentage: '80%',
      drop: '▼ −$35,000',
      description:
        'Following the initial drop, BTC recovered to $105K and formed a lower high. Whip Trend Core confirmed bearish re-entry. The 4H Confirm Sell triggered at resistance, catching the continuation leg down to $70K.',
    },
  ];

  return (
    <section
      id="calls"
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
        NOTABLE CALLS
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
        When the system
        <br />
        called it right.
      </h2>
      <p
        style={{
          fontSize: '16px',
          color: '#6b6b85',
          lineHeight: 1.75,
          maxWidth: '600px',
          marginTop: '16px',
        }}
      >
        These are documented macro-level calls generated using WhipAlgo's
        confirmation framework. No guarantees — but the system flagged each of
        these reversals before the move materialized.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          marginTop: '56px',
        }}
      >
        {calls.map((call, index) => (
          <div
            key={index}
            style={{
              background: '#0d0d1a',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '16px',
              padding: '32px 28px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 0.25s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,77,109,0.3)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '120px',
                height: '120px',
                background:
                  'radial-gradient(circle at top right, rgba(255,77,109,0.07), transparent 70%)',
              }}
            ></div>

            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '12px',
                color: '#6b6b85',
                letterSpacing: '2px',
                marginBottom: '10px',
              }}
            >
              {call.asset}
            </div>
            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '22px',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '20px',
              }}
            >
              {call.name}
            </div>

            <div
              style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '16px',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '10px',
                  color: '#7c5cfc',
                  background: 'rgba(124,92,252,0.12)',
                  border: '1px solid rgba(124,92,252,0.2)',
                  padding: '3px 8px',
                  borderRadius: '4px',
                }}
              >
                {call.timeframe}
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255,77,109,0.1)',
                  border: '1px solid rgba(255,77,109,0.25)',
                  color: '#ff4d6d',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '10px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '4px',
                  letterSpacing: '0.5px',
                  marginLeft: '8px',
                }}
              >
                {call.signal}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '26px',
                  fontWeight: 700,
                  color: '#e8e8f0',
                }}
              >
                {call.from}
              </span>
              <span style={{ color: '#ff4d6d', fontSize: '22px' }}>→</span>
              <span
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '26px',
                  fontWeight: 700,
                  color: '#ff4d6d',
                }}
              >
                {call.to}
              </span>
            </div>

            <div style={{ marginBottom: '18px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '10px',
                  color: '#6b6b85',
                  marginBottom: '8px',
                }}
              >
                <span>Entry zone</span>
                <span>{call.move}</span>
              </div>
              <div
                style={{
                  background: '#111122',
                  borderRadius: '4px',
                  height: '6px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    borderRadius: '4px',
                    background:
                      'linear-gradient(90deg, #ff4d6d, rgba(255,77,109,0.4))',
                    animation: 'barGrow 1.4s ease forwards',
                    width: '0',
                  }}
                  onLoad={(e) => {
                    setTimeout(() => {
                      e.currentTarget.style.width = call.percentage;
                    }, 100);
                  }}
                ></div>
              </div>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255,77,109,0.12)',
                border: '1px solid rgba(255,77,109,0.2)',
                color: '#ff4d6d',
                fontFamily: 'Space Mono, monospace',
                fontSize: '12px',
                fontWeight: 700,
                padding: '5px 12px',
                borderRadius: '6px',
              }}
            >
              {call.drop}
            </div>

            <p
              style={{
                fontSize: '13px',
                color: '#6b6b85',
                marginTop: '16px',
                lineHeight: 1.7,
              }}
            >
              {call.description}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: '32px',
          background: '#0d0d1a',
          border: '1px solid rgba(255,255,255,0.06)',
          borderLeft: '3px solid #6b6b85',
          borderRadius: '10px',
          padding: '20px 24px',
          fontSize: '13px',
          color: '#6b6b85',
          lineHeight: 1.75,
        }}
      >
        ⚠ These calls represent documented instances where WhipAlgo's framework
        generated signals consistent with subsequent price action. Past accuracy
        does not predict future results. All analysis is informational only —
        not financial advice. Always manage your own risk.
      </div>
    </section>
  );
}
