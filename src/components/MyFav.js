import React from 'react';

// Edit these with your favourite things
const FAVS = [
  'Namma lunch time. athellam ippo romba miss pantren..',
  'Neenga enakku opposite la irunthuttu en bag ah edukka solli call pantrathu and msg pantrathuu..',
  'Enna di nu soltrathuu pavi nu kopdurathuu.. ippolam name solli kooda kopdrathu illaa  :)',
  'Enkitta ethaiyumeh sollama irukka maatteenga open ah pesuveenga athu romba pudikkum.',
  'Enakku neenga advice pantrathu romba pudikkum, enakku therinju enakku close ah irukkuravangalukku naa enakku therinjathulam share pannuven aana unga kitta eppovumey apdi irunthathu illa neenga soltrathulam kekkanum nu thonum.',
  'Namma ofc romba pudikkum... athuthn reason namma pesa start pannathukku naa inga varala nah namma meet panniruppoma nu thrla...',
  'Unnakku ethumey thrla nu solluveengala athum pudikkum... yennah unga kitta mattumthn naa ipdi irukken.'
];

function MyFav() {
  return (
    <section className="myfav-section">
      <h2 className="myfav-title">My Fav</h2>
      <div className="myfav-card">
        <ul className="myfav-list">
          {FAVS.map((text, index) => (
            <li key={index} className="myfav-item">
              <span className="myfav-bullet">♥</span>
              <span className="myfav-text">{text}</span>
            </li>
          ))}
        </ul>
        <div className="card-hearts">
          <span className="inline-heart">♥</span>
          <span className="inline-heart">♥</span>
          <span className="inline-heart">♥</span>
        </div>
      </div>
    </section>
  );
}

export default MyFav;
