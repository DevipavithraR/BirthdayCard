import React from 'react';

// Edit these with your sorry messages
const SORRY_ITEMS = [
  'First sorry, birthday card ah selfish ah use pannathukkuu',
  'Naa konjam porumaiyaa ellam ungalukku sollirukkanum',
  'Ippovum ethum prove pannanum nu ithellam sollala... ithellam sonna enakku konjam heavy ah feel aagathu athanala thn, ellathaiyum enakkullaiyea vachukka romba kastama irukku..',
  'Ungala romba kastapadutheetten romba romba SORRY',
  'Aprm antha photos kettathukku ithuthn reason mela vachurukka card la place pannanum nu thn ketten... :)',
  'Ivlo naal neenga enakku pesa thonala nu sollumbothu kooda enakku ethum avlo ah feel aagala sarii kovathula irukkaanga sariaagiruvaanga nu thonichuuu aana photos chat la delete pannitten, en friends la ethachum neneippanga nu sonneengala athulam romba hurt aachu, yeannah clg starting la unga frnds kitta avlo sollirukkeenga nammala pathii ippo yaaru kittayum solla koodathu nu nenaikkeenga... ',
  'Photos kekkumbothu illa nu sonnappovey avlothn nu thonichuuu... ethoo oru hope irunthuchuu kovathula thn irukkaanga ellam sariyaagirum nu aana ippo ethum illaa.. inimey pesavey koodathu nu thonichuu, aprm birthday wish pannanum nu romba aasaiyaa ithu ready panna start pannitten... athn itha kandippa kudukkanum nu thirumba annaikku msg potten antha ring irukka nu kettu',
  'Naa kovama thn irukken nee wait pannu nu solliruntha kooda enakku ethum feel aagirukkaathu already neenga ithu set aagathu nu fix aagitteengaaloo nu thonuthuu.. itha nenaichea neraiyaa overthink pannittu irukken. Ennala mudiyalaa... Romba pain ah irukku. ',
  'Ithuthn unmela kovam nee yen ipdi irukka nu oru time neenga enkitta ketrukkalamoo nu thonuthuu...aana neenga distance maintain pannitteenga, kovapatruntha kooda intha sanda appovey mudinjurukkum.',
  'Munnadilam avlo urimaiyaaa pesuveenga, summa oru naal pesama iruntha, illa late ah rply panna kooda avlo kova paduveenga, athey maathiri ithaiyum ketrukkalam.',
  'Ippo enakku enna decision edukkurathu nu thrlaa romba confusion la irukken, ungalukku ok ithu set aagum nu thonichunaa naa konjam strong ah iruppen. ungalukku wait pannanum naalum naa ready thn wait pantren like rendu perum career la focus pannalam oru nalla position ku poittu aprm kooda ellam pesikkalam. aana illa ithu set aagaathu nu ungalukku thonichunaa atha ippoveh sollirunga athu enna reason ah irunthalum ok thn aana days poga poga enakku romba thaniyaa irukkura maathiri feel aaguthu, ivlo pain ennala handle panna mudiyaathuu...',
  'Ithu ok nu thonichu nah namma epdi time spend pantrathu nu yosikkalam... aprm munnadi maathiri immature ah behave panna maatten... ippo konjam ellam handle panna kathukkutten overthink pannama irukka try pantren...',
  'Aprm ippo romba naala itha sollanum nu thonichuu, love youuu deyyyy ❤️'

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
        <div className="card-hearts">
          <span className="inline-heart">♥</span>
          <span className="inline-heart">♥</span>
          <span className="inline-heart">♥</span>
        </div>
      </div>
    </section>
  );
}

export default Sorry;
