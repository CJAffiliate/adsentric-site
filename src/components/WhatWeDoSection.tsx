import React from 'react';
import { motion } from 'framer-motion';
import HighlightBox from './HighlightBox';
import { AdIcon, LandingPageIcon, CRMIcon } from './Icons';

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceCard[] = [
  {
    title: 'Paid Ads',
    description: 'We create and manage high-converting ad campaigns across all major platforms.',
    icon: <AdIcon />
  },
  {
    title: 'Bespoke Landing Pages',
    description: 'Custom-designed landing pages that convert visitors into customers.',
    icon: <LandingPageIcon />
  },
  {
    title: 'CRM Tools',
    description: 'Custom CRM solutions to streamline your customer management process.',
    icon: <CRMIcon />
  }
];

const WhatWeDoSection: React.FC = () => (
  <section
    id="what-we-do"
    style={{
      background: 'rgb(122, 0, 17)',
      color: '#fff',
      padding: 'clamp(3rem, 6vw, 4.5rem) 0 clamp(2.5rem, 5vw, 3.5rem) 0',
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
        fontSize: 'clamp(1.4rem, 4vw, 2.1rem)',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
        marginBottom: 'clamp(0.8rem, 2vw, 1.1rem)',
        letterSpacing: '0.01em',
        lineHeight: 1.13,
        padding: '0 clamp(1rem, 3vw, 1.5rem)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'clamp(0.3rem, 1vw, 0.5rem)',
        flexWrap: 'wrap',
      }}
    >
      Our proven process <span>that</span> <HighlightBox>works.</HighlightBox>
    </div>
    <div
      style={{
        color: 'rgba(255,255,255,0.92)',
        fontWeight: 500,
        fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)',
        marginBottom: 'clamp(2rem, 4vw, 2.8rem)',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
        maxWidth: 'clamp(280px, 90vw, 520px)',
        padding: '0 clamp(1rem, 3vw, 1.5rem)',
        lineHeight: 1.5,
      }}
    >
      Tested. Optimised. Perfected.
    </div>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30vw, 320px), 1fr))',
        gap: 'clamp(1.5rem, 3vw, 2.5rem)',
        width: '100%',
        maxWidth: '1200px',
        padding: '0 clamp(1rem, 3vw, 2rem)',
      }}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '16px',
            padding: 'clamp(1.7rem, 3vw, 2.7rem) clamp(1.2rem, 2.5vw, 2.2rem)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(1rem, 2vw, 1.3rem)',
            minWidth: 'clamp(240px, 30vw, 300px)',
            maxWidth: 'clamp(280px, 90vw, 320px)',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              width: 'clamp(40px, 6vw, 48px)',
              height: 'clamp(40px, 6vw, 48px)',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 'clamp(0.8rem, 1.5vw, 1.3rem)',
            }}
          >
            {service.icon}
          </div>
          <div
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.13rem)',
              fontWeight: 600,
              marginBottom: 'clamp(0.4rem, 1vw, 0.5rem)',
            }}
          >
            {service.title}
          </div>
          <div
            style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              lineHeight: 1.5,
              opacity: 0.9,
            }}
          >
            {service.description}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Red Glow */}
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(300px, 80vw, 800px)',
        height: 'clamp(150px, 40vw, 400px)',
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  </section>
);

export default WhatWeDoSection; 