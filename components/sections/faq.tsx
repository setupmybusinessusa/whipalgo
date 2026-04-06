'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What exactly is WhipAlgo — is it a bot or a signal group?',
      answer:
        'Neither. WhipAlgo is a set of three TradingView indicators that you add to your charts. They run on your TradingView account, on any pair or timeframe you choose. There is no Telegram group, no automated bot, no account access required.',
    },
    {
      question: "What's the difference between BUY and CONFIRM BUY?",
      answer:
        'A BUY signal indicates the system has detected a bullish breakout or directional shift. A CONFIRM BUY requires additional validation — the signal must also align with the SMA-based trend filter. CONFIRM signals are fewer in number but higher in quality. Many traders focus exclusively on the CONFIRM tier to reduce overtrading.',
    },
    {
      question: 'Does the system show take profit or stop loss levels?',
      answer:
        "No. WhipAlgo intentionally does not provide TP or SL levels. Risk management is the trader's responsibility and is highly dependent on individual position sizing, account size, and market context. The system provides directional bias and confirmation — you manage the trade.",
    },
    {
      question: 'What markets and timeframes does it work on?',
      answer:
        'WhipAlgo is designed to work across all asset classes including crypto, forex, stocks, indices, and commodities. It supports all timeframes from 1 minute to monthly, though most traders use it on H1, H4, Daily, and Weekly timeframes for optimal signal quality.',
    },
    {
      question: 'Do I need TradingView Premium?',
      answer:
        'No, the indicators work on all TradingView plans including the free version. However, some advanced features like multiple indicators on the same chart may require a higher tier plan.',
    },
    {
      question: 'Can I backtest the system?',
      answer:
        "Yes. Since WhipAlgo runs entirely on TradingView, you can use TradingView's built-in strategy tester to backtest the signals on historical data. This allows you to verify performance before using real capital.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
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
        FAQ
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
        Common questions.
      </h2>

      <div
        style={{
          marginTop: '48px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          maxWidth: '760px',
        }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              style={{
                width: '100%',
                background: '#0d0d1a',
                border: 'none',
                color: '#e8e8f0',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                padding: '20px 24px',
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#111122';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0d0d1a';
              }}
            >
              {faq.question}
              <span
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '20px',
                  color: '#7c5cfc',
                  flexShrink: 0,
                  marginLeft: '16px',
                  transition: 'transform 0.2s',
                  transform:
                    openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                background: '#0d0d1a',
                color: '#6b6b85',
                fontSize: '14px',
                lineHeight: 1.75,
                padding: openIndex === index ? '0 24px 20px' : '0',
                display: openIndex === index ? 'block' : 'none',
              }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
