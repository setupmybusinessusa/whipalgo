'use client';

export default function PricingSection() {
  const plans = [
    {
      name: 'PRO PLAN',
      amount: '49',
      period: 'per month',
      features: [
        'Whip Trend Confirmation indicator',
        'BUY / SELL signals',
        'CONFIRM BUY / CONFIRM SELL signals',
        'Volatility-filtered entries',
        'All asset classes',
        'All timeframes',
        'TradingView access',
      ],
      featured: false,
      buttonText: 'Get Pro',
      buttonVariant: 'outline' as const,
    },
    {
      name: 'FULL SUITE',
      amount: '89',
      period: 'per month',
      features: [
        'Everything in Pro',
        'Whip Trend Core indicator',
        'Whip Channel Pro indicator',
        'Full 3-indicator system',
        'Trend + Confirmation + Volatility',
        'Maximum confluence analysis',
        'Priority support',
      ],
      featured: true,
      buttonText: 'Get Full Suite',
      buttonVariant: 'primary' as const,
    },
  ];

  return (
    <section
      id="pricing"
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
        PLANS
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
        Two plans.
        <br />
        No complexity.
      </h2>
      <p
        style={{
          fontSize: '16px',
          color: '#6b6b85',
          lineHeight: 1.75,
          maxWidth: '480px',
          marginTop: '16px',
          marginBottom: '0',
        }}
      >
        Access the system at the level that fits your trading style. No hidden
        indicators, no upsells.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          marginTop: '56px',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              background: plan.featured
                ? 'linear-gradient(135deg, #0d0d1a, rgba(124,92,252,0.08))'
                : '#0d0d1a',
              border: plan.featureed
                ? '1px solid #7c5cfc'
                : '1px solid rgba(255,255,255,0.06)',
              borderRadius: '16px',
              padding: '36px 32px',
              position: 'relative',
            }}
          >
            {plan.featured && (
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#7c5cfc',
                  color: '#fff',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  padding: '4px 14px',
                  borderRadius: '100px',
                }}
              >
                RECOMMENDED
              </div>
            )}

            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '13px',
                color: '#6b6b85',
                letterSpacing: '1px',
                marginBottom: '16px',
              }}
            >
              {plan.name}
            </div>
            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '44px',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1,
              }}
            >
              <span style={{ fontSize: '20px', color: '#6b6b85' }}>$</span>
              {plan.amount}
            </div>
            <div
              style={{
                fontSize: '13px',
                color: '#6b6b85',
                marginTop: '6px',
                marginBottom: '24px',
              }}
            >
              {plan.period}
            </div>

            <ul
              style={{
                listStyle: 'none',
                marginBottom: '32px',
                padding: 0,
                margin: '0 0 32px 0',
              }}
            >
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '8px 0',
                    fontSize: '14px',
                    borderBottom:
                      featureIndex === plan.features.length - 1
                        ? 'none'
                        : '1px solid rgba(255,255,255,0.06)',
                    color: '#6b6b85',
                  }}
                >
                  <span
                    style={{
                      color: '#00d68f',
                      fontSize: '15px',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#"
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '13px',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                transition: 'all 0.2s',
                background:
                  plan.buttonVariant === 'primary' ? '#7c5cfc' : 'transparent',
                color: plan.buttonVariant === 'primary' ? '#fff' : '#e8e8f0',
                border:
                  plan.buttonVariant === 'primary'
                    ? 'none'
                    : '1px solid rgba(255,255,255,0.12)',
              }}
              onMouseEnter={(e) => {
                if (plan.buttonVariant === 'primary') {
                  e.currentTarget.style.background = '#5c3fdb';
                } else {
                  e.currentTarget.style.borderColor = '#7c5cfc';
                  e.currentTarget.style.color = '#7c5cfc';
                }
              }}
              onMouseLeave={(e) => {
                if (plan.buttonVariant === 'primary') {
                  e.currentTarget.style.background = '#7c5cfc';
                } else {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.color = '#e8e8f0';
                }
              }}
            >
              {plan.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
