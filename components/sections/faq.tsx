'use client';

import { useState } from 'react';
import {
  ChevronDown,
  HelpCircle,
  TrendingUp,
  Shield,
  Clock,
  Globe,
} from 'lucide-react';
import { Label } from '@/components/ui/label';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      icon: <HelpCircle size={20} />,
      question: 'What exactly is WhipAlgo — is it a bot or a signal group?',
      answer:
        'Neither. WhipAlgo is a set of three TradingView indicators that you add to your charts. They run on your TradingView account, on any pair or timeframe you choose. There is no Telegram group, no automated bot, no account access required.',
      category: 'Getting Started',
    },
    {
      icon: <ChevronDown size={20} />,
      question: "What's the difference between BUY and CONFIRM BUY?",
      answer:
        'A BUY signal indicates the system has detected a bullish breakout or directional shift. A CONFIRM BUY requires additional validation — the signal must also align with the SMA-based trend filter. CONFIRM signals are fewer in number but higher in quality. Many traders focus exclusively on the CONFIRM tier to reduce overtrading.',
      category: 'Signal Types',
    },
    {
      icon: <TrendingUp size={20} />,
      question: 'Does the system show take profit or stop loss levels?',
      answer:
        "No. WhipAlgo intentionally does not provide TP or SL levels. Risk management is the trader's responsibility and is highly dependent on individual position sizing, account size, and market context. The system provides directional bias and confirmation — you manage the trade.",
      category: 'Risk Management',
    },
    {
      icon: <Globe size={20} />,
      question: 'What markets and timeframes does it work on?',
      answer:
        'WhipAlgo is designed to work across all asset classes including crypto, forex, stocks, indices, and commodities. It supports all timeframes from 1 minute to monthly, though most traders use it on H1, H4, Daily, and Weekly timeframes for optimal signal quality.',
      category: 'Compatibility',
    },
    {
      icon: <Shield size={20} />,
      question: 'Do I need TradingView Premium?',
      answer:
        'No, indicators work on all TradingView plans including the free version. However, some advanced features like multiple indicators on the same chart may require a higher tier plan.',
      category: 'Requirements',
    },
    {
      icon: <Clock size={20} />,
      question: 'Can I backtest the system?',
      answer:
        "Yes. Since WhipAlgo runs entirely on TradingView, you can use TradingView's built-in strategy tester to backtest signals on historical data. This allows you to verify performance before using real capital.",
      category: 'Performance',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="landing-section"
      style={{ padding: '100px 48px', maxWidth: '1200px', margin: '0 auto' }}
    >
      <div
        style={{
          position: 'relative',
          border: '1px solid rgba(124,92,252,0.2)',
          background:
            'linear-gradient(145deg, rgba(12,12,24,0.96), rgba(10,10,20,0.96))',
          borderRadius: '20px',
          padding: '32px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-80px',
            width: '340px',
            height: '340px',
            background:
              'radial-gradient(circle, rgba(124,92,252,0.2), transparent 68%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px',
            }}
          >
            <Label variant="section-header" size="lg">
              FAQ
            </Label>
            <div
              style={{
                width: '44px',
                height: '2px',
                background: 'linear-gradient(90deg, #7c5cfc, transparent)',
                borderRadius: '2px',
              }}
            />
          </div>

          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              lineHeight: 1.14,
              letterSpacing: '-0.9px',
              color: '#fff',
              marginBottom: '10px',
            }}
          >
            Frequently asked questions.
          </h2>

          <p
            style={{
              color: '#c7d0e2',
              maxWidth: '620px',
              fontSize: 'clamp(14px, 1.6vw, 16px)',
              lineHeight: 1.72,
              marginBottom: '26px',
            }}
          >
            Clear answers on signals, markets, setup, and practical usage of
            the WhipAlgo framework.
          </p>

          <div className="faq-accordion" style={{ display: 'grid', gap: '12px' }}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    border: isOpen
                      ? '1px solid rgba(124,92,252,0.45)'
                      : '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '14px',
                    background: isOpen
                      ? 'rgba(124,92,252,0.08)'
                      : 'rgba(255,255,255,0.02)',
                    overflow: 'hidden',
                    transition: 'all 0.22s ease',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      color: 'inherit',
                      textAlign: 'left',
                      padding: '16px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '14px',
                    }}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        minWidth: 0,
                      }}
                    >
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '36px',
                          height: '36px',
                          borderRadius: '9px',
                          background: 'rgba(124,92,252,0.18)',
                          border: '1px solid rgba(124,92,252,0.3)',
                          color: '#fff',
                          flexShrink: 0,
                        }}
                      >
                        {faq.icon}
                      </div>

                      <div style={{ minWidth: 0 }}>
                        <h3
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: 'clamp(15px, 1.8vw, 17px)',
                            fontWeight: 600,
                            color: '#fff',
                            lineHeight: 1.45,
                            marginBottom: '6px',
                          }}
                        >
                          {faq.question}
                        </h3>
                        <Label variant="default" size="sm">
                          {faq.category}
                        </Label>
                      </div>
                    </div>

                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.14)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: isOpen
                          ? 'rgba(124,92,252,0.22)'
                          : 'rgba(255,255,255,0.03)',
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <ChevronDown size={16} style={{ color: '#d6dceb' }} />
                    </div>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    style={{
                      maxHeight: isOpen ? '260px' : '0',
                      opacity: isOpen ? 1 : 0,
                      transition: 'all 0.24s ease',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        borderTop: '1px solid rgba(255,255,255,0.08)',
                        padding: '14px 16px 16px',
                        background: 'rgba(255,255,255,0.02)',
                      }}
                    >
                      <p
                        style={{
                          color: '#d3dbea',
                          fontSize: 'clamp(14px, 1.6vw, 15px)',
                          lineHeight: 1.72,
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .faq-accordion {
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
