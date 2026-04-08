'use client';

export default function PrivacyPage() {
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
        Privacy Policy
      </h1>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        1. Information We Collect
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        When you use WhipAlgo, we may collect:
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
        <li>Name and email address (for account creation and billing)</li>
        <li>
          Payment information (processed securely via our payment provider — we
          do not store card details)
        </li>
        <li>TradingView username (to grant indicator access)</li>
        <li>Usage data and website analytics (pages visited, time on site)</li>
      </ul>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        2. How We Use Your Information
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        We use collected information to:
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
        <li>Provide and manage your subscription access</li>
        <li>Send billing receipts and service updates</li>
        <li>Respond to support requests</li>
        <li>Improve Service and website</li>
      </ul>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        We do not sell your personal data to any third party.
      </p>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        3. Data Storage and Security
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        Your data is stored securely and protected using industry-standard
        encryption. We retain your data for as long as your account is active,
        or as required by law.
      </p>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        4. Cookies
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        We use essential cookies to maintain your session and preference
        settings. Analytics cookies (if used) help us understand site traffic.
        You may disable cookies in your browser settings, which may affect
        certain site functionality.
      </p>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        5. Third-Party Services
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        We use following third-party services which have their own privacy
        policies:
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
        <li>Payment processor (e.g., Stripe) for billing</li>
        <li>TradingView for indicator delivery</li>
        <li>Email service provider for transactional emails</li>
      </ul>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        6. Your Rights
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        You have the right to:
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
        <li>Access personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data (subject to legal obligations)</li>
        <li>Opt out of non-essential communications at any time</li>
      </ul>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        7. Children's Privacy
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        WhipAlgo is not intended for users under age of 18. We do not knowingly
        collect data from minors.
      </p>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        8. Changes to This Policy
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        We may update this Privacy Policy periodically. We will notify you of
        significant changes via email or a notice on our website.
      </p>

      <h2
        style={{
          fontSize: '18px',
          margin: '36px 0 12px',
          color: '#ffffff',
        }}
      >
        9. Contact
      </h2>
      <p
        style={{
          fontSize: '15px',
          color: '#9ca3af',
          lineHeight: '1.8',
          marginBottom: '12px',
        }}
      >
        For privacy-related questions or requests, contact us at{' '}
        <a href="mailto:privacy@whipalgo.com" style={{ color: '#7c5cfc' }}>
          privacy@whipalgo.com
        </a>
        .
      </p>
    </div>
  );
}
