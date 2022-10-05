import React from "react";
import Column2Layout from "../common/Column2Layout";

const Section1 = () => {
  return (
    <>
      <div className="container">
        <h1 className="header mb">Verktøyregister</h1>
        <p className="mbl">
          Verktøyregister er en utvikling av Sagbladregister som det startet
          med. Poenget med programmet var først å ha kontroll på antall
          omloddinger bladet har. Før ble det tatt en visuell vurdering om et
          blad skal omloddes eller ikke, men et blad som ser bra ut trenger ikke
          å være så bra. Etter hver omlodding så blir bladets stamme dårligere
          så vi bruker å ligge på 3-5 omloddinger, etter det skal bladet
          kasseres uansett hvor bra det skulle se ut. Med programmet fikk vi
          også oversikt over når et blad var registrert og når de ble omloddet.
        </p>
        <Column2Layout>
          <img
            className="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUB25Oc2baBhS1pLfTL7heUgLttZqOt2y_Zzr71FkkoX2-JXFAqi-5vGFZB1y-qQYs_CA&usqp=CAU"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit saepe veniam ratione ex doloribus voluptates,
            doloremque esse iste in similique magni nesciunt iusto autem,
            debitis at mollitia inventore veritatis maxime.
          </p>
        </Column2Layout>
        <Column2Layout>
          <p>
            Men for å lage et system med registrering av blad så må man ha et id
            nummer for å vite hvilket blad man har med å gjøre. De fleste
            bladene som blir brukt i denne forbindelse er fra produsenten
            Kanefusa, og de har et eget unikt id nummer på hvert blad. Dette
            gjør det enkelt å registrere bladene i en database. på bildet ser
            man at det er et id nummer som starter på 8J. Vi bruker da 8J pluss
            de fire siste sifrene, altså 8J00102
          </p>
          <img
            className="img"
            src="https://lh3.googleusercontent.com/pw/AL9nZEXUnH60jfOkubwRcJz2Y1rlKfLOfGPvuf3sLoaWgzlv8iWEMOC8plw0XnW0_2E4ffQf8e14KkoQoa5hzv2EixsZMS_vuRBQ6qri-kY1PqmeXIN_S_cKAJsIZvuVsHfHoYYMHGhrvIA3AlrMhA0fEe0P=w1440-h1080-no?authuser=0"
            alt=""
          />
        </Column2Layout>
        <h1 className="header mb">Microsoft Access</h1>
        <p className="mb">
          Jeg forsøkte å lage et system i Microsoft Excel, men jeg ville ha noe
          som kunne minne mer om en app der man kan klikke seg inn på
          forskjellige blader. Så jeg begynte å utvikle et system i Microsoft
          Access. Der kunne vi legge inn registreringsdato, hvilke datoer som de
          ble omloddet på og da hadde vi også telling på hvor mange ganger de
          har blitt omloddet. Man kunne legg inn en kommentar. Og vi kunne legge
          inn hvor mange stokker som sagbladet har saget. Senere så fjernet jeg
          stokkantall på bladene da dette var mye jobb å få lagt inn korrekt og
          at dataen på dette var meningsløse og ikke ble brukt til noe. Mars
          2016 begynner vi med å legge inn bladene våre i Access databasen. Det
          var heller ikke noe lettvint å bruke dataen til statistikk. Jeg lagde
          et opplegg der vi kunne se hvor mange blad som ble vraket eller lagt
          til. Men hver gang vi vraket et blad så måtte vi legge det til i
          vrakstatistikken manuelt. Det beste er at et program automatiserer det
          meste ellers blir det ikke gjort ordentlig til slutt og det endte med
          at vi bare registrerte antall omloddinger, for det måtte vi ha. Og
          statistikken ble skrotet.
        </p>
        <img
          className="img"
          src="https://lh3.googleusercontent.com/pw/AL9nZEU-yzM9i9ftSMtPQSdECmV3yNe9WYJ3Af5NKe5q4w-Rh1kKt1tAd7X9CiMuGQw4KfWHwZdtVTjzABvwI1_d6WsWPZ76Qd1hjg1C4tzR07OqsVOlqeqmsapGI5XdxQoilqDWVUi9zDIkWzo0iet5HVYq=w1824-h1080-no?authuser=0"
          alt=""
        />
        <p className="img-text mb">
          Her er et skjermbilde av hvordan forsiden så ut på Access appen.
        </p>
        <h1 className="header mb">Webapplikasjon</h1>
        <p className="mbl">
          Mai 2020 starter prosjektet med å lage en webapplikasjon for
          sagbladregistrering. Men for å få all data in i databasen på
          webapplikasjonen så ender det med at jeg legger inn alle blad på nytt
          og fører over dataen fra Microsoft Access databasen til den nye
          databasen manuelt. Jeg bruker MongoDB og å logge seg på der å legge
          inn data er meget tungvint så jeg designet et lite program for å gjøre
          overføringen lettere. Med all data på plass så blir Microsoft access
          skrotet og vi går over til den nye sagbladregisteret.
        </p>
        <Column2Layout>
          <p>
            Microsoft Access hadde en del begrensninger for hva man kan gjøre i
            forhold til programmering. For å legge inn service og dato så måtte
            man skrive inn informasjonen manuelt og når man får inn kanskje 30
            blad på en gang så blir det litt jobb. Med det nye så kan man bare
            med et klikk få inn service info og dagens dato automatisk. En annen
            fordel med den nye applikasjonen er at man kan sjekke bladinfo fra
            mobilen og trenger ikke alltid og gå til datamaskinen for å gjøre
            det. Men appen føles treg og man må åpne en helt ny side bare for å
            f.eks slette et blad. Dette fordi jeg har begrenset kunnskap om
            backend programmering. Så denne applikasjonen blir ikke den eneste.
            Nye versjoner av appen kommer.
          </p>
          <img
            className="img"
            src="https://lh3.googleusercontent.com/pw/AL9nZEWCENEKNjxIO1g6sohDOtM5gjNwnCrSUJJRxvorZDrQ9IgA737Hhi1e1o19OIJi_TDsnhF6QOUxWB_p6cC9ZeeJGXjkIOzO2CHCc17vET86Uk_37KBRq0qnLQ0gtcJtLGmFqIhYFNYm65hQhzDDoFPJ=w1920-h1080-no?authuser=0"
            alt=""
          />
        </Column2Layout>
        <h1 className="header mb">Mobil App</h1>
        <p className="mb">
          Jeg har også drevet litt med React Native der man kan lage Native
          apper til mobil og legge ut på App store eller Google play. Jeg lagde
          sagbladregister også med React Native. Native appen blir aldri lagt ut
          på Google Play eller App Store, men jeg får brukt den på min egen
          mobil. På backend siden legger jeg inn telling på vrak og hvor mange
          blad som er innom service. Dette oppdaterer seg automatisk når man
          legger inn det samme som jeg gjorde på Access appen. Mobil appen og
          webapplikasjonen er koblet til den samme databasen.
        </p>
        <img
          className="img mbl"
          src="https://lh3.googleusercontent.com/pw/AL9nZEWp3pEGCghZiQMQx4wr8FFcpPZio8MTu5yp55YzKy3jq0hkv9a1Lb2ONKEGmYlh1JHIji0fJ_fVro_AVKJWHWcrns2okWcuO3QM01OZ0QYpa5Fp4Wjye43KbuNY-neiGkg3KrMtJYPXg4difTPxM83i=w1920-h921-no?authuser=0"
          alt=""
        />
        <h1 className="header mb">Oppgradering</h1>
        <Column2Layout>
          <p>
            Med mer kunnskap på backend så begynner jeg på en ny sagblad app.
            Backend kode er nå med Node.js og Express som rammeverk. Bruker også
            Mongo DB kommandoer i Node. I den forrige appen så hentet jeg bare
            innholdet i databasen og brukte JavaScript til å filtrere ut data
            som skal vises.
          </p>
          <img
            className="img"
            src="https://lh3.googleusercontent.com/pw/AL9nZEWhQ9hWlq5X03v1h-mINsvQ-SHYObFeI8ZN2If8EjLcYkexPgGHXvdL5X6qQORIZhZ3SiUatXN-kpl004a9KsfT_pnYdbENHQqqn5n7kGPa5H7eYKf__-0JblrsD038pfqriUBKd7vn5i_syUGorKus=w1920-h1080-no?authuser=0"
            alt=""
          />
        </Column2Layout>
        <Column2Layout>
          <img
            className="img"
            src="https://lh3.googleusercontent.com/pw/AL9nZEWGhAzhUg7eiuodqgyUZhvI1FuGiq8bm7_VTrvuo2QLo1u-QdtnLKhuq0ETNgEv1fV0YvM90KaWQOsxcePK1K2kDGfNB_I3sagnjBYfOz5Epy62Of-5bwrVXc5aVKFPRJHsZevNJ0nEN1OrPAoTZwWx=w1920-h1080-no?authuser=0"
            alt=""
          />
          <img
            className="img"
            src="https://lh3.googleusercontent.com/pw/AL9nZEXzzF7ULW9tDf3P2SgYqnX_HoJi_gz7KlLJumYzykm7AIpoNxhMKVb9RclClftZqJphf_oTysfmGRrdG4IjNpmU1aVJI6kFh6-taeH7rNI49qNb14poc8rpUF5AVnd11H_uJYKYOy_xhk4DjwHH9ObA=w1920-h1080-no?authuser=0"
            alt=""
          />
        </Column2Layout>
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default Section1;
