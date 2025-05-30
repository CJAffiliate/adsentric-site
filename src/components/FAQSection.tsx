import React, { useState, useRef, useEffect } from 'react';
import HighlightBox from './HighlightBox';
import { observeElements } from '../utils/animations';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does it take to see results?",
    answer: "We typically see initial results within 2-4 weeks of campaign launch. However, we focus on sustainable growth rather than quick wins. Our clients usually see significant improvements in their conversion rates and customer acquisition costs within the first 3 months."
  },
  {
    question: "What's your pricing structure?",
    answer: "Our pricing is customized based on your business needs and goals. We offer both project-based and retainer models. During your free audit, we'll provide a detailed proposal with transparent pricing that aligns with your specific requirements."
  },
  {
    question: "Do you work with businesses in my industry?",
    answer: "Yes! We've worked with businesses across various industries including e-commerce, B2B services, SaaS, and professional services. Our strategies are adaptable to different business models and target audiences."
  },
  {
    question: "What makes your ad creatives different?",
    answer: "Our ad creatives are built on data-driven insights and proven conversion principles. We combine compelling visuals with strategic copy that speaks directly to your audience's pain points and desires. Each creative is tested and optimized for maximum performance."
  },
  {
    question: "How do you measure success?",
    answer: "We track key metrics including ROAS (Return on Ad Spend), CPA (Cost per Acquisition), conversion rates, and overall revenue growth. You'll receive detailed reports and regular performance reviews to ensure we're meeting your business objectives."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const faqs = sectionRef.current.querySelectorAll('.faq-item');
      
      // Add initial opacity 0 to prevent flash
      faqs.forEach(faq => {
        (faq as HTMLElement).style.opacity = '0';
      });

      const observer = observeElements(Array.from(faqs), (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              entry.target.classList.add('animate-fade-in');
            });
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
        background: '#7A0011',
        padding: '5rem 0',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          color: '#fff',
          fontWeight: 800,
          fontSize: '2.1rem',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          marginBottom: '3rem',
          lineHeight: 1.13,
          padding: '0 1.5rem',
        }}
      >
        Our frequently asked <HighlightBox>questions</HighlightBox>
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          padding: '0 1.5rem',
        }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
            style={{
              marginBottom: '1rem',
              borderRadius: '12px',
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              opacity: 0,
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              style={{
                width: '100%',
                padding: '1.5rem',
                background: 'none',
                border: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                color: '#fff',
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.1rem',
                fontWeight: 600,
                textAlign: 'left',
              }}
            >
              {faq.question}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  flexShrink: 0,
                }}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              style={{
                maxHeight: openIndex === index ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease-out',
                padding: openIndex === index ? '0 1.5rem 1.5rem 1.5rem' : '0 1.5rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '1rem',
                lineHeight: 1.6,
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>

      {/* White Glow at Bottom */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 0,
          transform: 'translateX(-50%)',
          width: '1400px',
          height: '480px',
          pointerEvents: 'none',
          zIndex: 1,
          background: 'radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.08) 60%, transparent 90%)',
          filter: 'blur(64px)',
        }}
        aria-hidden="true"
      />

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @media (max-width: 768px) {
            section {
              padding: 4rem 1rem !important;
            }

            div[style*="fontSize: '2.1rem'"] {
              font-size: 1.8rem !important;
              margin-bottom: 2.5rem !important;
              padding: 0 1rem !important;
            }

            div[style*="maxWidth: '800px'"] {
              padding: 0 1rem !important;
            }

            button[style*="padding: '1.5rem'"] {
              padding: 1.2rem !important;
              font-size: 1rem !important;
              text-align: left !important;
            }

            div[style*="fontSize: '1rem'"] {
              font-size: 0.95rem !important;
              line-height: 1.5 !important;
              padding: 0 1rem !important;
            }

            svg[width="24"] {
              width: 20px !important;
              height: 20px !important;
              flex-shrink: 0 !important;
            }

            .faq-item {
              margin: 0 0 1rem 0 !important;
              border-radius: 12px !important;
            }
          }
          
          @media (max-width: 480px) {
            section {
              padding: 3rem 0.8rem !important;
            }

            div[style*="fontSize: '2.1rem'"] {
              font-size: 1.6rem !important;
              margin-bottom: 2rem !important;
              padding: 0 0.8rem !important;
            }

            div[style*="maxWidth: '800px'"] {
              padding: 0 0.8rem !important;
            }

            button[style*="padding: '1.5rem'"] {
              padding: 1rem !important;
              font-size: 0.95rem !important;
              text-align: left !important;
            }

            div[style*="fontSize: '1rem'"] {
              font-size: 0.9rem !important;
              line-height: 1.45 !important;
              padding: 0 0.8rem !important;
            }

            svg[width="24"] {
              width: 18px !important;
              height: 18px !important;
              flex-shrink: 0 !important;
            }

            .faq-item {
              margin: 0 0 0.8rem 0 !important;
              border-radius: 10px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default FAQSection; 