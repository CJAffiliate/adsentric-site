import React, { useState } from 'react';
import HighlightBox from './HighlightBox';

interface FormData {
  name: string;
  email: string;
  business_url: string;
  marketing_needs: string;
}

const AuditFormSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    business_url: '',
    marketing_needs: '',
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const totalSteps = 4;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    const filledFields = Object.values({ ...formData, [field]: value }).filter(Boolean).length;
    setCurrentStep(filledFields);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://hook.make.com/your-webhook-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        credentials: 'omit',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          website: formData.business_url,
          budget: '',
          message: formData.marketing_needs,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        business_url: '',
        marketing_needs: '',
      });

      // Hide success message after 3 seconds
      const timeoutId = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      // Cleanup timeout on component unmount
      return () => clearTimeout(timeoutId);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="audit-form"
      style={{
        padding: '5rem 2.5rem',
        background: 'var(--color-background)',
      }}
    >
      <div
        style={{
          color: 'var(--color-text)',
          fontWeight: 800,
          fontSize: '2.1rem',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          marginBottom: '3rem',
          lineHeight: 1.13,
        }}
      >
        Get your <HighlightBox>FREE</HighlightBox> marketing audit
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          padding: '0 1.5rem',
          position: 'relative',
          margin: '0 auto',
        }}
      >
        {/* Success Modal */}
        {showSuccess && (
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'white',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.15)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              animation: 'fadeIn 0.3s ease-out',
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--color-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'scaleIn 0.3s ease-out',
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  animation: 'drawTick 0.5s ease-out forwards',
                  strokeDasharray: '100',
                  strokeDashoffset: '100',
                }}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div
              style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: 'var(--color-text)',
                textAlign: 'center',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Thank you! We'll be in touch.
            </div>
          </div>
        )}

        {/* Red Glow behind form */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '1000px',
            height: '800px',
            pointerEvents: 'none',
            zIndex: 0,
            background: 'radial-gradient(ellipse at center, rgba(177,0,0,0.35) 0%, rgba(177,0,0,0.25) 30%, rgba(177,0,0,0.15) 50%, transparent 80%)',
            filter: 'blur(80px)',
          }}
          aria-hidden="true"
        />
        <form
          onSubmit={handleSubmit}
          style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '2.5rem',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              color: '#555',
              fontSize: '1rem',
              marginBottom: '2rem',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Takes 1 minute
          </div>

          {/* Progress Bar */}
          <div
            style={{
              width: '100%',
              height: '4px',
              background: '#f3f3f3',
              borderRadius: '2px',
              marginBottom: '2.5rem',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${(currentStep / totalSteps) * 100}%`,
                height: '100%',
                background: 'var(--color-accent)',
                transition: 'width 0.3s ease',
              }}
            />
          </div>

          {/* Form Fields */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label
                htmlFor="name"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--color-text)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                }}
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.9rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0',
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                }}
                placeholder="John Smith"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--color-text)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                }}
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.9rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0',
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                }}
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="business_url"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--color-text)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                }}
              >
                Business Name or Website URL
              </label>
              <input
                type="text"
                id="business_url"
                name="business_url"
                value={formData.business_url}
                onChange={(e) => handleInputChange('business_url', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.9rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0',
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                }}
                placeholder="example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="marketing_needs"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--color-text)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                }}
              >
                Quick Description of Your Marketing Needs
              </label>
              <textarea
                id="marketing_needs"
                name="marketing_needs"
                value={formData.marketing_needs}
                onChange={(e) => handleInputChange('marketing_needs', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.9rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0',
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                  minHeight: '100px',
                  resize: 'vertical',
                }}
                placeholder="Tell us about your business and what you're looking to achieve..."
                required
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <HighlightBox>
              <button
                type="submit"
                style={{
                  width: '400px',
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  font: 'inherit',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  padding: '1.1rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  outline: 'none',
                  boxShadow: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  Request my audit
                  <svg width="38" height="16" viewBox="0 0 38 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8H36" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M29 2L36 8L29 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </HighlightBox>
          </div>
        </form>
      </div>

      <style>
        {`
          input:focus, textarea:focus {
            border-color: var(--color-accent);
            box-shadow: 0 0 0 3px rgba(177, 0, 0, 0.1);
          }
          
          button:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(177, 0, 0, 0.2);
          }
          
          button:active {
            transform: translateY(0);
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes scaleIn {
            from {
              transform: scale(0.8);
            }
            to {
              transform: scale(1);
            }
          }

          @keyframes drawTick {
            to {
              stroke-dashoffset: 0;
            }
          }

          @media (max-width: 768px) {
            section {
              padding: 3rem 1rem !important;
            }

            div[style*="fontSize: '2.1rem'"] {
              font-size: 1.8rem !important;
              margin-bottom: 2rem !important;
            }

            div[style*="width: '100%'"] {
              padding: 0 0.5rem !important;
            }

            form {
              padding: 1.5rem !important;
            }

            div[style*="fontSize: '1rem'"] {
              font-size: 0.9rem !important;
              margin-bottom: 1.5rem !important;
            }

            div[style*="marginBottom: '2.5rem'"] {
              margin-bottom: 2rem !important;
            }

            div[style*="gap: '1.5rem'"] {
              gap: 1rem !important;
            }

            input, textarea {
              padding: 0.8rem !important;
              font-size: 0.95rem !important;
            }

            button[style*="width: '400px'"] {
              width: 100% !important;
              padding: 0.9rem !important;
              font-size: 1rem !important;
            }

            svg {
              width: 32px !important;
              height: 14px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default AuditFormSection; 