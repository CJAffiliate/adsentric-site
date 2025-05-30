import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo.png';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <footer
      style={{
        background: 'rgb(122, 0, 17)',
        color: '#fff',
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
          padding: '0 clamp(1rem, 3vw, 1.5rem)',
        }}
      >
        Ready to grow?
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
        Let's create something amazing together.
      </div>

      <motion.form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(1rem, 2vw, 1.5rem)',
          width: '100%',
          maxWidth: 'clamp(280px, 90vw, 420px)',
          padding: '0 clamp(1rem, 3vw, 1.5rem)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(0.5rem, 1vw, 0.8rem)',
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 'clamp(8px, 1.5vw, 12px)',
              padding: 'clamp(0.8rem, 1.5vw, 1rem)',
              color: '#fff',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              width: '100%',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
          />
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                color: '#4CAF50',
                fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
                textAlign: 'center',
              }}
            >
              Thanks! We'll be in touch soon.
            </motion.div>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            background: '#fff',
            color: 'rgb(122, 0, 17)',
            border: 'none',
            borderRadius: 'clamp(8px, 1.5vw, 12px)',
            padding: 'clamp(0.8rem, 1.5vw, 1rem)',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'opacity 0.2s',
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          {isSubmitting ? 'Sending...' : 'Get Started'}
        </button>
      </motion.form>

      <div
        style={{
          marginTop: 'clamp(3rem, 6vw, 4rem)',
          fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
          color: 'rgba(255,255,255,0.6)',
          textAlign: 'center',
          padding: '0 clamp(1rem, 3vw, 1.5rem)',
        }}
      >
        © {new Date().getFullYear()} Adsentric. All rights reserved.
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
    </footer>
  );
};

export default Footer; 