import React from 'react';
import FlipCard from './FlipCard';

const PHOTOS = [
  {
    src: 'https://picsum.photos/seed/bday1/400/400',
    title: 'Memories',
    backText: 'Every moment with you is a treasure to keep forever. ♥',
  },
  {
    src: 'https://picsum.photos/seed/bday2/400/400',
    title: 'Joy',
    backText: "Your smile lights up every room. Here's to more laughter!",
  },
  {
    src: 'https://picsum.photos/seed/bday3/400/400',
    title: 'Love',
    backText: 'Sending you endless love and warm wishes on your special day.',
  },
  {
    src: 'https://picsum.photos/seed/bday4/400/400',
    title: 'Cheers',
    backText: 'To another year of adventures and dreams coming true! ✨',
  },
];

function FlipCardsSection() {
  return (
    <section className="flip-cards-section">
      <h2 className="flip-section-title">Photo wishes</h2>
      <div className="photo-flip-row">
        {PHOTOS.map((photo, index) => (
          <FlipCard key={index} photo={photo} />
        ))}
      </div><br />
      <p className="flip-hint">Hover over a photo to flip</p>
    </section>
  );
}

export default FlipCardsSection;
