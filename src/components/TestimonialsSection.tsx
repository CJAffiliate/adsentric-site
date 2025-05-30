import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Their ad campaigns have transformed our business. We've seen a 300% increase in leads.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc."
  },
  {
    quote: "The landing pages they created convert like nothing we've seen before. Pure magic.",
    author: "Michael Chen",
    role: "CEO",
    company: "GrowthLabs"
  },
  {
    quote: "Finally, a team that understands both creativity and data. Our ROI has never been better.",
    author: "Emma Rodriguez",
    role: "Founder",
    company: "InnovateX"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section
      style={{
        background: '#fff',
        padding: 'clamp(3rem, 6vw, 4.5rem) 0',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          fontWeight: 800,
          fontSize: 'clamp(1.4rem, 4vw, 2.1rem)',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          marginBottom: 'clamp(0.8rem, 2vw, 1.1rem)',
          color: 'var(--color-text)',
          padding: '0 clamp(1rem, 3vw, 1.5rem)',
        }}
      >
        What our clients say
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30vw, 320px), 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          width: '100%',
          maxWidth: '1200px',
          padding: '0 clamp(1rem, 3vw, 2rem)',
          marginTop: 'clamp(2rem, 4vw, 3rem)',
        }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              background: '#fff',
              borderRadius: 'clamp(12px, 2vw, 16px)',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(1rem, 2vw, 1.3rem)',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)',
                lineHeight: 1.5,
                color: 'var(--color-text)',
                fontWeight: 500,
              }}
            >
              "{testimonial.quote}"
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.3rem',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                }}
              >
                {testimonial.author}
              </div>
              <div
                style={{
                  fontSize: 'clamp(0.8rem, 1.6vw, 0.9rem)',
                  color: 'rgba(0,0,0,0.6)',
                }}
              >
                {testimonial.role}, {testimonial.company}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle gradient at bottom */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 0,
          transform: 'translateX(-50%)',
          width: 'clamp(300px, 80vw, 800px)',
          height: 'clamp(150px, 40vw, 400px)',
          background: 'radial-gradient(circle at center, rgba(122,0,17,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
    </section>
  );
};

export default TestimonialsSection; 