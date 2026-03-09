import React from 'react';

function GoldenLights() {
  return (
    <div className="golden-lights" aria-hidden="true">
      {/* Top edge - golden & white sparkles and glow */}
      <div className="lights-top">
        {[...Array(16)].map((_, i) => (
          <span key={`t-${i}`} className="gold-sparkle gold-sparkle-top" style={{ '--i': i }}>✦</span>
        ))}
        {[...Array(8)].map((_, i) => (
          <span key={`tw-${i}`} className="white-sparkle white-sparkle-top" style={{ '--i': i }}>✧</span>
        ))}
      </div>
      {/* Left edge */}
      <div className="lights-left">
        {[...Array(10)].map((_, i) => (
          <span key={`l-${i}`} className="gold-sparkle gold-sparkle-side" style={{ '--i': i }}>✦</span>
        ))}
        {[...Array(6)].map((_, i) => (
          <span key={`lw-${i}`} className="white-sparkle white-sparkle-side" style={{ '--i': i }}>✧</span>
        ))}
      </div>
      {/* Right edge */}
      <div className="lights-right">
        {[...Array(10)].map((_, i) => (
          <span key={`r-${i}`} className="gold-sparkle gold-sparkle-side" style={{ '--i': i }}>✦</span>
        ))}
        {[...Array(6)].map((_, i) => (
          <span key={`rw-${i}`} className="white-sparkle white-sparkle-side" style={{ '--i': i }}>✧</span>
        ))}
      </div>
      {/* Soft glow orbs - top */}
      <div className="glow-orb glow-top-left" />
      <div className="glow-orb glow-top-center" />
      <div className="glow-orb glow-top-right" />
      {/* Soft glow orbs - left & right */}
      <div className="glow-orb glow-left-1" />
      <div className="glow-orb glow-left-2" />
      <div className="glow-orb glow-right-1" />
      <div className="glow-orb glow-right-2" />
    </div>
  );
}

export default GoldenLights;
