import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/Logo.png';
import HighlightBox from './HighlightBox';

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: 'clamp(0.6rem, 2vw, 0.85rem) clamp(1rem, 3vw, 2.5rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'var(--color-background)',
        boxShadow: 'none',
        borderBottom: '2px solid #ececec',
        transition: 'all 0.3s cubic-bezier(.4,0,.2,1)',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <motion.img
          src={Logo}
          alt="Adsentric"
          style={{
            height: 'clamp(26px, 4vw, 32px)',
            width: 'auto',
          }}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        />
      </div>

      {/* Desktop Navigation */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(1.5rem, 3vw, 2.5rem)',
        }}
        className="desktop-nav"
      >
        <button
          onClick={() => scrollToSection('what-we-do')}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-text)',
            fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
            fontWeight: 500,
            cursor: 'pointer',
            padding: '0.5rem 0',
            opacity: 0.9,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
        >
          What We Do
        </button>
        <button
          onClick={() => scrollToSection('results')}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-text)',
            fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
            fontWeight: 500,
            cursor: 'pointer',
            padding: '0.5rem 0',
            opacity: 0.9,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
        >
          Results
        </button>
        <HighlightBox>
          <button
            onClick={() => scrollToSection('audit-form')}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: 'clamp(0.8rem, 1.6vw, 0.9rem)',
              fontWeight: 600,
              padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.8rem, 1.5vw, 1rem)',
              borderRadius: '4px',
              cursor: 'pointer',
              minWidth: 'clamp(80px, 15vw, 120px)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Get Started
          </button>
        </HighlightBox>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          padding: '0.5rem',
          cursor: 'pointer',
          zIndex: 1001,
        }}
        className="mobile-menu-button"
        aria-label="Toggle mobile menu"
      >
        <div
          style={{
            width: '24px',
            height: '2px',
            background: 'var(--color-text)',
            position: 'relative',
            transition: 'all 0.3s',
            transform: isMobileMenuOpen ? 'rotate(45deg)' : 'none',
          }}
        />
        <div
          style={{
            width: '24px',
            height: '2px',
            background: 'var(--color-text)',
            marginTop: '6px',
            transition: 'all 0.3s',
            opacity: isMobileMenuOpen ? '0' : '1',
          }}
        />
        <div
          style={{
            width: '24px',
            height: '2px',
            background: 'var(--color-text)',
            marginTop: '6px',
            transition: 'all 0.3s',
            transform: isMobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none',
          }}
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'var(--color-background)',
              padding: '5rem 2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              zIndex: 1000,
            }}
          >
            <button
              onClick={() => scrollToSection('what-we-do')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-text)',
                fontSize: '1.2rem',
                fontWeight: 500,
                cursor: 'pointer',
                padding: '0.5rem 0',
                textAlign: 'left',
              }}
            >
              What We Do
            </button>
            <button
              onClick={() => scrollToSection('results')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-text)',
                fontSize: '1.2rem',
                fontWeight: 500,
                cursor: 'pointer',
                padding: '0.5rem 0',
                textAlign: 'left',
              }}
            >
              Results
            </button>
            <HighlightBox>
              <button
                onClick={() => scrollToSection('audit-form')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  padding: '0.8rem 1.2rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                Get Started
              </button>
            </HighlightBox>
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          @media (max-width: 768px) {
            .desktop-nav {
              display: none !important;
            }

            .mobile-menu-button {
              display: block !important;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default NavBar; 