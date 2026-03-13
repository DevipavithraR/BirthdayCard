import React from 'react';

// Edit these with your own text for each phase
const MEMORY_CARDS = [
  {
    title: 'Fell in love',
    items: [
      'Ungala paakurathukku munnadiyea ellarum surya surya nu oru curiosity vara vachuttanga... Yaaruda athu paakaanumey nu thonichuu',
      'First meet, unga exam etho mudichuttu romba naal ku aprm lunch time la vantheenga...Paakkanum nu wait pannen aana unga face ah kooda sariya paakkala annaikku jenson sir kitta pesittu iruntheenga naa appothn vanthen sapda ponum nu. aprm yedho oru break la mela vanthurukkumpothum thn summa kindal ku pesittu irunthom, kiruba annan avanga akka maathiri naa irukken nu sonnathukku unga akka ah nu shock ah ketteengalaa appothn paathen.',
      'Namma ofc opening ku enakku ethum uncomfortable ah feel aaga koodathu nu ellam notice panni panneenga like, ellarum lift la ponanga naa illa steps la polam nu sonnathum enkooda vantheengaa, aprm sapdumbothu water bottle edukkurathu, sapdu aprm ellam kelambunanga enakku uncomfortable ah irunthuchu unga pinnadi vanthu ninen. polama nu kettu keezha koptu vanthutteenga ellaraiym :)..',
      'Namma "first chat" Ebook meeting ku time irukku nu ungaloda lunch sapda vanthutten, karuppasamy annan ellar munnadiyum thittittaanga sapdavey illa annaikku, crt ah evng "first poi sapdu" nu oru msg expect eh pannala....',
      'Aprm apdiyea chat continue aachu aprm mrng call pantrathu oru 10 sec kooda pesa maattom just ungala ezhuppi vidurathukkaga oru call... rendu perukkum theriyuthu pudikkum nu aana sollama pesittu iruntha time.',
      'First time yaarukkittayum ipdi oru feel vanthathey illa, oru sandaila inimey pesavey vendam just friends nu sollitteenga appo oru 3 days kitta pesalaa enga veetla eh kettanga yen ipdi irukka nu avlo pain, avlo azhugai, yaarukkagavum ivlo feel pannathey illa. just vantha ok illanah pottum nu vitruven.aana thrla unga kitta ippovara apdi thonalaa thrlaa romba love pannitten nu nenaikken.. :)',
      'Naa konjam mature thn, ellamey think pannuven aana unga visayathula apdiyea opposite, oru chinna pulla maathiri behave pantren.. romba attach aagitten... athn ethum yosikkama pesiruthen...',
    'Naa yaaru kittayum ivlo seekram close aanathey illa, ennoda feelings kooda share pannathu illa.. yennah namma pesa start pantrathukku munnadiyea enna understand pannikkitteenga.. enakku romba happy ah irunthuchiii',
    ],
  },
  {
    title: '',
    items: [
      
      'Enga veetulayumeyy eppovum ellaru kiittayum prove pannittey irukkanum ellathukkum.. aana unga kitta athu thevapadalaa naa just oru time enna nu sonnaley naa enna yosikken nu solliruveenga munnaadiii, ippolam apdi illaa..',
      'Thrla unga kitta eppovumey ethum maraikkanum nu thonala most ah ellamey share pannirukken...',
      'Aprm naa ivlo sensitive, ivlo overthink pannuven ellam enakkey ippothn theriyum... antha situation handle pantrathukku romba kastama irunthuchuuu.. most ah namma sanda podura time laa',
      'Yen namakku ivlo gap aachu nu ketteengalaa, first time neenga unga college la tour nu poneenga appo start aachu nammakku sanda.. romba kasta patten antha 3 days..',
      'Aprm kutty kutty sandaiyaa neraiyaa vanthuttu... athey time la enga veetlayum therinjuttu... namma pesama irukkuratha vidaa enga veetla enga amma pesurathuu ellam sethu thn unga mela antha kovathaa kaattitten.. first enga amma thitturanga nu sonnathum neengalum neethana sonnanu sollittengalaa aprm thirumba uhm avanga thittum bothu unga kitta atha sollavey illa..',
      'Yeennah munnadii veetla apdilam pesa maattangalaa avanga apdi pesa start pannathum unga kitta romba expect panna start pannitten.. aana appothn neenga clg pona starting... athn avlo kovam..',
      'Aprm antha sanda vanthappo.. annaikku evng enga amma call panni enna thittunaangaa late aaguthu nee ennathn pannittu irukkaa nu kettuchuu already kovathula thn irunthen athn neengalum call attern pannala aprm IT vanthurukken nu enkitta sollalanathum romba kovam vanthuttu.... aprm antha time namma pesurathum romba kammiyaathn irunthuchuu.. enakku romba thaniyaa ellathaiyum face pantra maathiri feel aagittu.. support ku yaarumey illa unga kittayum solla mudiyalaa veetla yum ellam sonnathum handle panna mudiyalaa...',
      'Aprm vanitha akka kitta sonnen intha maathiri engala laa time spend panna mudiyalaa.. romba sanda thn podurom nu appothn antha akka sonnangaa.. neenga avanga poruppa irukkanum nu nenaikkeenga avanga clg life la enjoy pannittu irukkanga.. avangala apdiyea vitrunga ethum kekkaatheenga enjoy pannattum... aprm avangaleyy varuvaanga nu sonnangaa.. appothn strick aachuuu athanala thn neenga clg poirukkumbothu avlo ah call pantrathu illa.. aprm oru time kooda call pannumbothu ellarum irukkanga pesurathukku oru maathiri irukku nu vaikka sollitteenga athum oru reason thn.'
    ],
  },
  {
    title: '',
    items: [
      'Aanaa naa antha time la romba kasta pattutten deyy.. ennala pesama irukka uhm mudiyaalaa avlo control panni thn irunthen.. ippo feel aaguthu yen ipdi irunthen nu..',
      'Athanala thn evng and mrng kooda neenga pesala nathum romba kovam vanthuttu.. yennah clg mudinjea late ah varathala namma pesura time eh pochuu..',
      'Naa normal aagurathukkey avlo time aagittu.. divert aagama irukkanum nu full ah work la focus panna start panniitten.. neraiyaa change aagitten.. athu namma pesama iruntha time la thn therinjuthu.. aprm ellam think pannumbothu yen ipdilam behave pannomnu feel aagittu...',
      'Aprm naa ithellam unga kitta  soltrathukku avlo try pannen aana neenga atha kekkura maathiri illa antha topic eduthaaley ungalukku pudikkala athn sollama irunthen..',
      'Athukku aprm neenga distance maintain pannitteenga.. enna aachu nu kekkuratha stop panniitteenga... naa enna sonnalum athu thappavey convey aachuu... pesuratheyy stop aagittu...',
      'Enakkum explain panna mudiyalaa romba suffer aagitten, aana ithellam epdi naalum unga kitta share pannanum nu thonichuu... intha birthday card la wish irunthalum konjam selfishness irukku.. call la ithellam solla mudiyalaaa athn ithula soltren... sorry...',
      'Mrng uhm Evng uhm naa idaikal vara nadakkura antha time la thn pesuvom nu 3 month daily uhm neenga call pannuveenga nu avlo wait panni daily uhm raju annan sollum bus la poo yen ivlo nadakka bus thn ofc kittayea varuthunu one week ah sonnanga naathn keekkaama vanthuttu irunthen..',
      'Aprm oru time yen ipdi irukkeenga nu kekkumbothu munnadi maathiri ippolam ethum pesanum nu thonala miss pannala apdilam sonnathum enakku romba kastama pochuu aprm kooda konja naal nadanthuthn poittu iruthen ippothn oru 1 month ahh munnadi maathiri time ku change aagirukken..',
      'Annaikku kooda oru naal mrng unga annan inga irukkumbothu song ketteengalaa appo antha padaiyaappaa movie la oru song pottu enakku dedicate panneengalaa appothn strick aaachu evlooo thappaagittu nu..',
      'Aprm last ah mrng call la sonneengalaa ivlo naal pesama ippo vanthu sudden ah pesura nu.... appo romba kastama pochuu.. athu kooda ethum avlo ah thrlaa... Aana namma photos la illa delete pannitten nu sonnathum romba kastama pochuu ippo varaikkum atha accept pannikka mudiyalaa....',
      'Actual ah enakku di nu koptalehh pudikkaathuu....ippolam atha romba miss pantren.......... :('
    ],
  },
];

function Memories() {
  return (
    <section className="memories-section">
      <h2 className="memories-title">Our Love Phase</h2>
      <h3  className="memories-subtitle">Unga kitta share pannatha neraiya visiyam irukku athellam ennala solla mudiyala antha time la</h3>
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
