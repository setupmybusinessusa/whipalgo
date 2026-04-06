'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={scrolled ? 'scrolled' : ''}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 48px',
        background: scrolled ? 'rgba(8,8,16,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.3s',
      }}
    >
      <div
        style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '18px',
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '-0.5px',
        }}
      >
        Whip<span style={{ color: '#7c5cfc' }}>Algo</span>
      </div>

      <div style={{ display: 'flex', gap: '36px' }} className="nav-links">
        <a
          href="#calls"
          style={{
            color: '#6b6b85',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
            transition: 'color 0.2s',
          }}
        >
          Notable Calls
        </a>
        <a
          href="#how"
          style={{
            color: '#6b6b85',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
            transition: 'color 0.2s',
          }}
        >
          System
        </a>
        <a
          href="#performance"
          style={{
            color: '#6b6b85',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
            transition: 'color 0.2s',
          }}
        >
          Performance
        </a>
        <a
          href="#pricing"
          style={{
            color: '#6b6b85',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
            transition: 'color 0.2s',
          }}
        >
          Pricing
        </a>
        <a
          href="#faq"
          style={{
            color: '#6b6b85',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
            transition: 'color 0.2s',
          }}
        >
          FAQ
        </a>
        <a
          href="#about"
          style={{
            color: '#6b6b85',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
            transition: 'color 0.2s',
          }}
        >
          About
        </a>
      </div>

      <a
        href="#pricing"
        className="nav-cta"
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#5c3fdb';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#7c5cfc';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
        style={{
          background: '#7c5cfc',
          color: '#fff',
          border: 'none',
          padding: '10px 22px',
          borderRadius: '6px',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'background 0.2s, transform 0.15s',
        }}
      >
        Get Access
      </a>
    </nav>
  );
}
