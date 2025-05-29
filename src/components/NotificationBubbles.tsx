import React, { useEffect, useState } from 'react';

const notifications = [
  'Another sale tracked from your ad campaign.',
  'New lead captured from your landing page.',
  'Appointment booked through your funnel.'
];

const NotificationBubbles: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let fadeOutTimeout: NodeJS.Timeout;
    let nextTimeout: NodeJS.Timeout;

    fadeOutTimeout = setTimeout(() => {
      setVisible(false);
      nextTimeout = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 500); // fade out duration
    }, 2200); // visible duration

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(nextTimeout);
    };
  }, [activeIndex]);

  return (
    <div
      style={{
        position: 'relative',
        marginTop: '2.2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '48px',
        zIndex: 2,
        pointerEvents: 'none',
        gap: '1rem',
        height: '60px',
      }}
    >
      {notifications.map((msg, i) => {
        const isActive = i === activeIndex;
        return (
          <div
            key={msg}
            style={{
              opacity: isActive && visible ? 1 : 0,
              transform: isActive && visible
                ? 'translateY(0) scale(1)'
                : 'translateY(30px) scale(0.95)',
              transition:
                'opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1)',
              background: '#fff',
              color: 'var(--color-text)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              fontWeight: 500,
              borderRadius: '12px',
              boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)',
              padding: '0.85rem 1.4rem 0.85rem 1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.7rem',
              minWidth: '220px',
              maxWidth: '350px',
              pointerEvents: 'auto',
              position: 'absolute',
              left: 0,
              right: 0,
              margin: '0 auto',
              willChange: 'opacity, transform',
            }}
            aria-hidden={!isActive || !visible}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22 }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18.333a2.083 2.083 0 0 0 2.083-2.083H7.917A2.083 2.083 0 0 0 10 18.333Zm6.25-4.166v-5a6.25 6.25 0 1 0-12.5 0v5l-1.25 1.25v.417h15v-.417l-1.25-1.25Z" fill="var(--color-accent)"/>
              </svg>
            </span>
            <span style={{whiteSpace: 'pre-line'}}>{msg}</span>
          </div>
        );
      })}
    </div>
  );
};

export default NotificationBubbles; 