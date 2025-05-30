import React, { useEffect, useRef } from 'react';
import HighlightBox from './HighlightBox';
import NotificationBubbles from './NotificationBubbles';
import { observeElements } from '../utils/animations';
import { motion, useInView } from 'framer-motion';

const Hero: React.FC = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-background)',
        padding: '0 1rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating Shapes Background */}
      <motion.div
        className="floating-shapes"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.1, delay: 0.1 }}
      >
        {/* First row of shapes */}
        <motion.div className="shape circle" style={{ '--delay': '0s', '--duration': '20s', '--size': '60px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.2 }} />
        <motion.div className="shape square" style={{ '--delay': '2s', '--duration': '25s', '--size': '40px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.3 }} />
        <motion.div className="shape plus" style={{ '--delay': '4s', '--duration': '22s', '--size': '50px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.4 }} />
        <motion.div className="shape circle" style={{ '--delay': '6s', '--duration': '28s', '--size': '45px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.5 }} />
        <motion.div className="shape square" style={{ '--delay': '8s', '--duration': '24s', '--size': '35px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.6 }} />
        <motion.div className="shape plus" style={{ '--delay': '10s', '--duration': '26s', '--size': '55px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.7 }} />
        {/* Second row of shapes */}
        <motion.div className="shape circle" style={{ '--delay': '1s', '--duration': '23s', '--size': '45px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.8 }} />
        <motion.div className="shape square" style={{ '--delay': '3s', '--duration': '27s', '--size': '50px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.9 }} />
        <motion.div className="shape plus" style={{ '--delay': '5s', '--duration': '21s', '--size': '40px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 1.0 }} />
        <motion.div className="shape circle" style={{ '--delay': '7s', '--duration': '25s', '--size': '55px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 1.1 }} />
        <motion.div className="shape square" style={{ '--delay': '9s', '--duration': '29s', '--size': '45px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 1.2 }} />
        <motion.div className="shape plus" style={{ '--delay': '11s', '--duration': '24s', '--size': '50px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 1.3 }} />
        {/* Third row of shapes */}
        <motion.div className="shape circle" style={{ '--delay': '0.5s', '--duration': '26s', '--size': '50px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 1.4 }} />
        <motion.div className="shape square" style={{ '--delay': '2.5s', '--duration': '22s', '--size': '45px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 1.5 }} />
        <motion.div className="shape plus" style={{ '--delay': '4.5s', '--duration': '28s', '--size': '40px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 1.6 }} />
        <motion.div className="shape circle" style={{ '--delay': '6.5s', '--duration': '24s', '--size': '55px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 1.7 }} />
        <motion.div className="shape square" style={{ '--delay': '8.5s', '--duration': '26s', '--size': '45px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 1.8 }} />
        <motion.div className="shape plus" style={{ '--delay': '10.5s', '--duration': '23s', '--size': '50px' } as React.CSSProperties} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 0.08, scale: 1 } : {}} transition={{ duration: 0.7, delay: 1.9 }} />
      </motion.div>

      {/* Crimson Glow */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 0,
          transform: 'translateX(-50%)',
          width: '1200px',
          height: '360px',
          pointerEvents: 'none',
          zIndex: 0,
          background: 'radial-gradient(ellipse at center, rgba(177,0,0,0.22) 0%, rgba(177,0,0,0.10) 60%, transparent 100%)',
          filter: 'blur(32px)',
        }}
        aria-hidden="true"
      />
      <motion.div
        style={{
          width: '100%',
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '7.5rem 0 2rem 0',
          position: 'relative',
          zIndex: 1,
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          style={{
            color: 'var(--color-accent)',
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.08em',
            marginBottom: '1.1rem',
            textTransform: 'uppercase',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          ATTENTION BUSINESSES
        </motion.div>
        <motion.h1
          className="hero-headline"
          style={{
            marginBottom: '1.2rem',
            color: 'var(--color-text)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          We build marketing systems that get you <HighlightBox>more customers</HighlightBox>
        </motion.h1>
        <motion.p
          className="hero-subheadline"
          style={{
            margin: '0 auto 2.2rem auto',
            maxWidth: '480px',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          We implement paid ads, bespoke landing pages (like this one) and custom CRM tools to <strong style={{ fontWeight: 700 }}>grow your customer base.</strong>
        </motion.p>
        <motion.div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.2rem' }} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.6 }}>
          <HighlightBox>
            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              style={{
                background: 'none',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '1.1rem',
                padding: '1.1rem 2.2rem',
                boxShadow: 'none',
                cursor: 'pointer',
                outline: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                fontFamily: 'Inter, sans-serif',
                transition: 'background 0.2s',
              }}
            >
              Get Started
              <svg width="38" height="16" viewBox="0 0 38 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8H36" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M29 2L36 8L29 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </HighlightBox>
        </motion.div>
        {/* Notification Bubbles below CTA */}
        <NotificationBubbles />
        <style>
          {`
            @media (max-width: 768px) {
              .hero-headline {
                font-size: 2.2rem !important;
                line-height: 1.2 !important;
                padding: 0 0.5rem;
              }

              .hero-subheadline {
                font-size: 1.1rem !important;
                padding: 0 1rem;
                margin-bottom: 1.8rem !important;
              }

              button {
                padding: 0.9rem 1.8rem !important;
                font-size: 1rem !important;
                min-width: 280px;
              }

              button svg {
                width: 32px;
                height: 14px;
              }

              button span:last-child {
                font-size: 0.8rem !important;
              }
            }

            @media (max-width: 480px) {
              .hero-headline {
                font-size: 1.8rem !important;
                padding: 0 0.3rem;
              }

              .hero-subheadline {
                font-size: 1rem !important;
                padding: 0 0.8rem;
                margin-bottom: 1.5rem !important;
              }

              button {
                padding: 0.8rem 1.5rem !important;
                font-size: 0.95rem !important;
                min-width: 260px;
              }

              button svg {
                width: 28px;
                height: 12px;
              }

              button span:last-child {
                font-size: 0.75rem !important;
              }
            }

            @keyframes fadeUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .floating-shapes {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 0;
              pointer-events: none;
            }

            .shape {
              position: absolute;
              opacity: 0.08;
              animation: float var(--duration) ease-in-out infinite;
              animation-delay: var(--delay);
              filter: blur(0.5px);
            }

            .circle {
              width: var(--size);
              height: var(--size);
              border-radius: 50%;
              background: var(--color-accent);
            }

            .square {
              width: var(--size);
              height: var(--size);
              background: var(--color-accent);
              transform: rotate(45deg);
            }

            .plus {
              width: var(--size);
              height: var(--size);
              position: relative;
            }

            .plus::before,
            .plus::after {
              content: '';
              position: absolute;
              background: var(--color-accent);
            }

            .plus::before {
              width: 100%;
              height: 20%;
              top: 40%;
            }

            .plus::after {
              width: 20%;
              height: 100%;
              left: 40%;
            }

            @keyframes float {
              0% {
                transform: translate(0, 100vh) rotate(0deg);
                opacity: 0;
              }
              10% {
                opacity: 0.08;
              }
              90% {
                opacity: 0.08;
              }
              100% {
                transform: translate(calc(100vw * var(--x, 0.5)), -100px) rotate(360deg);
                opacity: 0;
              }
            }

            .shape:nth-child(1) { --x: 0.2; left: 5%; }
            .shape:nth-child(2) { --x: 0.8; left: 15%; }
            .shape:nth-child(3) { --x: 0.4; left: 25%; }
            .shape:nth-child(4) { --x: 0.7; left: 35%; }
            .shape:nth-child(5) { --x: 0.3; left: 45%; }
            .shape:nth-child(6) { --x: 0.6; left: 55%; }
            .shape:nth-child(7) { --x: 0.5; left: 65%; }
            .shape:nth-child(8) { --x: 0.2; left: 75%; }
            .shape:nth-child(9) { --x: 0.8; left: 85%; }
            .shape:nth-child(10) { --x: 0.4; left: 95%; }
            .shape:nth-child(11) { --x: 0.7; left: 10%; }
            .shape:nth-child(12) { --x: 0.3; left: 20%; }
            .shape:nth-child(13) { --x: 0.6; left: 30%; }
            .shape:nth-child(14) { --x: 0.5; left: 40%; }
            .shape:nth-child(15) { --x: 0.2; left: 50%; }
            .shape:nth-child(16) { --x: 0.8; left: 60%; }
            .shape:nth-child(17) { --x: 0.4; left: 70%; }
            .shape:nth-child(18) { --x: 0.7; left: 80%; }
          `}
        </style>
      </motion.div>
    </section>
  );
};

export default Hero; 