import React from 'react';
import HighlightBox from './HighlightBox';
import { motion, useInView } from 'framer-motion';

// Import images with error handling
const importImage = (path: string) => {
  try {
    return new URL(`../assets/ads/${path}`, import.meta.url).href;
  } catch (error) {
    console.error(`Failed to load image: ${path}`, error);
    return ''; // Return empty string as fallback
  }
};

const adImages = Array.from({ length: 8 }, (_, i) => importImage(`${i + 1}.png`));

const scrollToAuditForm = () => {
  const element = document.getElementById('audit-form');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const ScrollingAdsSection: React.FC = () => {
  return (
    <>
      <section
        style={{
          background: '#fff',
          padding: '4rem 0 3rem 0',
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
            fontSize: '2rem',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '1.2rem',
            color: 'var(--color-text)',
            padding: '0 1.5rem',
          }}
        >
          With ads <HighlightBox>like these</HighlightBox>?
        </div>
        <div
          style={{
            color: '#555',
            fontWeight: 500,
            fontSize: '1.15rem',
            marginBottom: '2.2rem',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            maxWidth: '520px',
            padding: '0 1.5rem',
          }}
        >
          Don't waste thousands on testing, we already know what works.
        </div>
        {/* Scrolling ads rows */}
        <div style={{ width: '100%', overflow: 'hidden', maxWidth: '1200px', position: 'relative', zIndex: 2 }}>
          {/* Top row: left to right */}
          <div style={{ position: 'relative', width: '100%', height: '120px', marginBottom: '1.5rem' }}>
            <div className="marquee-row" style={{ display: 'flex', alignItems: 'center', height: '100%', animation: 'marquee-left 18s linear infinite' }}>
              {adImages.concat(adImages).map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.7, delay: 0.1 + (i % adImages.length) * 0.08 }}
                  style={{ minWidth: '120px', width: '120px', height: '120px', margin: '0 1.2rem', background: '#f3f3f3', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <img 
                    src={src} 
                    alt={`Ad example ${i + 1}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
          {/* Bottom row: right to left */}
          <div style={{ position: 'relative', width: '100%', height: '120px' }}>
            <div className="marquee-row" style={{ display: 'flex', alignItems: 'center', height: '100%', animation: 'marquee-right 18s linear infinite' }}>
              {adImages.concat(adImages).map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.7, delay: 0.1 + (i % adImages.length) * 0.08 }}
                  style={{ minWidth: '120px', width: '120px', height: '120px', margin: '0 1.2rem', background: '#f3f3f3', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <img 
                    src={src} 
                    alt={`Ad example ${i + 1}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Crimson Glow at Bottom */}
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
            background: 'radial-gradient(ellipse at 50% 100%, rgba(177,0,0,0.38) 0%, rgba(177,0,0,0.18) 40%, transparent 80%)',
            filter: 'blur(44px)',
          }}
          aria-hidden="true"
        />

        <style>
          {`
            @keyframes marquee-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            
            @media (max-width: 768px) {
              section {
                padding: 3rem 0 2rem 0 !important;
              }
              
              div[style*="fontSize: '2rem'"] {
                font-size: 1.6rem !important;
                margin-bottom: 1rem !important;
              }
              
              div[style*="fontSize: '1.15rem'"] {
                font-size: 1rem !important;
                margin-bottom: 1.5rem !important;
              }
              
              div[style*="height: '120px'"] {
                height: 100px !important;
              }
              
              div[style*="minWidth: '120px'"] {
                min-width: 100px !important;
                width: 100px !important;
                height: 100px !important;
                margin: 0 0.8rem !important;
              }

              button[style*="padding: '1.1rem 2.2rem'"] {
                padding: 0.9rem 1.8rem !important;
                font-size: 1rem !important;
              }
            }
            
            @media (max-width: 480px) {
              section {
                padding: 2.5rem 0 1.5rem 0 !important;
              }
              
              div[style*="fontSize: '2rem'"] {
                font-size: 1.4rem !important;
              }
              
              div[style*="fontSize: '1.15rem'"] {
                font-size: 0.9rem !important;
              }
              
              div[style*="height: '120px'"] {
                height: 90px !important;
              }
              
              div[style*="minWidth: '120px'"] {
                min-width: 90px !important;
                width: 90px !important;
                height: 90px !important;
                margin: 0 0.6rem !important;
              }

              button[style*="padding: '1.1rem 2.2rem'"] {
                padding: 0.8rem 1.5rem !important;
                font-size: 0.95rem !important;
              }
            }
          `}
        </style>
      </section>
    </>
  );
};

export default ScrollingAdsSection; 