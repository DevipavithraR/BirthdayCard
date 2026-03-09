import React from 'react';

function FloatingDecorations() {
  return (
    <>
      <div className="sparkles">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="sparkle" style={{ '--i': i }}>✦</span>
        ))}
      </div>
      <div className="hearts">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="heart" style={{ '--i': i }}>♥</span>
        ))}
      </div>
    </>
  );
}

export default FloatingDecorations;
