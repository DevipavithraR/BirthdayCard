import React, { useState } from 'react';

function GiftBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="gift-box-page">
      <h2 className="gift-box-page-title">A little gift for you</h2>
      <div className="gift-box-wrap">
        {!isOpen ? (
          <div className="gift-box-card">
            <span className="gift-card-sparkle">✦</span>
            <span className="gift-card-heart">♥</span>
            {/* Closed gift box - pink body, white ribbon & bow */}
            <div className="gift-box-closed">
              <div className="gift-body" />
              <div className="gift-lid" />
              <div className="gift-ribbon-h" />
              <div className="gift-ribbon-v" />
              <div className="gift-bow">
                <span className="gift-bow-loop gift-bow-l" />
                <span className="gift-bow-loop gift-bow-r" />
                <span className="gift-bow-center" />
              </div>
            </div>
            <button
              type="button"
              className="gift-box-open-btn"
              onClick={() => setIsOpen(true)}
            >
              Open
            </button>
            <p className="gift-box-hint">Click to see your surprise</p>
          </div>
        ) : (
          <div className="gift-box-card gift-reveal-card">
          <div className="gift-reveal">
            <div className="gift-reveal-sparkles">
              {[...Array(24)].map((_, i) => (
                <span key={i} className="reveal-sparkle" style={{ '--i': i }}>✦</span>
              ))}
            </div>
            <div className="gift-reveal-hearts">
              {[...Array(16)].map((_, i) => (
                <span key={i} className="reveal-heart" style={{ '--i': i }}>♥</span>
              ))}
            </div>
            <h2 className="gift-reveal-text">Love you</h2>
            <p className="gift-reveal-sub">... with all my heart ♥</p>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GiftBox;
