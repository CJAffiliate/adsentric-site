import React, { useRef, useEffect } from 'react';
import HighlightBox from './HighlightBox';
import { observeElements } from '../utils/animations';

// Import images with error handling
const importImage = (path: string) => {
  try {
    return new URL(`../assets/process/${path}`, import.meta.url).href;
  } catch (error) {
    console.error(`Failed to load image: ${path}`, error);
    return ''; // Return empty string as fallback
  }
};

const services = [
  {
    title: 'Ad Creative That Converts',
    desc: 'We craft static ad creatives built to grab attention and get clicks — scroll-stopping visuals paired with sharp copy.',
    img: importImage('Ad Creative That Converts.png'),
  },
  {
    title: 'Bespoke Landing Page Design',
    desc: 'Custom, mobile-first pages that are conversion-focused and aligned with your offer and audience.',
    img: importImage('Bespoke Landing Page Design.png'),
  },
  {
    title: 'CRM & Lead Nurturing Setup',
    desc: 'We wire in forms, flows, and automation to capture leads and guide them toward conversion — even after the click.',
    img: importImage('CRM & Lead Nurturing Setup.png'),
  },
  {
    title: 'Post-Purchase & Retargeting Flows',
    desc: 'Retention-focused email and ad systems designed to re-engage past customers and increase lifetime value.',
    img: importImage('Post-Purchase & Retargeting Flows.png'),
  },
  {
    title: 'Custom Tools & Smart Integrations',
    desc: 'Need something unique? We build internal tools and integrate systems that make your funnel more powerful.',
    img: importImage('Custom Tools & Smart Integrations.png'),
  },
];

const crimson = 'var(--color-accent)';
const softBg = '#FFF4F4';

const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.process-card');
      const observer = observeElements(Array.from(cards), (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#fff',
        padding: '4.5rem 0 4rem 0',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Small Tagline */}
      <div
        style={{
          color: crimson,
          fontWeight: 700,
          fontSize: '1rem',
          letterSpacing: '0.08em',
          marginBottom: '0.5rem',
          textTransform: 'uppercase',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        WHAT WE DO
      </div>
      {/* Main Title */}
      <div
        style={{
          color: 'var(--color-text)',
          fontWeight: 800,
          fontSize: '2.1rem',
          marginBottom: '0.7rem',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          lineHeight: 1.13,
        }}
      >
        Our proven marketing <HighlightBox>services</HighlightBox>
      </div>
      {/* Tagline below */}
      <div
        style={{
          color: '#555',
          fontWeight: 500,
          fontSize: '1.15rem',
          marginBottom: '2.7rem',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          maxWidth: '520px',
        }}
      >
        Simple. Optimised. Effective.
      </div>
      <div
        style={{
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          flexDirection: 'column',
          gap: '3.5rem',
          padding: '0 1.5rem',
        }}
      >
        {services.map((s, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={s.title}
              className="process-card-row"
              style={{
                display: 'flex',
                flexDirection: isEven ? 'row' : 'row-reverse',
                alignItems: 'center',
                gap: '2.5rem',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              {/* Actual image */}
              <div
                style={{
                  width: '320px',
                  height: '200px',
                  background: '#f3f3f3',
                  borderRadius: '18px',
                  boxShadow: '0 2px 16px 0 rgba(177,0,0,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  color: '#ccc',
                  flexShrink: 0,
                  overflow: 'hidden',
                }}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              {/* Text content */}
              <div
                style={{
                  background: softBg,
                  borderRadius: '18px',
                  boxShadow: '0 2px 16px 0 rgba(177,0,0,0.06)',
                  padding: '2.2rem 1.5rem 1.7rem 1.5rem',
                  minWidth: 0,
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  position: 'relative',
                  transition: 'transform 0.22s cubic-bezier(.4,0,.2,1), box-shadow 0.22s cubic-bezier(.4,0,.2,1)',
                  cursor: 'default',
                }}
                className="process-card"
                tabIndex={0}
                onMouseOver={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-7px) scale(1.025)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px 0 rgba(177,0,0,0.10)';
                }}
                onMouseOut={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = '';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 16px 0 rgba(177,0,0,0.06)';
                }}
              >
                <div
                  style={{
                    color: crimson,
                    fontWeight: 700,
                    fontSize: '1.13rem',
                    marginBottom: '0.7rem',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {s.title}
                </div>
                <div
                  style={{
                    color: '#222',
                    fontWeight: 400,
                    fontSize: '1.01rem',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1.6,
                    opacity: 0.92,
                  }}
                >
                  {s.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <style>
        {`
          @media (max-width: 900px) {
            section {
              padding: 3rem 0 !important;
            }
            
            div[style*="fontSize: '2.1rem'"] {
              font-size: 1.8rem !important;
              margin-bottom: 0.5rem !important;
            }
            
            div[style*="fontSize: '1.15rem'"] {
              font-size: 1rem !important;
              margin-bottom: 2rem !important;
              padding: 0 1rem !important;
            }
            
            .process-card-row {
              flex-direction: column !important;
              gap: 1.5rem !important;
            }
            
            div[style*="width: '320px'"] {
              width: 100% !important;
              max-width: 400px !important;
              height: 180px !important;
            }
            
            .process-card {
              padding: 1.5rem !important;
            }
          }
          
          @media (max-width: 480px) {
            section {
              padding: 2.5rem 0 !important;
            }
            
            div[style*="fontSize: '2.1rem'"] {
              font-size: 1.6rem !important;
            }
            
            div[style*="fontSize: '1.15rem'"] {
              font-size: 0.95rem !important;
            }
            
            .process-card-row {
              gap: 1rem !important;
            }
            
            div[style*="width: '320px'"] {
              height: 160px !important;
            }
            
            .process-card {
              padding: 1.2rem !important;
            }
            
            div[style*="fontSize: '1.13rem'"] {
              font-size: 1rem !important;
            }
            
            div[style*="fontSize: '1.01rem'"] {
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ProcessSection; 