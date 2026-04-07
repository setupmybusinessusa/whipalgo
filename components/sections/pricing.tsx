'use client';

import { Check, Star, Zap, Globe, TrendingUp, Crown } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'PRO PLAN',
      amount: '49',
      period: 'per month',
      features: [
        {
          icon: <Check size={16} />,
          text: 'Whip Trend Confirmation indicator',
        },
        { icon: <TrendingUp size={16} />, text: 'BUY / SELL signals' },
        { icon: <Zap size={16} />, text: 'CONFIRM BUY / CONFIRM SELL signals' },
        { icon: <Globe size={16} />, text: 'All asset classes' },
        { icon: <Star size={16} />, text: 'All timeframes' },
        { icon: <Crown size={16} />, text: 'TradingView access' },
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
        { icon: <Star size={16} />, text: 'Everything in Pro' },
        { icon: <TrendingUp size={16} />, text: 'Whip Trend Core indicator' },
        { icon: <Zap size={16} />, text: 'Whip Channel Pro indicator' },
        { icon: <Globe size={16} />, text: 'Full 3-indicator system' },
        { text: 'Trend + Confirmation + Volatility' },
        { icon: <Crown size={16} />, text: 'Priority support' },
      ],
      featured: true,
      buttonText: 'Get Full Suite',
      buttonVariant: 'primary' as const,
    },
  ];

  return (
    <section
      id="pricing"
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
            top: '-110px',
            right: '-70px',
            width: '320px',
            height: '320px',
            background:
              'radial-gradient(circle, rgba(124,92,252,0.2), transparent 70%)',
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
              marginBottom: '10px',
              fontWeight: 700,
            }}
          >
            Plans
          </div>

          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(28px, 3.6vw, 44px)',
              lineHeight: 1.12,
              letterSpacing: '-1px',
              color: '#fff',
              marginBottom: '10px',
            }}
          >
            Two plans.
            <br />
            No complexity.
          </h2>

          <p
            style={{
              color: '#c8d1e2',
              lineHeight: 1.72,
              maxWidth: '620px',
              fontSize: 'clamp(14px, 1.7vw, 16px)',
              marginBottom: '22px',
            }}
          >
            Access the system at the level that fits your trading style. No
            hidden indicators, no upsells.
          </p>

          <div
            className="pricing-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginTop: '8px',
            }}
          >
            {plans.map((plan, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  border: plan.featured
                    ? '1px solid rgba(124,92,252,0.5)'
                    : '1px solid rgba(255,255,255,0.1)',
                  background: plan.featured
                    ? 'linear-gradient(155deg, rgba(124,92,252,0.16), rgba(255,255,255,0.02))'
                    : 'rgba(255,255,255,0.02)',
                  borderRadius: '16px',
                  padding: '20px',
                }}
              >
                {plan.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '14px',
                      background: '#7c5cfc',
                      color: '#fff',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.8px',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Recommended
                  </div>
                )}

                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: plan.featured ? '#dcd1ff' : '#c4cce0',
                    letterSpacing: '0.9px',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  {plan.name}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '6px',
                    marginBottom: '12px',
                  }}
                >
                  <span style={{ color: '#93a0ba', fontSize: '18px' }}>$</span>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '40px',
                      fontWeight: 800,
                      lineHeight: 1,
                      color: '#fff',
                      letterSpacing: '-1px',
                    }}
                  >
                    {plan.amount}
                  </span>
                  <span style={{ color: '#9eabc3', fontSize: '13px' }}>
                    {plan.period}
                  </span>
                </div>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 18px 0',
                    display: 'grid',
                    gap: '8px',
                  }}
                >
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        fontSize: '13px',
                        color: '#d6deec',
                        lineHeight: 1.45,
                      }}
                    >
                      <span
                        style={{
                          color: '#00d68f',
                          marginTop: '1px',
                          flexShrink: 0,
                        }}
                      >
                        {feature.icon ?? <Check size={16} />}
                      </span>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    textAlign: 'center',
                    padding: '12px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    fontSize: '14px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    background:
                      plan.buttonVariant === 'primary'
                        ? 'linear-gradient(135deg, #7c5cfc, #5c3fdb)'
                        : 'transparent',
                    color:
                      plan.buttonVariant === 'primary' ? '#fff' : '#dce3f0',
                    border:
                      plan.buttonVariant === 'primary'
                        ? 'none'
                        : '1px solid rgba(255,255,255,0.14)',
                  }}
                  onMouseEnter={(e) => {
                    if (plan.buttonVariant === 'primary') {
                      e.currentTarget.style.filter = 'brightness(1.08)';
                    } else {
                      e.currentTarget.style.borderColor = '#7c5cfc';
                      e.currentTarget.style.color = '#fff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (plan.buttonVariant === 'primary') {
                      e.currentTarget.style.filter = 'brightness(1)';
                    } else {
                      e.currentTarget.style.borderColor =
                        'rgba(255,255,255,0.14)';
                      e.currentTarget.style.color = '#dce3f0';
                    }
                  }}
                >
                  {plan.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
