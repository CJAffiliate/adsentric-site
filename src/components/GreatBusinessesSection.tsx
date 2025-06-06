import React from 'react';
import HighlightBox from './HighlightBox';
import { animationClasses } from '../utils/animations';

interface BusinessCard {
  icon: React.ReactNode;
  heading: string;
  text: string;
}

const bullets: BusinessCard[] = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#F8E6EA" />
        <path d="M10 17.5l4 3.5 8-9" stroke="#7A0011" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    heading: 'Turn awareness into action',
    text: "We don't just get you clicks - we get conversions."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#F8E6EA" />
        <path d="M10 17.5l4 3.5 8-9" stroke="#7A0011" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    heading: "Amplify what's already working",
    text: 'We optimize your best assets and cut out waste.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#F8E6EA" />
        <path d="M10 17.5l4 3.5 8-9" stroke="#7A0011" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    heading: 'Build systems that scale',
    text: 'Automated, repeatable funnels that grow with your business.'
  },
];

const scrollToAuditForm = () => {
  const element = document.getElementById('audit-form');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const GreatBusinessesSection: React.FC = () => (
  <section
    style={{
      background: '#fff',
      padding: '4.5rem 0 3.5rem 0',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      border: 'none',
      boxSizing: 'border-box',
    }}
  >
    <div
      className={animationClasses.fadeIn}
      style={{
        fontWeight: 800,
        fontSize: '2.1rem',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
        marginBottom: '1.1rem',
        letterSpacing: '0.01em',
        lineHeight: 1.13,
        color: '#1a1a1a',
        padding: '0 1.5rem',
        maxWidth: 900,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}
    >
      Most <HighlightBox>great businesses</HighlightBox> aren't great marketers.
    </div>
    <div
      className={animationClasses.slideUp}
      style={{
        color: '#7A0011',
        fontWeight: 500,
        fontSize: '1.15rem',
        marginBottom: '2.8rem',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
        maxWidth: '520px',
        padding: '0 1.5rem',
        lineHeight: 1.5,
      }}
    >
      Your job is to build an incredible product or service - we make sure people actually see it, understand it and buy it.
    </div>
    <div style={{ position: 'relative', width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Connector line (desktop: horizontal, mobile: vertical) */}
      <div className="gb-connector" aria-hidden="true" />
      <div
        className="animate-stagger"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: '2.5rem',
          width: '100%',
          flexWrap: 'nowrap',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {bullets.map((b) => (
          <div
            key={b.heading}
            className={animationClasses.fadeIn}
            style={{
              background: 'rgba(255,255,255,0.92)',
              borderRadius: '20px',
              boxShadow: '0 8px 32px 0 rgba(122,0,17,0.10)',
              padding: '2.5rem 1.7rem 2.1rem 1.7rem',
              minWidth: '220px',
              maxWidth: '320px',
              flex: '1 1 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              border: '1.5px solid #F8E6EA',
              transition: 'box-shadow 0.22s, border 0.22s, transform 0.22s',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              outline: 'none',
              willChange: 'transform, box-shadow',
            }}
            tabIndex={0}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 48px 0 rgba(122,0,17,0.16)';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px) scale(1.035) rotate(-1deg)';
              (e.currentTarget as HTMLDivElement).style.border = '1.5px solid #7A0011';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px 0 rgba(122,0,17,0.10)';
              (e.currentTarget as HTMLDivElement).style.transform = 'none';
              (e.currentTarget as HTMLDivElement).style.border = '1.5px solid #F8E6EA';
            }}
          >
            {/* Crimson accent line at top */}
            <div style={{ height: 5, width: 48, background: 'linear-gradient(90deg, #7A0011 0%, #B10000 100%)', borderRadius: 3, marginBottom: 18 }} />
            <div style={{ marginBottom: '1.1rem', minHeight: 32 }}>{b.icon}</div>
            <div style={{ fontWeight: 700, fontSize: '1.13rem', marginBottom: '0.7rem', letterSpacing: '0.01em', fontFamily: 'Inter, sans-serif', color: '#1a1a1a' }}>{b.heading}</div>
            <div style={{ fontSize: '1rem', color: '#1a1a1a', fontWeight: 500, lineHeight: 1.5 }}>{b.text}</div>
          </div>
        ))}
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.8rem', width: '100%' }}>
      <HighlightBox>
        <button
          onClick={scrollToAuditForm}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
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
          Get Your Free Audit
          <svg width="38" height="16" viewBox="0 0 38 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8H36" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M29 2L36 8L29 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </HighlightBox>
    </div>
    {/* Subtle crimson glow at bottom for brand accent */}
    <div
      style={{
        position: 'absolute',
        left: '50%',
        bottom: 0,
        transform: 'translateX(-50%)',
        width: '1200px',
        height: '180px',
        pointerEvents: 'none',
        zIndex: 1,
        background: 'radial-gradient(ellipse at 50% 100%, rgba(122,0,17,0.10) 0%, rgba(122,0,17,0.04) 60%, transparent 100%)',
        filter: 'blur(32px)',
      }}
      aria-hidden="true"
    />
    <style>{`
      .gb-connector {
        position: absolute;
        top: 50%;
        left: 8%;
        right: 8%;
        height: 0;
        border-top: 3px solid #F8E6EA;
        z-index: 0;
      }

      @media (max-width: 900px) {
        section {
          padding: 3.5rem 1rem !important;
        }

        div[style*='font-size: 2.1rem'] {
          font-size: 1.5rem !important;
          margin-bottom: 1rem !important;
          padding: 0 1rem !important;
          line-height: 1.3 !important;
        }

        div[style*='font-size: 1.15rem'] {
          font-size: 1rem !important;
          margin-bottom: 2rem !important;
          padding: 0 1.5rem !important;
          line-height: 1.5 !important;
        }

        div[style*='gap: 2.5rem'] {
          gap: 1.5rem !important;
          padding: 0 1rem !important;
        }

        div[style*='padding: 2.5rem 1.7rem 2.1rem 1.7rem'] {
          padding: 1.5rem 1rem 1.2rem 1rem !important;
          min-width: 280px !important;
          max-width: 100% !important;
        }

        .gb-connector {
          display: none;
        }
      }

      @media (max-width: 700px) {
        section {
          padding: 3rem 0.8rem !important;
        }

        div[style*='flex-direction: row'] {
          flex-direction: column !important;
          gap: 1.2rem !important;
          padding: 0 0.8rem !important;
        }

        div[style*='minWidth: 220px'] {
          min-width: 0 !important;
          width: 100% !important;
          margin: 0 !important;
        }

        div[style*='maxWidth: 320px'] {
          max-width: 100% !important;
        }

        div[style*='padding: 2.5rem 1.7rem 2.1rem 1.7rem'] {
          padding: 1.5rem 1.2rem 1.2rem 1.2rem !important;
        }

        div[style*='font-size: 2.1rem'] {
          font-size: 1.4rem !important;
          padding: 0 0.8rem !important;
          margin-bottom: 0.8rem !important;
        }

        div[style*='font-size: 1.15rem'] {
          font-size: 0.95rem !important;
          padding: 0 1rem !important;
          margin-bottom: 1.5rem !important;
        }

        svg {
          width: 36px !important;
          height: 36px !important;
        }

        div[style*='marginBottom: 1.1rem'] {
          margin-bottom: 0.8rem !important;
        }

        div[style*='fontSize: 1.13rem'] {
          font-size: 1.1rem !important;
          margin-bottom: 0.5rem !important;
        }

        div[style*='fontSize: 1rem'] {
          font-size: 0.95rem !important;
          line-height: 1.5 !important;
        }

        button[style*='padding: 1.1rem 2.2rem'] {
          padding: 0.9rem 1.8rem !important;
          font-size: 1rem !important;
          width: 100% !important;
          max-width: 280px !important;
        }

        button svg {
          width: 32px !important;
          height: 14px !important;
        }
      }

      @media (max-width: 480px) {
        section {
          padding: 2.5rem 0.6rem !important;
        }

        div[style*='font-size: 2.1rem'] {
          font-size: 1.3rem !important;
          padding: 0 0.6rem !important;
          margin-bottom: 0.6rem !important;
        }

        div[style*='font-size: 1.15rem'] {
          font-size: 0.9rem !important;
          padding: 0 0.8rem !important;
          margin-bottom: 1.2rem !important;
        }

        div[style*='padding: 2.5rem 1.7rem 2.1rem 1.7rem'] {
          padding: 1.2rem 1rem 1rem 1rem !important;
        }

        svg {
          width: 32px !important;
          height: 32px !important;
        }

        div[style*='marginBottom: 1.1rem'] {
          margin-bottom: 0.6rem !important;
        }

        div[style*='fontSize: 1.13rem'] {
          font-size: 1rem !important;
          margin-bottom: 0.4rem !important;
        }

        div[style*='fontSize: 1rem'] {
          font-size: 0.9rem !important;
          line-height: 1.4 !important;
        }

        button[style*='padding: 1.1rem 2.2rem'] {
          padding: 0.8rem 1.5rem !important;
          font-size: 0.95rem !important;
          max-width: 240px !important;
        }

        button svg {
          width: 28px !important;
          height: 12px !important;
        }
      }
    `}</style>
  </section>
);

export default GreatBusinessesSection; 