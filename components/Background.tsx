import React from 'react';

const Background: React.FC = () => {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-50 w-full h-full pointer-events-none select-none"
      style={{
        background:
          'repeating-linear-gradient(90deg, var(--accent, #e2e8f0) 0px, var(--accent, #e2e8f0) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, var(--accent, #e2e8f0) 0px, var(--accent, #e2e8f0) 1px, transparent 1px, transparent 80px)',
        backgroundColor: 'var(--background, #fff)',
        boxShadow: '0 0 120px 10px var(--primary, #3b82f6), 0 0 120px 10px var(--secondary, #f1f5f9)',
        animation: 'gridGlow 8s linear infinite',
      }}
    >
      <style>{`
        @keyframes gridGlow {
          0% { filter: brightness(1) drop-shadow(0 0 10px var(--primary, #3b82f6)) drop-shadow(0 0 10px var(--secondary, #f1f5f9)); }
          50% { filter: brightness(1.1) drop-shadow(0 0 30px var(--primary, #3b82f6)) drop-shadow(0 0 30px var(--secondary, #f1f5f9)); }
          100% { filter: brightness(1) drop-shadow(0 0 10px var(--primary, #3b82f6)) drop-shadow(0 0 10px var(--secondary, #f1f5f9)); }
        }
      `}</style>
    </div>
  );
};

export default Background; 