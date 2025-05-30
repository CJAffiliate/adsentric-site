import React from 'react';
import { animationClasses } from '../utils/animations';
import HighlightBox from './HighlightBox';

const services = [
  {
    title: 'Paid Ads',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="26" height="18" rx="4" fill="#fff" fillOpacity="0.13" stroke="#fff" strokeWidth="2.2" />
        <rect x="11" y="15" width="16" height="8" rx="2" fill="#fff" fillOpacity="0.32" />
        <circle cx="29" cy="19" r="2.5" fill="#fff" />
      </svg>
    ),
    benefit: 'Drive the RIGHT kind of traffic, through world class ad creatives'
  },
  {
    title: 'Bespoke Landing Pages',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="9" width="24" height="20" rx="3.5" fill="#fff" fillOpacity="0.13" stroke="#fff" strokeWidth="2.2" />
        <rect x="11" y="13" width="16" height="3" rx="1.5" fill="#fff" fillOpacity="0.32" />
        <rect x="11" y="18" width="10" height="2.5" rx="1.25" fill="#fff" fillOpacity="0.32" />
        <rect x="11" y="22" width="7" height="2.5" rx="1.25" fill="#fff" fillOpacity="0.32" />
      </svg>
    ),
    benefit: 'This traffic then lands to our bespoke landing pages (like this one)'
  },
  {
    title: 'CRM & Lead Nurturing',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="12" width="22" height="14" rx="3" fill="#fff" fillOpacity="0.13" stroke="#fff" strokeWidth="2.2" />
        <circle cx="19" cy="19" r="3.5" fill="#fff" fillOpacity="0.32" />
        <rect x="13" y="24" width="12" height="2" rx="1" fill="#fff" fillOpacity="0.32" />
      </svg>
    ),
    benefit: 'We ensure leads and prospects are nurtured into paying customers'
  },
  {
    title: 'Retargeting Email Campaigns',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="12" width="24" height="14" rx="3" fill="#fff" fillOpacity="0.13" stroke="#fff" strokeWidth="2.2" />
        <path d="M9 14l10 8 10-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    benefit: 'Smart email flows that re-engage and convert.'
  }
];

const WhatWeDoSection: React.FC = () => (
  <section
    style={{
      background: 'rgb(122, 0, 17)',
      color: '#fff',
      padding: '4.5rem 0 3.5rem 0',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        fontWeight: 800,
        fontSize: '2.1rem',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
        marginBottom: '1.1rem',
        letterSpacing: '0.01em',
        lineHeight: 1.13,
        padding: '0 1.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',
        flexWrap: 'wrap',
      }}
    >
      Our proven process <span>that</span> <HighlightBox>works.</HighlightBox>
    </div>
    <div
      style={{
        color: 'rgba(255,255,255,0.92)',
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
      Tested. Optimised. Perfected.
    </div>
    <div
      className="animate-stagger"
      style={{
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        gap: '2.5rem',
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      {services.map((service, i) => (
        <div
          key={service.title}
          className={animationClasses.fadeIn}
          style={{
            background: 'rgba(255,255,255,0.13)',
            borderRadius: '22px',
            boxShadow: '0 6px 32px 0 rgba(0,0,0,0.13)',
            border: '1.5px solid rgba(255,255,255,0.22)',
            padding: '2.7rem 2.2rem 2.1rem 2.2rem',
            minWidth: '240px',
            maxWidth: '300px',
            flex: '1 1 260px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            transition: 'box-shadow 0.22s, transform 0.22s',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            cursor: 'pointer',
            outline: 'none',
            willChange: 'transform, box-shadow',
            zIndex: 1,
          }}
          tabIndex={0}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 10px 36px 0 rgba(0,0,0,0.18)';
            (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px) scale(1.025)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 32px 0 rgba(0,0,0,0.13)';
            (e.currentTarget as HTMLDivElement).style.transform = 'none';
          }}
        >
          <div style={{ marginBottom: '1.3rem', minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {React.cloneElement(service.icon as React.ReactElement, { width: 48, height: 48 })}
          </div>
          <div style={{ fontWeight: 700, fontSize: '1.13rem', marginBottom: '0.7rem', letterSpacing: '0.01em', fontFamily: 'Inter, sans-serif' }}>{service.title}</div>
          <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.92)', fontWeight: 500, lineHeight: 1.5 }}>{service.benefit}</div>
        </div>
      ))}
    </div>
    {/* Subtle white glow at bottom */}
    <div
      style={{
        position: 'absolute',
        left: '50%',
        bottom: 0,
        transform: 'translateX(-50%)',
        width: '1200px',
        height: '320px',
        pointerEvents: 'none',
        zIndex: 1,
        background: 'radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.10) 40%, transparent 80%)',
        filter: 'blur(44px)',
      }}
      aria-hidden="true"
    />
    <div
      style={{
        color: 'rgba(255,255,255,0.85)',
        fontWeight: 500,
        fontSize: '1.05rem',
        marginTop: '2.8rem',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
        letterSpacing: '0.01em',
        opacity: 0.92,
      }}
    >
      It's that simple.
    </div>
    <style>{`
      @media (max-width: 1200px) {
        div[style*='flex-wrap: nowrap'] {
          flex-wrap: wrap !important;
        }
      }
      @media (max-width: 900px) {
        div[style*='font-size: 2.1rem'] {
          font-size: 1.5rem !important;
        }
        div[style*='font-size: 1.15rem'] {
          font-size: 1rem !important;
        }
        div[style*='gap: 2.5rem'] {
          gap: 1.5rem !important;
        }
        div[style*='padding: 2.7rem 2.2rem 2.1rem 2.2rem'] {
          padding: 1.7rem 1.2rem 1.4rem 1.2rem !important;
        }
      }
      @media (max-width: 600px) {
        div[style*='font-size: 2.1rem'] {
          font-size: 1.1rem !important;
        }
        div[style*='font-size: 1.15rem'] {
          font-size: 0.9rem !important;
        }
        div[style*='gap: 2.5rem'] {
          gap: 1rem !important;
        }
        div[style*='padding: 2.7rem 2.2rem 2.1rem 2.2rem'] {
          padding: 1.1rem 0.7rem 1rem 0.7rem !important;
        }
        div[style*='minWidth: 240px'] {
          min-width: 120px !important;
        }
        div[style*='maxWidth: 300px'] {
          max-width: 160px !important;
        }
      }
    `}</style>
  </section>
);

export default WhatWeDoSection; 