import React, { useEffect, useRef } from 'react';
import HighlightBox from './HighlightBox';
import NotificationBubbles from './NotificationBubbles';
import { observeElements } from '../utils/animations';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      titleRef.current,
      subtitleRef.current,
      ctaRef.current
    ].filter(Boolean) as HTMLElement[];

    // Add initial opacity 0 to prevent flash
    elements.forEach(el => {
      if (el) el.style.opacity = '0';
    });

    const observer = observeElements(elements, (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add('animate-fade-in');
          });
        }
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
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
      <div className="floating-shapes" aria-hidden="true">
        {/* First row of shapes */}
        <div className="shape circle" style={{ '--delay': '0s', '--duration': '20s', '--size': '60px' } as React.CSSProperties} />
        <div className="shape square" style={{ '--delay': '2s', '--duration': '25s', '--size': '40px' } as React.CSSProperties} />
        <div className="shape plus" style={{ '--delay': '4s', '--duration': '22s', '--size': '50px' } as React.CSSProperties} />
        <div className="shape circle" style={{ '--delay': '6s', '--duration': '28s', '--size': '45px' } as React.CSSProperties} />
        <div className="shape square" style={{ '--delay': '8s', '--duration': '24s', '--size': '35px' } as React.CSSProperties} />
        <div className="shape plus" style={{ '--delay': '10s', '--duration': '26s', '--size': '55px' } as React.CSSProperties} />
        
        {/* Second row of shapes */}
        <div className="shape circle" style={{ '--delay': '1s', '--duration': '23s', '--size': '45px' } as React.CSSProperties} />
        <div className="shape square" style={{ '--delay': '3s', '--duration': '27s', '--size': '50px' } as React.CSSProperties} />
        <div className="shape plus" style={{ '--delay': '5s', '--duration': '21s', '--size': '40px' } as React.CSSProperties} />
        <div className="shape circle" style={{ '--delay': '7s', '--duration': '25s', '--size': '55px' } as React.CSSProperties} />
        <div className="shape square" style={{ '--delay': '9s', '--duration': '29s', '--size': '45px' } as React.CSSProperties} />
        <div className="shape plus" style={{ '--delay': '11s', '--duration': '24s', '--size': '50px' } as React.CSSProperties} />
        
        {/* Third row of shapes */}
        <div className="shape circle" style={{ '--delay': '0.5s', '--duration': '26s', '--size': '50px' } as React.CSSProperties} />
        <div className="shape square" style={{ '--delay': '2.5s', '--duration': '22s', '--size': '45px' } as React.CSSProperties} />
        <div className="shape plus" style={{ '--delay': '4.5s', '--duration': '28s', '--size': '40px' } as React.CSSProperties} />
        <div className="shape circle" style={{ '--delay': '6.5s', '--duration': '24s', '--size': '55px' } as React.CSSProperties} />
        <div className="shape square" style={{ '--delay': '8.5s', '--duration': '26s', '--size': '45px' } as React.CSSProperties} />
        <div className="shape plus" style={{ '--delay': '10.5s', '--duration': '23s', '--size': '50px' } as React.CSSProperties} />
      </div>

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
      <div
        style={{
          width: '100%',
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '7.5rem 0 2rem 0',
          opacity: 0,
          animation: 'fadeUp 0.8s ease forwards',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            color: 'var(--color-accent)',
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.08em',
            marginBottom: '1.1rem',
            textTransform: 'uppercase',
          }}
        >
          ATTENTION BUSINESSES
        </div>
        <h1
          className="hero-headline"
          style={{
            marginBottom: '1.2rem',
            color: 'var(--color-text)',
          }}
        >
          We build marketing systems that get you <HighlightBox>more customers</HighlightBox>
        </h1>
        <p
          className="hero-subheadline"
          style={{
            margin: '0 auto 2.2rem auto',
            maxWidth: '480px',
          }}
        >
          We implement paid ads, bespoke landing pages (like this one) and custom CRM tools to <strong style={{ fontWeight: 700 }}>grow your customer base.</strong>
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '0.5rem',
          }}
        >
          <HighlightBox>
            <button
              onClick={() => {
                const element = document.getElementById('audit-form');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'inherit',
                font: 'inherit',
                fontWeight: 700,
                fontSize: '1.1rem',
                padding: '1.1rem 2.2rem',
                borderRadius: '6px',
                cursor: 'pointer',
                outline: 'none',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.2rem',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                Get Your Free Audit
                <svg width="38" height="16" viewBox="0 0 38 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 8H36" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M29 2L36 8L29 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 400, color: '#fff', opacity: 0.85, marginTop: '0.15rem', lineHeight: 1, textAlign: 'center' }}>
                (in less than 48hrs)
              </span>
            </button>
          </HighlightBox>
        </div>
        {/* Notification Bubbles below CTA */}
        <NotificationBubbles />
        <style>
          {`
            @media (max-width: 768px) {
              section {
                min-height: 80vh !important;
                padding: 2rem 1rem !important;
              }

              .hero-headline {
                font-size: 1.8rem !important;
                line-height: 1.3 !important;
                padding: 0 0.5rem !important;
                margin-bottom: 1rem !important;
              }

              .hero-subheadline {
                font-size: 1rem !important;
                padding: 0 1rem !important;
                margin-bottom: 1.5rem !important;
                line-height: 1.5 !important;
              }

              button {
                padding: 0.9rem 1.8rem !important;
                font-size: 0.95rem !important;
                min-width: 240px !important;
                max-width: 90% !important;
                margin: 0 auto !important;
              }

              button svg {
                width: 28px !important;
                height: 12px !important;
              }

              button span:last-child {
                font-size: 0.75rem !important;
              }

              .floating-shapes {
                opacity: 0.5 !important;
              }

              .shape {
                --size: calc(var(--original-size) * 0.7) !important;
              }
            }

            @media (max-width: 480px) {
              section {
                min-height: 70vh !important;
                padding: 1.5rem 0.8rem !important;
              }

              .hero-headline {
                font-size: 1.5rem !important;
                padding: 0 0.3rem !important;
                margin-bottom: 0.8rem !important;
              }

              .hero-subheadline {
                font-size: 0.95rem !important;
                padding: 0 0.8rem !important;
                margin-bottom: 1.2rem !important;
              }

              button {
                padding: 0.8rem 1.5rem !important;
                font-size: 0.9rem !important;
                min-width: 220px !important;
                max-width: 85% !important;
              }

              button svg {
                width: 24px !important;
                height: 10px !important;
              }

              button span:last-child {
                font-size: 0.7rem !important;
              }

              .shape {
                --size: calc(var(--original-size) * 0.5) !important;
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
              --original-size: var(--size);
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
      </div>
    </section>
  );
};

export default Hero; 