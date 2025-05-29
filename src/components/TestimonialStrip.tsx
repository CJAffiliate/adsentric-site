import React from 'react';

interface Testimonial {
  company: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    company: "Green Home Path",
    message: "Leads keep flying in honestly, nearly 10k - we're struggling to even ship them to installers. Keep doing what you're doing."
  },
  {
    company: "NVISION Shades",
    message: "You lot literally sold us out. 2.8x ROAS and the supplier has ran out of the best seller - we're gonna have to take them out of the creative."
  },
  {
    company: "Trading IQ",
    message: "Lads can't thank you enough. Had the meeting with the investor today and the landing page secured £250,000 to get the tech built. Let me know if we can go forward with some ads!"
  },
  {
    company: "You?",
    message: "This could be you. All it takes is one smart audit."
  }
];

const TestimonialStrip: React.FC = () => {
  return (
    <section
      style={{
        background: 'rgb(122, 0, 17)',
        padding: '2rem 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          padding: '0 1rem',
          position: 'relative',
          width: 'fit-content',
          animation: 'scroll 60s linear infinite',
        }}
      >
        {/* First set of testimonials */}
        {testimonials.map((testimonial, index) => (
          <div
            key={`first-${index}`}
            style={{
              flex: '0 0 auto',
              maxWidth: '400px',
              minWidth: '300px',
              animation: `slideIn 0.5s ease-out ${index * 0.2}s forwards`,
              opacity: 0,
              position: 'relative',
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                borderRadius: '20px',
                padding: '1.2rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div
                style={{
                  color: 'rgb(122, 0, 17)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  marginBottom: '0.5rem',
                }}
              >
                {testimonial.company}
              </div>
              <div
                style={{
                  color: '#333',
                  fontSize: '0.95rem',
                  lineHeight: 1.5,
                }}
              >
                {testimonial.message}
              </div>
            </div>
          </div>
        ))}

        {/* Duplicate set for seamless scrolling */}
        {testimonials.map((testimonial, index) => (
          <div
            key={`second-${index}`}
            style={{
              flex: '0 0 auto',
              maxWidth: '400px',
              minWidth: '300px',
              animation: `slideIn 0.5s ease-out ${index * 0.2}s forwards`,
              opacity: 0,
              position: 'relative',
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                borderRadius: '20px',
                padding: '1.2rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div
                style={{
                  color: 'rgb(122, 0, 17)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  marginBottom: '0.5rem',
                }}
              >
                {testimonial.company}
              </div>
              <div
                style={{
                  color: '#333',
                  fontSize: '0.95rem',
                  lineHeight: 1.5,
                }}
              >
                {testimonial.message}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth edges */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '150px',
          background: 'linear-gradient(to right, rgb(122, 0, 17), transparent)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '150px',
          background: 'linear-gradient(to left, rgb(122, 0, 17), transparent)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <style>
        {`
          @media (max-width: 768px) {
            section {
              padding: 1.5rem 0 !important;
            }

            div[style*="minWidth: '300px'"] {
              min-width: 260px !important;
              max-width: 320px !important;
            }

            div[style*="padding: '1.2rem'"] {
              padding: 1rem !important;
            }

            div[style*="fontSize: '0.95rem'"] {
              font-size: 0.9rem !important;
              line-height: 1.4 !important;
            }

            div[style*="fontSize: '0.9rem'"] {
              font-size: 0.85rem !important;
            }

            div[style*="width: '150px'"] {
              width: 80px !important;
            }
          }

          @media (max-width: 480px) {
            section {
              padding: 1.2rem 0 !important;
            }

            div[style*="minWidth: '300px'"] {
              min-width: 240px !important;
              max-width: 280px !important;
            }

            div[style*="padding: '1.2rem'"] {
              padding: 0.9rem !important;
            }

            div[style*="fontSize: '0.95rem'"] {
              font-size: 0.85rem !important;
              line-height: 1.35 !important;
            }

            div[style*="fontSize: '0.9rem'"] {
              font-size: 0.8rem !important;
            }

            div[style*="width: '150px'"] {
              width: 60px !important;
            }
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Hide scrollbar for Chrome, Safari and Opera */
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
};

export default TestimonialStrip; 