import React from 'react';
import Logo from '../assets/Logo.png';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: 'var(--color-background)',
        padding: '3rem 2rem',
        textAlign: 'center',
        borderTop: '2px solid #ececec',
      }}
    >
      <img
        src={Logo}
        alt="Adsentric"
        style={{
          height: '28px',
          marginBottom: '1.5rem',
        }}
      />
      <p
        style={{
          color: '#666',
          fontSize: '0.9rem',
          margin: 0,
        }}
      >
        © {new Date().getFullYear()} Adsentric. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer; 