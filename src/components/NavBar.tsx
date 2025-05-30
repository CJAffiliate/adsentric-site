import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Logo.png';
import { animationClasses } from '../utils/animations';
import HighlightBox from './HighlightBox';

const NavBar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '0.85rem 2.5rem',
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
            height: '32px',
            width: 'auto',
          }}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <HighlightBox>
          <button
            onClick={() => scrollToSection('audit-form')}
            style={{
              background: 'none',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '1.05rem',
              padding: '0.7em 1.7em',
              boxShadow: 'none',
              cursor: 'pointer',
              transition: 'background 0.2s',
              fontFamily: 'var(--font-sans)',
              display: 'inline-block',
            }}
          >
            Get Your Free Audit
          </button>
        </HighlightBox>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            nav {
              padding: 0.7rem 1rem !important;
            }

            img {
              height: 24px !important;
            }

            button {
              font-size: 0.9rem !important;
              padding: 0.6em 1.2em !important;
              white-space: nowrap;
              min-width: 140px;
              text-align: center;
            }
          }

          @media (max-width: 480px) {
            nav {
              padding: 0.6rem 0.8rem !important;
            }

            img {
              height: 22px !important;
            }

            button {
              font-size: 0.85rem !important;
              padding: 0.5em 1em !important;
              min-width: 130px;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default NavBar; 