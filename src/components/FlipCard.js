import React from 'react';

function FlipCard({ photo }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={photo.src} alt={photo.title} />
        </div>
        <div className="flip-card-back">
          <span className="flip-back-heart">♥</span>
          <h3 className="flip-back-title">{photo.title}</h3>
          <p className="flip-back-text">{photo.backText}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
