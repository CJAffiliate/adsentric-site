import React from 'react';

const brandLogos = [
  // Leaf logo
  <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 5C25 5 15 15 15 30C15 35 17 38 20 38C23 38 25 35 25 30C25 20 30 15 40 15C50 15 55 20 55 30C55 35 57 38 60 38C63 38 65 35 65 30C65 15 55 5 40 5Z" fill="white"/>
  </svg>,
  // Backward N logo
  <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5L20 35L30 35L50 15L50 35L60 35L60 5L50 5L30 25L30 5L20 5Z" fill="white"/>
  </svg>,
  // TradingIQ logo
  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="28" fill="white" fontFamily="Arial" fontSize="24" fontWeight="bold">Trading</text>
    <text x="85" y="28" fill="#0066FF" fontFamily="Arial" fontSize="24" fontWeight="bold">IQ</text>
  </svg>,
  // Wedding Hire logo
  <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 5C35 5 30 7 25 10C20 13 15 18 15 25C15 32 20 35 25 35C30 35 35 32 40 25C45 32 50 35 55 35C60 35 65 32 65 25C65 18 60 13 55 10C50 7 45 5 40 5Z" fill="white"/>
    <path d="M40 15L40 25" stroke="white" strokeWidth="2"/>
    <path d="M35 20L45 20" stroke="white" strokeWidth="2"/>
  </svg>,
  // YOU? logo
  <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="10" y="28" fill="white" fontFamily="Arial" fontSize="24" fontWeight="bold">YOU?</text>
  </svg>
];

const BrandsSection: React.FC = () => {
  return (
    <section
      style={{
        background: '#7A0011', // deep burgundy
        padding: '3.5rem 0',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          color: '#fff',
          fontWeight: 700,
          fontSize: '1rem',
          letterSpacing: '0.08em',
          marginBottom: '2.5rem',
          textTransform: 'uppercase',
          textAlign: 'center',
          opacity: 0.92,
        }}
      >
        BRANDS WHO TRUST US:
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.5rem',
          width: '100%',
          maxWidth: '900px',
          padding: '0 1rem',
        }}
      >
        {brandLogos.map((logo, i) => (
          <div
            key={i}
            style={{
              width: '120px',
              height: '60px',
              background: 'rgba(255,255,255,0.10)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)',
            }}
          >
            {logo}
          </div>
        ))}
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            section {
              padding: 2.5rem 0 !important;
            }
            
            div[style*="marginBottom: '2.5rem'"] {
              margin-bottom: 1.5rem !important;
              font-size: 0.9rem !important;
            }
            
            div[style*="gap: '2.5rem'"] {
              gap: 1.5rem !important;
            }
            
            div[style*="width: '120px'"] {
              width: 100px !important;
              height: 50px !important;
            }
          }
          
          @media (max-width: 480px) {
            div[style*="width: '120px'"] {
              width: 90px !important;
              height: 45px !important;
            }
            
            div[style*="gap: '2.5rem'"] {
              gap: 1rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default BrandsSection; 