import React from 'react';

const ORNAMENTS = [
  { type: 'gold', size: 28, top: '8%', left: '12%', delay: 0 },
  { type: 'gold', size: 22, top: '14%', left: '8%', delay: 0.4 },
  { type: 'pink', size: 26, top: '6%', left: '28%', delay: 0.2 },
  { type: 'gold', size: 20, top: '18%', left: '25%', delay: 0.6 },
  { type: 'pink', size: 24, top: '10%', left: '48%', delay: 0.1 },
  { type: 'gold', size: 30, top: '12%', left: '65%', delay: 0.5 },
  { type: 'pink', size: 22, top: '6%', left: '82%', delay: 0.3 },
  { type: 'gold', size: 24, top: '16%', right: '10%', left: null, delay: 0.7 },
  { type: 'pink', size: 20, top: '22%', left: '18%', delay: 0.35 },
  { type: 'gold', size: 18, top: '20%', right: '22%', left: null, delay: 0.55 },
  { type: 'pink', size: 26, top: '8%', right: '38%', left: null, delay: 0.15 },
  { type: 'gold', size: 16, top: '12%', left: '72%', delay: 0.45 },
];

function FloatingDesigns() {
  return (
    <div className="floating-designs" aria-hidden="true">
      {/* Golden glitter layer - dense at top, fading down */}
      <div className="floating-glitter" />

      {/* Hanging ornaments - gold and pink baubles */}
      {ORNAMENTS.map((orb, i) => (
        <div
          key={i}
          className={`floating-ornament ornament-${orb.type}`}
          style={{
            '--size': `${orb.size}px`,
            '--top': orb.top,
            '--delay': `${orb.delay}s`,
            ...(orb.left != null ? { left: orb.left } : {}),
            ...(orb.right != null ? { right: orb.right } : {}),
          }}
        >
          <span className="ornament-shine" />
        </div>
      ))}

      {/* Golden star */}
      <div className="floating-star" style={{ '--delay': '0.2s' }}>
        ★
      </div>

      {/* Golden snowflake */}
      <div className="floating-snowflake" style={{ '--delay': '0.5s' }}>
        ❄
      </div>

      {/* Extra small ornaments for depth */}
      <div className="floating-ornament ornament-gold ornament-small" style={{ '--size': '14px', '--top': '15%', '--left': '42%', '--delay': '0.25s' }}><span className="ornament-shine" /></div>
      <div className="floating-ornament ornament-pink ornament-small" style={{ '--size': '12px', '--top': '24%', '--left': '55%', '--delay': '0.6s' }}><span className="ornament-shine" /></div>
      <div className="floating-ornament ornament-gold ornament-small" style={{ '--size': '16px', '--top': '10%', right: '55%', '--delay': '0.4s' }}><span className="ornament-shine" /></div>
    </div>
  );
}

export default FloatingDesigns;
