'use client';

export default function TermsPage() {
  return (
    <div
      style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '140px 48px 100px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Go Home Button */}
      <div style={{ marginBottom: '32px' }}>
        <a
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#9ca3af',
            textDecoration: 'none',
            fontSize: '14px',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#7c5cfc';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#9ca3af';
          }}
        >
          ← Back to Home
        </a>
      </div>

      <div
        style={{
          fontSize: '14px',
          fontFamily: 'Space Mono, monospace',
          color: '#6b7280',
          marginBottom: '48px',
        }}
      >
        Last updated: January 2025
      </div>

      <h1
        style={{
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '8px',
          color: '#ffffff',
        }}
      >
        Terms of Service
      </h1>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        1. Acceptance of Terms
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        By accessing or using WhipAlgo ("the Service"), you agree to be bound by
        these Terms of Service. If you do not agree to these terms, do not use
        Service.
      </p>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        2. Description of Service
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        WhipAlgo provides access to proprietary TradingView indicators (Whip
        Trend Core, Whip Trend Confirmation, and Whip Channel Pro) that assist
        with market analysis. The Service is a decision-support tool and does
        not constitute:
      </p>
      <ul
        style={{
          paddingLeft: '20px',
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        <li>Financial or investment advice</li>
        <li>A managed trading service</li>
        <li>An automated trading system or bot</li>
        <li>A guarantee of any trading outcome or return</li>
      </ul>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        3. Risk Disclosure
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        Trading financial instruments involves substantial risk of loss. You
        acknowledge that:
      </p>
      <ul
        style={{
          paddingLeft: '20px',
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        <li>
          Past performance of any system or indicator does not guarantee future
          results
        </li>
        <li>You may lose some or all of your invested capital</li>
        <li>WhipAlgo is not responsible for any trading losses you incur</li>
        <li>You trade at your own risk using your own judgment</li>
      </ul>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        4. Subscription and Payment
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        Access to WhipAlgo indicators is provided on a monthly subscription
        basis. Subscriptions renew automatically unless cancelled. No refunds
        are issued for partial subscription periods.
      </p>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        5. Intellectual Property
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        All WhipAlgo indicators, code, content, and materials are proprietary.
        You may not copy, reverse-engineer, resell, share, or redistribute
        indicators or your access credentials under any circumstances.
      </p>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        6. Prohibited Use
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        You may not use the Service to:
      </p>
      <ul
        style={{
          paddingLeft: '20px',
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        <li>Share indicator access with others not subscribed</li>
        <li>Resell or sublicense access to any third party</li>
        <li>Attempt to reverse-engineer or extract indicator logic</li>
      </ul>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        7. Termination
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        We reserve the right to terminate your access if you breach these terms,
        without refund.
      </p>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        8. Limitation of Liability
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        To the maximum extent permitted by law, WhipAlgo shall not be liable for
        any indirect, incidental, special, or consequential damages arising from
        your use of Service.
      </p>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        9. Changes to Terms
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        We may update these terms at any time. Continued use of the Service
        after changes constitutes acceptance of the updated terms.
      </p>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        10. Contact
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        For questions regarding these terms, contact us at{' '}
        <a href="mailto:support@whipalgo.com" style={{ color: '#7c5cfc' }}>
          support@whipalgo.com
        </a>
        .
      </p>
    </div>
  );
}
