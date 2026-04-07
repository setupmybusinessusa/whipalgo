'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const navLinks = [
    { href: '#calls', text: 'Notable Calls' },
    { href: '#how', text: 'System' },
    { href: '#performance', text: 'Performance' },
    { href: '#pricing', text: 'Pricing' },
    { href: '#faq', text: 'FAQ' },
    { href: '#about', text: 'About' },
  ];

  return (
    <>
      <nav
        className={`site-header ${scrolled ? 'scrolled' : ''}`}
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
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '-0.5px',
          }}
        >
          Whip<span style={{ color: '#7c5cfc' }}>Algo</span>
        </div>

        {/* Desktop Navigation */}
        <div
          className="desktop-nav"
          style={{
            display: 'flex',
            gap: '36px',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', gap: '24px' }}>
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: '#d1d5db',
                  textDecoration: 'none',
                  fontSize: 'clamp(14px, 1.5vw, 14px)',
                  fontWeight: 500,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#7c5cfc';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.textShadow =
                    '0 4px 12px rgba(124, 92, 252, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#d1d5db';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.textShadow = 'none';
                }}
              >
                {link.text}
              </a>
            ))}
          </div>

          <a
            href="#pricing"
            className="nav-cta"
            style={{
              background: '#7c5cfc',
              color: '#fff',
              border: 'none',
              padding: '10px 22px',
              borderRadius: '6px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(14px, 1.5vw, 14px)',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#5c3fdb';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow =
                '0 8px 25px rgba(124, 92, 252, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#7c5cfc';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Get Access
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu-panel"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            padding: '8px',
            cursor: 'pointer',
            borderRadius: '4px',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(124, 92, 252, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          {mobileMenuOpen ? (
            <X size={24} style={{ color: '#7c5cfc' }} />
          ) : (
            <Menu size={24} style={{ color: '#7c5cfc' }} />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          zIndex: 200,
          opacity: mobileMenuOpen ? 1 : 0,
          visibility: mobileMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease',
        }}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu-panel"
        className={`mobile-menu-panel ${mobileMenuOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          width: '280px',
          height: '100vh',
          background: 'linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 100%)',
          boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.3)',
          zIndex: 201,
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            padding: '80px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          {/* Mobile Menu Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.5px',
              }}
            >
              Whip<span style={{ color: '#7c5cfc' }}>Algo</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                padding: '8px',
                cursor: 'pointer',
                borderRadius: '4px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(124, 92, 252, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <X size={20} style={{ color: '#7c5cfc' }} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  fontWeight: 500,
                  padding: '12px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  border: '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#7c5cfc';
                  e.currentTarget.style.borderColor = 'rgba(124, 92, 252, 0.3)';
                  e.currentTarget.style.background = 'rgba(124, 92, 252, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#e2e8f0';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <div style={{ marginTop: '24px' }}>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #7c5cfc, #5c3fdb)',
                color: '#fff',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '8px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(16px, 1.8vw, 18px)',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textAlign: 'center',
                width: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg, #5c3fdb, #4a2fc7)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 8px 25px rgba(124, 92, 252, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg, #7c5cfc, #5c3fdb)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get Access
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          nav {
            padding: 14px 16px !important;
          }

          .desktop-nav {
            display: none !important;
          }

          .mobile-menu-button {
            display: block !important;
          }

          .mobile-menu-overlay.open {
            opacity: 1;
            visibility: visible;
          }

          .mobile-menu-panel.open {
            transform: translateX(0) !important;
          }
        }

        @media (max-width: 530px) {
          .mobile-menu-panel {
            width: min(86vw, 320px) !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu-button {
            display: none !important;
          }

          .mobile-menu-overlay {
            display: none !important;
          }

          .mobile-menu-panel {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
