import React from 'react';

function BirthdayCard() {
  return (
    <div className="card-inner">
      <div className="card-border">
        <h1 className="card-title">Happy Birthday!</h1>
        <p className="card-message">
          Wishing you a day filled with joy, laughter, and all the things that make you smile.
        </p>
        <p className="card-submessage">
          You deserve the world and more — today and every day. May your heart be full, your cake be sweet, and your year ahead be the brightest one yet.
        </p>
        <p className="card-quote">
          “Some souls just shine brighter. Yours is one of them.” ♥
        </p>
        <p className="card-wish">✨ May your year ahead be wonderful! ✨</p>
        <p className="card-send">Sending you endless love, warm hugs, and the biggest smile!</p>
        <div className="card-hearts">
          <span className="inline-heart">♥</span>
          <span className="inline-heart">♥</span>
          <span className="inline-heart">♥</span>
        </div>
      </div>
    </div>
  );
}

export default BirthdayCard;
