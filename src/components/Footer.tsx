import React from 'react';
import HighlightBox from './HighlightBox';
import logo from '../assets/logo.png';
import { motion, useInView } from 'framer-motion';

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
        <motion.div
          style={{ display: 'flex', alignItems: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <motion.img
            src={logo}
            alt="Adsentric"
            style={{ height: '32px', width: 'auto' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
        </motion.div>
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