import React from 'react';
import HighlightBox from './HighlightBox';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: 'var(--color-background)',
        padding: '3.5rem 2.5rem',
        borderTop: '2px solid #ececec',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={logo}
            alt="Adsentric"
            style={{
              height: '32px',
              width: 'auto',
            }}
          />
        </div>
        <div
          style={{
            fontSize: '0.95rem',
            opacity: 0.7,
            textAlign: 'center',
            maxWidth: '600px',
            lineHeight: 1.6,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          © {new Date().getFullYear()} Adsentric. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 