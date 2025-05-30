import React from 'react';
import { motion } from 'framer-motion';
import HighlightBox from './HighlightBox';

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

const ScrollingAdsSection: React.FC = () => {
  const ads = [
    'Google Ads',
    'Facebook Ads',
    'Instagram Ads',
    'TikTok Ads',
    'LinkedIn Ads',
    'Twitter Ads',
    'Pinterest Ads',
    'YouTube Ads',
    'Snapchat Ads',
    'Reddit Ads'
  ];

  return (
    <section
      style={{
        background: 'rgb(122, 0, 17)',
        color: '#fff',
        padding: 'clamp(1.5rem, 3vw, 2.5rem) 0',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          animation: 'scroll 30s linear infinite',
          whiteSpace: 'nowrap',
          width: 'fit-content',
        }}
      >
        {[...ads, ...ads].map((ad, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.9)',
              padding: 'clamp(0.5rem, 1vw, 0.8rem) clamp(1rem, 2vw, 1.5rem)',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 'clamp(8px, 1.5vw, 12px)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(0.5rem, 1vw, 0.8rem)',
            }}
          >
            <span>✨</span>
            {ad}
          </motion.div>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @media (max-width: 768px) {
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          }

          @media (max-width: 480px) {
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          }
        `}
      </style>
    </section>
  );
};

export default ScrollingAdsSection; 