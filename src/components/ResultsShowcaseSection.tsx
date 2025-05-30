import React, { useEffect, useState } from 'react';
import HighlightBox from './HighlightBox';
import { motion, useAnimation, useInView } from 'framer-motion';
import greenHomePathImg from '../assets/case-studies/greenhomepath.png';

const useCountUp = (end: number, duration = 1.5, decimals = 0) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const current = start + (end - start) * progress;
      setCount(progress === 1 ? end : current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return {
    count: decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString(),
    setIsVisible
  };
};

const ResultsShowcaseSection: React.FC = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const { count: leadCount, setIsVisible: setLeadVisible } = useCountUp(11000, 2.5);
  const { count: roasCount, setIsVisible: setRoasVisible } = useCountUp(5.8, 2.5, 1);
  const { count: staffCount, setIsVisible: setStaffVisible } = useCountUp(20, 2.5, 0);

  useEffect(() => {
    if (inView) {
      setLeadVisible(true);
      setRoasVisible(true);
      setStaffVisible(true);
      controls.start("visible");
    }
  }, [inView, controls, setLeadVisible, setRoasVisible, setStaffVisible]);

  return (
    <section
      ref={ref}
      style={{
        background: '#fff',
        padding: '4rem 0 2.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '2.1rem',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '2.5rem',
            lineHeight: 1.13,
            color: '#1a1a1a',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap'
          }}
        >
          Want results <HighlightBox>like these?</HighlightBox>
        </motion.div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3.5rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            position: 'relative'
          }}
        >
          {/* Red glow behind stats */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '800px',
              height: '200px',
              background: 'radial-gradient(circle at center, rgba(122,0,17,0.08) 0%, transparent 70%)',
              filter: 'blur(40px)',
              zIndex: 0,
              pointerEvents: 'none'
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
          >
            <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#7A0011', marginBottom: '0.5rem' }}>
              {leadCount}+
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#7A0011', opacity: 0.92 }}>
              leads and counting
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
          >
            <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#7A0011', marginBottom: '0.5rem' }}>
              {roasCount}x
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#7A0011', opacity: 0.92 }}>
              ROAS
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
          >
            <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#7A0011', marginBottom: '0.5rem' }}>
              {staffCount}%
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#7A0011', opacity: 0.92 }}>
              increase in staff
            </div>
          </motion.div>
        </div>

        {/* Content Container */}
        <div style={{
          display: 'flex',
          gap: '3rem',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              flex: '0 0 320px'
            }}
          >
            <div
              style={{
                width: 320,
                height: 640,
                background: '#fff',
                borderRadius: '38px',
                border: '2.5px solid #ececec',
                boxShadow: '0 8px 48px rgba(122,0,17,0.13)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 70,
                  height: 10,
                  background: '#ececec',
                  borderRadius: 8,
                  zIndex: 2
                }}
              />
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={greenHomePathImg}
                  alt="Green Home Path Landing Page"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 36
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div style="color: #7A0011; font-weight: 700; font-size: 1.2rem; text-align: center; padding: 2rem;">Screenshot coming soon</div>';
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              flex: '1 1 400px',
              maxWidth: 600,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.97) 0%, rgba(248,230,234,0.97) 100%)',
              border: '1.5px solid #F8E6EA',
              borderRadius: '24px',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(122,0,17,0.07)'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle at top right, rgba(122,0,17,0.08) 0%, transparent 70%)',
                zIndex: 0
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <HighlightBox>Green Home Path</HighlightBox>
              </div>
              <div style={{ 
                fontSize: '0.9rem', 
                fontWeight: 600, 
                color: '#7A0011', 
                marginBottom: '1.2rem',
                letterSpacing: '0.02em',
                textTransform: 'uppercase'
              }}>
                Lead Generation
              </div>
              <p style={{
                color: '#1a1a1a',
                fontSize: '1.05rem',
                fontWeight: 500,
                lineHeight: 1.6,
                marginBottom: '1.5rem'
              }}>
                Bespoke landing page we built to capture region-specific heat pump installation leads.
              </p>
              <p style={{
                color: '#1a1a1a',
                fontSize: '1.05rem',
                fontWeight: 500,
                lineHeight: 1.6
              }}>
                Green Home Path was then able to sell and close these leads on behalf of various UK heat pump installation companies — resulting in them having to hire additional SDRs to keep up with the volume, and successfully scale their business after months of stagnation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section {
            padding: 3rem 1rem !important;
          }

          div[style*="font-size: 2.1rem"] {
            font-size: 1.3rem !important;
            margin-bottom: 2rem !important;
            padding: 0 1rem !important;
            line-height: 1.3 !important;
          }

          div[style*="width: 320px"] {
            width: 280px !important;
            height: 560px !important;
            min-width: 280px !important;
            min-height: 560px !important;
            margin: 0 auto !important;
          }

          div[style*="gap: 3.5rem"] {
            gap: 2rem !important;
          }

          div[style*="font-size: 2.8rem"] {
            font-size: 2.2rem !important;
          }

          div[style*="padding: 2.5rem"] {
            padding: 1.5rem !important;
          }

          img {
            object-fit: contain !important;
            object-position: center !important;
            padding: 0.5rem !important;
          }

          div[style*="flex: '1 1 400px'"] {
            flex: 1 1 100% !important;
            max-width: 100% !important;
            margin-top: 2rem !important;
          }
        }

        @media (max-width: 700px) {
          section {
            padding: 2.5rem 0.8rem !important;
          }

          div[style*="gap: 3.5rem"] {
            gap: 1.5rem !important;
          }

          div[style*="font-size: 2.8rem"] {
            font-size: 1.8rem !important;
          }

          div[style*="font-size: 1.1rem"] {
            font-size: 1rem !important;
          }

          div[style*="width: 320px"] {
            width: 240px !important;
            height: 480px !important;
            min-width: 240px !important;
            min-height: 480px !important;
          }

          div[style*="flex: '1 1 400px'"] {
            flex: 1 1 100% !important;
            max-width: 100% !important;
            margin-top: 1.5rem !important;
          }

          div[style*="padding: 2.5rem"] {
            padding: 1.2rem !important;
          }

          div[style*="fontSize: 1.05rem"] {
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
          }

          div[style*="marginBottom: 1.5rem"] {
            margin-bottom: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: 2rem 0.6rem !important;
          }

          div[style*="font-size: 2.1rem"] {
            font-size: 1.2rem !important;
            margin-bottom: 1.5rem !important;
            padding: 0 0.6rem !important;
          }

          div[style*="width: 320px"] {
            width: 220px !important;
            height: 440px !important;
            min-width: 220px !important;
            min-height: 440px !important;
          }

          div[style*="font-size: 2.8rem"] {
            font-size: 1.6rem !important;
          }

          div[style*="font-size: 1.1rem"] {
            font-size: 0.9rem !important;
          }

          div[style*="padding: 2.5rem"] {
            padding: 1rem !important;
          }

          div[style*="fontSize: 1.05rem"] {
            font-size: 0.9rem !important;
            line-height: 1.4 !important;
          }

          div[style*="marginBottom: 1.5rem"] {
            margin-bottom: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ResultsShowcaseSection; 