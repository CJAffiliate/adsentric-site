import React from 'react';
import HighlightBox from './HighlightBox';

const HeroSection: React.FC = () => {
  const scrollToAuditForm = () => {
    const element = document.getElementById('audit-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        padding: '8rem 2.5rem 5rem',
        background: 'var(--color-background)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '3.5rem',
          fontWeight: 700,
          marginBottom: '1.5rem',
          lineHeight: 1.2,
          maxWidth: '800px',
          fontFamily: 'var(--font-sans)',
        }}
      >
        Transform Your{' '}
        <HighlightBox>
          <span style={{ color: '#fff' }}>Google Ads</span>
        </HighlightBox>{' '}
        Performance
      </h1>
      <p
        style={{
          fontSize: '1.25rem',
          lineHeight: 1.6,
          marginBottom: '2.5rem',
          maxWidth: '600px',
          opacity: 0.9,
          fontFamily: 'var(--font-sans)',
        }}
      >
        Get a free, comprehensive audit of your Google Ads account and discover
        opportunities to improve your ROI.
      </p>
      <HighlightBox>
        <button
          onClick={scrollToAuditForm}
          style={{
            background: 'none',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 700,
            fontSize: '1.1rem',
            padding: '0.8em 2em',
            boxShadow: 'none',
            cursor: 'pointer',
            transition: 'background 0.2s',
            fontFamily: 'var(--font-sans)',
          }}
        >
          Get Your Free Audit
        </button>
      </HighlightBox>
      <style>
        {`
          @media (max-width: 768px) {
            section {
              padding: 6rem 1rem 3rem !important;
            }

            h1 {
              font-size: 2.5rem !important;
              margin-bottom: 1rem !important;
            }

            p {
              font-size: 1.1rem !important;
              margin-bottom: 2rem !important;
              padding: 0 0.5rem !important;
            }

            button {
              font-size: 1rem !important;
              padding: 0.7em 1.5em !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection; 