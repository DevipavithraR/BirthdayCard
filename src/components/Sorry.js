import React from 'react';

// Edit these with your sorry messages
const SORRY_ITEMS = [
  'First sorry, birthday card ah selfish ah use pannathukkuu',
  'Naa konjam porumaiyaa ellam ungalukku sollirukkanum',
 'Really sorry....',
 'Ippovum ethum prove pannanum nu ithellam sollala... ithellam sonna enakku konjam heavy ah feel aagathu athanala thn, ellathaiyum enakkullaiyea vachukka romba kastama irukku..',
'Ungala romba kastapadutheetten romba romba SORRY',
'Aprm antha photos kettathukku ithuthn reason mela vachurukka card la place pannanum nu thn ketten... :)'
];

function Sorry() {
  return (
    <section className="sorry-section">
      <h2 className="sorry-title">Sorry</h2>
      <div className="sorry-card">
        <ul className="sorry-list">
          {SORRY_ITEMS.map((text, index) => (
            <li key={index} className="sorry-item">
              <span className="sorry-bullet">♥</span>
              <span className="sorry-text">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Sorry;
