import React from 'react';

interface HighlightBoxProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const HighlightBox: React.FC<HighlightBoxProps> = ({ children, style }) => {
  return (
    <span
      className="highlight-box"
      style={{
        display: 'inline-block',
        background: 'var(--color-accent)',
        color: '#FFFFFF',
        padding: '0.32em 0.9em',
        borderRadius: '6px',
        position: 'relative',
        overflow: 'hidden',
        fontWeight: 700,
        fontSize: '1em',
        boxShadow: '0 2px 12px 0 rgba(177,0,0,0.10)',
        verticalAlign: 'middle',
        transition: 'transform 0.18s cubic-bezier(.4,0,.2,1), box-shadow 0.18s cubic-bezier(.4,0,.2,1)',
        cursor: 'pointer',
        ...style,
      }}
      tabIndex={0}
      onMouseOver={e => {
        (e.currentTarget as HTMLSpanElement).style.transform = 'scale(1.045)';
        (e.currentTarget as HTMLSpanElement).style.boxShadow = '0 6px 24px 0 rgba(177,0,0,0.18)';
      }}
      onMouseOut={e => {
        (e.currentTarget as HTMLSpanElement).style.transform = '';
        (e.currentTarget as HTMLSpanElement).style.boxShadow = '0 2px 12px 0 rgba(177,0,0,0.10)';
      }}
    >
      {children}
      <style>
        {`
          .highlight-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 45%;
            background: linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 100%);
            border-radius: 6px 6px 0 0;
            pointer-events: none;
            z-index: 1;
          }
          .highlight-box::after {
            content: '';
            position: absolute;
            top: 0;
            left: -60%;
            width: 40%;
            height: 100%;
            background: linear-gradient(120deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.05) 100%);
            border-radius: 6px;
            pointer-events: none;
            opacity: 0.7;
            z-index: 2;
            transform: skewX(-20deg);
            animation: shine-move 4s cubic-bezier(.4,0,.2,1) infinite;
          }
          @keyframes shine-move {
            0% { left: -60%; opacity: 0.7; }
            37.5% { left: 100%; opacity: 0.7; }
            38% { left: 100%; opacity: 0; }
            100% { left: 100%; opacity: 0; }
          }
        `}
      </style>
    </span>
  );
};

export default HighlightBox; 