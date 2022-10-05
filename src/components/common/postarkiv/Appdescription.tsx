import React from "react";
import MarginLayout from "../MarginLayout";

const Appdescription = () => {
  return (
    <>
      <MarginLayout>
        <div className="content-margins">
          <div>
            <h1 className="header mb">Microsoft Excel</h1>
            <div className="text-imgcontainer">
              <p>
                For å slippe manuell utregning på nye poster så begynte jeg å
                tenke på å lage formler i Excel som regner automatisk ut
                utfylling bak når man legger inn dimensjoner. Etterhvert ble jeg
                ferdig med en som fungerer. For å slippe å lage ny hver gang man
                skal bygge en post så lagret vi hver enkelt excel regneark og
                sorterte det i mapper. Det gjorde det også enklere å finne
                poster som skulle brukes. Det gamle systemet som var utskrifter
                på papir og ble satt i permer det sluttet vi å bruke helt
                etterhvert.
              </p>
              <img
                className="img"
                src="https://lh3.googleusercontent.com/pw/AL9nZEV5Dj5Ae_ckIm7eaFFDa8U7Xl9ynJdNc5xp7bZDNJVqB0CT4WQ80Uo46k8MDdiyxVSL3I0SA-LA9Z5uX7i96lQ7mc_RWTav4K8xBkVLXyhCHr_AnwGdPzbPIQ2SIjt4MgsKL4XIxkyqdPNJ7EkS3r2h=w1686-h1024-no?authuser=0"
                alt=""
              />
            </div>
            <div className="img-textcontainer2">
              <img
                className="img"
                src="https://lh3.googleusercontent.com/pw/AL9nZEV4_F9wYi5qH3PgV8XLd5yFL30eBeY_tEKxgvNiz0WfaGomgqazJWoKQBSTd8Xoj1cVBXEKns0oBv6j_ZRfZ2vqzVSb4AaJ3His5ZmP4IGgVbn4FUL7QTeCWN0vcfmOOYB6gzYk6Q8JmWTq1hF8oALO=w1440-h1080-no?authuser=0"
                alt=""
              />
              <p className="img-text">
                Før sto alle postene på papir i permer og det kunne ta flere
                minutter å finne dem, eller kanskje bare å finne ut at posten
                ikke eksisterer i permen.
              </p>
            </div>
          </div>
          {/* NEW SECTION */}
          <div>
            <h1 className="header section-header">Postkalkulator web app</h1>
            <div className="text-imgcontainer">
              <p>
                I 2018 så begynner jeg å lære meg å programmere. Jeg drømmer om
                å lage Postkalkulatoren som en app. Jeg ender til slutt opp med
                Javascript og webutvikling. Med mye prøving og feiling så ender
                jeg til slutt opp med en webapp som fungerer 8 februar 2020 tar
                webappen over for Excel systemet. Men denne appen har ingen
                tilkobling til en database så man kan ikke lagre postene man
                lager i programmet. Jeg må lage postene i kildekoden og
                publisere nettsiden på nytt hver gang jeg lager nye poster. Den
                er heller ikke responsiv slik at appen er helt ubrukelig på
                mobil.
              </p>
              <img
                className="img"
                src="https://lh3.googleusercontent.com/pw/AL9nZEX3EBlXjIMw7ewiNa58F__ZJ8e-IVQsvqaFW3LWehx-Ak4AJnM_MPdaBiaJf5kjxZp22qaoId4HFtgA3pcE0hr7OF4Wuee6laNlidRouYT5Dn7XFhjKroFUw0WWiNmnySOSIUMZwIpxtHfQ3DW8Veez=w860-h578-no?authuser=0"
                alt=""
              />
            </div>
          </div>
          {/* NEW SECTION */}
          <div>
            <h1 className="header section-header">Database</h1>
            <div className="text-imgcontainer">
              <div>
                <p>
                  Jeg begynner etterhvert å lage postkalkulatoren på nytt helt
                  fra scratch. Denne gangen skal appen være responsiv og ha en
                  database så man kan lagre postenen man lager i appen. Jeg
                  bruker Node js og Express for backend programmeringen. Appen
                  får på plass en database fra Mongo DB og kan nå lagre og
                  slette filer i appen. Jeg legger også til inlogging sånn at
                  ikke hvem som helst som går inn på appen kan få tilgang til å
                  slette eller manipulere data. Jeg bruker Auth0 til denne
                  jobben istedet for å lage eget innloggingsystem. Jeg har også
                  gjort appen responsiv sånn at det går an å bruke den på
                  mobiler.
                </p>
              </div>
              <div>
                <img
                  className="img"
                  src="https://lh3.googleusercontent.com/pw/AL9nZEUSreYKfGu0ilQebpG8eJb9hN2Y5o8K0Yk-A6jFWpuBlLKlT0HQrbvB8nY5ERTYutqT5AcQQNbRQufDeMPdsos5DTnsJH2oFnMkAFh1LqJIPWQFYE-gQ15-IdiLAg4T4UFpvfI_fBrHLf6ZmUmjkn__=w1920-h1080-no?authuser=0"
                  alt=""
                />
                <p className="img-text">
                  På bildet kan man se at man kan lage en post og lagre den. Men
                  det er lagt inn noen valiederinger som f.eks at man må få
                  utfyllingene i 0 med en toleranse på +- 0,05mm og da vil
                  utfyllingstallet bli grønt. Når en av utfyllingstallene er
                  røde så vil det ikke være mulig å lagre posten.
                </p>
              </div>
            </div>
            <div className="text-imgcontainer3">
              <div>
                <img
                  className="img"
                  src="https://lh3.googleusercontent.com/pw/AL9nZEW4eNrcV7T6qsgrN06c-_Zy0KU26svbIX9bOUIardKNKZNC9mo0Y3pgYSYgIgCp7e6wHCqGE9_LOafN5DDspRj65mbjkbOAsNmJ8f-Uo_4OD4IbRMnFb2suHoy13bl8JtwKkP8J1Vp8Z9kYRuVd48tr=w1920-h1080-no?authuser=0"
                  alt=""
                />
                <p className="img-text">
                  Her er forsiden på den nye appen, her kan man søke etter
                  poster som denne gangen ligger lagret på en av Mongo DBs
                  servere og ikke i selve kildekoden.
                </p>
              </div>
              <div>
                <img
                  className="img"
                  src="https://lh3.googleusercontent.com/pw/AL9nZEUQvhnGmB8KlUQpQZuVGp93R7W3GDvu4Pk9kpQGcpnNBMvGhxrY78dZcZ5A8BSSkOW2emvdKkt66lXZTkX5tTTI5MhrHJzc2LEWc9ATuyTwM4WwZQBwDVkoc95BXr19A087YSY9wtIWIrv2JKCEErcr=w1920-h1080-no?authuser=0"
                  alt=""
                />
                <p className="img-text">
                  På bildet så er de blå ringene utfyllingsringer og de gule er
                  det som blir til plank. Verdiene som står øverst på bladet er
                  sagsnittet og nederst er bladstammetykkelsen. Verdien med den
                  blå skriften mellom bladene er det som er råmålet på
                  planktykkelsen. Det nominelle målet står i overskriften øverst
                  til venstre(38). Alle mål er i mm.
                </p>
              </div>
            </div>
            <h1 className="header section-header">Postarkiv (skurliste)</h1>

            <div className="text-container">
              <img
                className="img"
                src="https://postarkiv.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Finfo%2Ffourth.e3bab3ec6cc4c0f14c65abfc7757114a.png&w=2048&q=75"
                alt=""
              />
              <p>
                Jeg hadde lenge tenkt å lage et system der man bare kan klikke
                rett i ordreplanene å få opp kun de postenen som hører til
                uttaket. Da slipper man også å søke etter hvilken post man skal
                ha. Så jeg startet å lage en app der man kan legge inn
                skurplanen. Meningen først var at det skulle bare være en enkel
                app der vi bare kan legge inn skurlister og velge post fra
                lista. Men jeg utvidet senere appen til å kunne lage nye poster
                og lagre nye. Så det blir en fullstendig redesign og en app som
                erstatte den forrige appen.
              </p>
            </div>
            <div className="text-imgcontainer3 mt margins">
              <div>
                <img
                  className="img"
                  src="https://lh3.googleusercontent.com/pw/AL9nZEXtdeHOiMraTIrDioqj5yRUPHiZy2Q6jVuOBjZ1_nFlL-qx8al5JfOr85xFROB7evJC4AorEO708XoodrrQFtKlfg0TyOpCd9-4RU9WTFK1t1O5ytkcgpOWPbBNnoNnpxqsOZSkVg1fAQI2tetpaQix=w800-h450-no?authuser=0"
                  alt=""
                />
                <p className="img-text">
                  Her ser man et bilde av at man lager en ny post. Til høyre på
                  bildet ser man ringene som vi har å velge mellom. Her kan man
                  ikke skrive inn egne verdier men kun velge verdier som vi har
                  på ringene.
                </p>
              </div>
              <div>
                <img
                  className="img"
                  src="https://lh3.googleusercontent.com/pw/AL9nZEWoBtvW8rwIuszdOtBZe8UhRkw7wwOboXHQmT8-NxOfA1aSefCw0iYGocfrcEKyG9f3rINQhQn_dZ3IQ6Xm6UnYnavFpbqrxT9Dn_7I5mWsqRKehSMN8kzY5JpNln6fdTpIFq0sYbTivW5bgWzTXabb=w800-h450-no?authuser=0"
                  alt=""
                />
                <p className="img-text">
                  Her ser man posten som skal bygges, nederst til venstre ser
                  man detaljer på den posten som man har funnet fram. Denne
                  informasjonen kommer kun når man velger fra skurlista og ikke
                  når man søker manuelt.
                </p>
              </div>
            </div>
            <h1 className="header mb">Gammelt system</h1>
            <div className="text-imgcontainer">
              <div>
                <p className="mb">
                  Systemet som ble brukt før jeg lagde programmet var utskrifter
                  på papir som ble sortert i permer. På utskriftene så får man
                  bare utregning på utfyllingen foran som vist på bildet under.
                  Uten å vite utregning foran så må man bare finne ringer som
                  fyller ut til man får skrudd til posten. Siste mutteren havner
                  ikke alltid på samme sted da. Dette var en av hovedårsakene
                  til at jeg begynte å lage en slik app.
                </p>
                <img
                  className="img"
                  src="https://lh3.googleusercontent.com/pw/AL9nZEVKR1q699EebVexRupJDwqKVfhb2Klm4UNjRL_NdXNHdSJUUF254xBcC2avdRdpCGxnqizCoIPGrS9rEUeyT78GQNkDuMWfUp8xfwMuCUyGuOr8G0CpdQYi73gKwWt1PVW8Ied3D3TJFODpZMUEH7KN=w706-h430-no?authuser=0"
                  alt=""
                />
                <p className="img-text">Utsnitt av en utskrift</p>
              </div>
              <img
                className="img"
                src="https://lh3.googleusercontent.com/pw/AL9nZEUO5Dy5QLVDFi7Prk1vloRnhP8SkZqZuDRkz5bEe5a3FvNt6d-bodDxhkY-Esi0q3u4BaPiSkvEPNCjxhgzoFgepKO2W8Yv5ocv422tWVr8ahOgUw3ZqbXGTMnR8ENzkeoO7F4nPKcQ2Ib2NMbUc8En=w1440-h1080-no?authuser=0"
                alt=""
              />
            </div>
            <div className="text-imgcontainer mt margins">
              <p>
                En annen fordel med appen er at man kan søke etter poster
                istedetfor å bla seg gjennom mange ark i permer. Der du noen
                ganger kan stå flere minutter å lete etter en post som heller
                kanskje ikke har blitt laget før og ikke eksisterer. På
                programmet så tar det kun sekunder å finne en post eller finne
                ut at man må lage en ny. Nå man måtte ha en ny post før så måtte
                man gå opp til saghuset og be om en utskrift også dette var
                tungvint og tok litt tid. Nå lager man bare den nye posten i
                programmet uten og måtte forholde seg til noen andre. og med
                ferdige utregninger og at man bare klikker på ringverdier så er
                det også mye enklere å finne hvilke ringer man skal bruke.
              </p>
              <img
                className="img"
                src="https://lh3.googleusercontent.com/pw/AL9nZEW14KGzkcvcoWyqZAmAP5pWEJPPBNwDzJ0GBpDNsfeWA05dVVqbysOrXczcuewmBkiNPR6IMR4xlDTgFLUYFspLkThv4C0SZilMCSZIsYTr7wJQA-ULgD8weK5EZUYAVa7p-yM-CkNFa3EsMTkYyfZy=w800-h600-no?authuser=0"
                alt=""
              />
            </div>
          </div>
        
        </div>
      </MarginLayout>
      <style jsx>
        {`
          .container {
          }
          .text-imgcontainer {
            display: grid;
            grid-template-columns: 25rem 1fr;
            grid-gap: 3rem;
          }
          .img-textcontainer2 {
         
          margin-top: 5rem
        }
        .section-header {
          margin: 8rem 0 3rem 0
        }
        .text-imgcontainer3 {
          display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 3rem;
            margin-top: 8rem
        }
        .text-container {
           margin-bottom: 8rem
        }

        .margins {
          margin-bottom: 5rem
        }
       
        
          @media only screen and (max-width: 756px) {


         .text-imgcontainer {
            grid-template-columns: 1fr;
        }
        .text-imgcontainer3 {
            grid-template-columns: 1fr;
            grid-gap: 3rem;
        }
       


        `}
      </style>
    </>
  );
};

export default Appdescription;
