import React from 'react';

// Edit these with your own text for each phase
const MEMORY_CARDS = [
  {
    title: 'Fell in love',
    items: [
      'The moment we met...',
      'First date...',
      'When we knew it was special...',
      'Our first adventure together...',
      'The moment we met...',
      'First date...',
      'When we knew it was special...',
      'Our first adventure together...',
    ],
  },
  {
    title: 'Possessive phase',
    items: [
      'That time we got jealous...',
      'When we wanted each other all to ourselves...',
      'Little things that made us possessive...',
      'How we got through it...',
      'When we wanted each other all to ourselves...',
      'Little things that made us possessive...',
      'How we got through it...',
    ],
  },
  {
    title: 'Anger phase',
    items: [
      'Fights we had...',
      'What made us angry...',
      'How we made up...',
      'What we learned from it...',
      'What made us angry...',
      'How we made up...',
      'What we learned from it...',
    ],
  },
];

function Memories() {
  return (
    <section className="memories-section">
      <h2 className="memories-title">Our Love Phase</h2>
      <div className="memories-cards-wrap">
        {MEMORY_CARDS.map((card, cardIndex) => (
          <div key={cardIndex} className="memories-card">
            <h3 className="memories-card-title">{card.title}</h3>
            <ul className="memories-list">
              {card.items.map((text, index) => (
                <li key={index} className="memories-item">
                  <span className="memories-bullet">♥</span>
                  <span className="memories-text">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Memories;
