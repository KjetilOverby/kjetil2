import React from "react";
import Column2Layout from "../common/Column2Layout";
import MarginLayout from "../common/MarginLayout";
import AppsectionTools from "./AppsectionTools";

const Section1 = () => {
  return (
    <>
      <div className="container">
        <MarginLayout>
          <div className="content-margins">
            <h1 className="header mb">Verktøyregister</h1>
            <p className="mbl">
              Verktøyregister er en utvikling av Sagbladregister som det startet
              med. Poenget med programmet var først å ha kontroll på antall
              omloddinger bladet har. Før ble det tatt en visuell vurdering om
              et blad skal omloddes eller ikke, men et blad som ser bra ut
              trenger ikke å være så bra. Etter hver omlodding så blir bladets
              stamme dårligere så vi bruker å ligge på 3-5 omloddinger, etter
              det skal bladet kasseres uansett hvor bra det skulle se ut. Med
              programmet fikk vi også oversikt over når et blad var registrert
              og når de ble omloddet.
            </p>
            <Column2Layout>
              <img
                className="img"
                src="https://lh3.googleusercontent.com/pw/AL9nZEUR6kXtpxhQNrH2L4yRvapPhMzUdRoPySX9YpCeFlYx8iMWiRlgY0BLBjNDYnIn4h4s200HCcOeEduKxVJaq_hUYsGiaUGFiXYXcJXgTRbLbzQssRmmugySkojwNFHVWvTq3bQs1krNpELD-QBHG2a1=w800-h600-no?authuser=0"
                alt=""
              />
              <p>
                Bladet blir slipt mange ganger til det ikke er igjen noe av
                hardmetallklossen. Da byttes den gamle klossen med en ny en.
              </p>
            </Column2Layout>
            <Column2Layout>
              <p>
                Men for å lage et system med registrering av blad så må man ha
                et id nummer for å vite hvilket blad man har med å gjøre. De
                fleste bladene som blir brukt i denne forbindelse er fra
                produsenten Kanefusa, og de har et eget unikt id nummer på hvert
                blad. Dette gjør det enkelt å registrere bladene i en database.
                på bildet ser man at det er et id nummer som starter på 8J. Vi
                bruker da 8J pluss de fire siste sifrene, altså 8J00102
              </p>
              <img
                className="img"
                src="https://lh3.googleusercontent.com/pw/AL9nZEXUnH60jfOkubwRcJz2Y1rlKfLOfGPvuf3sLoaWgzlv8iWEMOC8plw0XnW0_2E4ffQf8e14KkoQoa5hzv2EixsZMS_vuRBQ6qri-kY1PqmeXIN_S_cKAJsIZvuVsHfHoYYMHGhrvIA3AlrMhA0fEe0P=w1440-h1080-no?authuser=0"
                alt=""
              />
            </Column2Layout>
          </div>
        </MarginLayout>
        <AppsectionTools />
        <MarginLayout>
          <div className="content-margins">
            <div id='access'>
            <h1 className="header mb">Microsoft Access</h1>
            <p className="mb">
              Jeg forsøkte å lage et system i Microsoft Excel, men jeg ville ha
              noe som kunne minne mer om en app der man kan klikke seg inn på
              forskjellige blader. Så jeg begynte å utvikle et system i
              Microsoft Access. Der kunne vi legge inn registreringsdato, hvilke
              datoer som de ble omloddet på og da hadde vi også telling på hvor
              mange ganger de har blitt omloddet. Man kunne legg inn en
              kommentar. Og vi kunne legge inn hvor mange stokker som sagbladet
              har saget. Senere så fjernet jeg stokkantall på bladene da dette
              var mye jobb å få lagt inn korrekt og at dataen på dette var
              meningsløse og ikke ble brukt til noe. Mars 2016 begynner vi med å
              legge inn bladene våre i Access databasen. Det var heller ikke noe
              lettvint å bruke dataen til statistikk. Jeg lagde et opplegg der
              vi kunne se hvor mange blad som ble vraket eller lagt til. Men
              hver gang vi vraket et blad så måtte vi legge det til i
              vrakstatistikken manuelt. Det beste er at et program automatiserer
              det meste ellers blir det ikke gjort ordentlig til slutt og det
              endte med at vi bare registrerte antall omloddinger, for det måtte
              vi ha. Og statistikken ble skrotet.
            </p>
            <img
              className="img"
              src="https://lh3.googleusercontent.com/pw/AL9nZEU-yzM9i9ftSMtPQSdECmV3yNe9WYJ3Af5NKe5q4w-Rh1kKt1tAd7X9CiMuGQw4KfWHwZdtVTjzABvwI1_d6WsWPZ76Qd1hjg1C4tzR07OqsVOlqeqmsapGI5XdxQoilqDWVUi9zDIkWzo0iet5HVYq=w1824-h1080-no?authuser=0"
              alt=""
            />
            <p className="img-text mb">
              Her er et skjermbilde av hvordan forsiden så ut på Access appen.
            </p>
            <Column2Layout>
              <img
                className="img"
                src="https://lh3.googleusercontent.com/pw/AL9nZEW5W0pnOEX_sTU1w9LGf5f9k_fdBAD5Ke-w8ETWg76S8RmeolzQggt2kL2PEonhbNhcNvvbOVqZluMQy28CAhljKJJc8ew0XHKhTYXAHNPMgXEVo8VfQF_EzChjCQ2AQgOV9Kg8KPvl8OmLe8JTo4bc=w1824-h1080-no?authuser=0"
                alt=""
              />
              <img
                className="img"
                src="https://lh3.googleusercontent.com/pw/AL9nZEU5QSAKDMUZ4hLG_VMua7OXc1tsuyVE1gFLITSScMK_yg6Zoa25nIeu-65KEBdRkQ4ffHI8W70ARhuLZDlBYHJid_KWasRII01xYX3VdU6G1Sn2TRmSU0tYluJN1HqhZL_W6CbHLNLeNOV58tp6x_Vt=w1824-h1080-no?authuser=0"
                alt=""
              />
              
            </Column2Layout>
            </div>
            <div id='webapplikasjon'>
            <h1 className="header mb">Webapplikasjon</h1>
            <p className="mbl">
              Mai 2020 starter prosjektet med å lage en webapplikasjon for
              sagbladregistrering. Men for å få all data in i databasen på
              webapplikasjonen så ender det med at jeg legger inn alle blad på
              nytt og fører over dataen fra Microsoft Access databasen til den
              nye databasen manuelt. Jeg bruker MongoDB og å logge seg på der å
              legge inn data er meget tungvint så jeg designet et lite program
              for å gjøre overføringen lettere. Med all data på plass så blir
              Microsoft access skrotet og vi går over til den nye
              sagbladregisteret.
            </p>
            <Column2Layout>
              <p>
                Microsoft Access hadde en del begrensninger for hva man kan
                gjøre i forhold til programmering. For å legge inn service og
                dato så måtte man skrive inn informasjonen manuelt og når man
                får inn kanskje 30 blad på en gang så blir det litt jobb. Med
                det nye så kan man bare med et klikk få inn service info og
                dagens dato automatisk. En annen fordel med den nye
                applikasjonen er at man kan sjekke bladinfo fra mobilen og
                trenger ikke alltid og gå til datamaskinen for å gjøre det. Men
                appen føles treg og man må åpne en helt ny side bare for å f.eks
                slette et blad. Dette fordi jeg har begrenset kunnskap om
                backend programmering. Så denne applikasjonen blir ikke den
                eneste. Nye versjoner av appen kommer.
              </p>
              <img
                className="img"
                src="https://lh3.googleusercontent.com/pw/AL9nZEWCENEKNjxIO1g6sohDOtM5gjNwnCrSUJJRxvorZDrQ9IgA737Hhi1e1o19OIJi_TDsnhF6QOUxWB_p6cC9ZeeJGXjkIOzO2CHCc17vET86Uk_37KBRq0qnLQ0gtcJtLGmFqIhYFNYm65hQhzDDoFPJ=w1920-h1080-no?authuser=0"
                alt=""
              />
            </Column2Layout>
            </div>
            <div id='mobil'>
            <h1 className="header mb">Mobil App</h1>
            <p className="mb">
              Jeg har også drevet litt med React Native der man kan lage Native
              apper til mobil og legge ut på App store eller Google play. Jeg
              lagde sagbladregister også med React Native. Native appen blir
              aldri lagt ut på Google Play eller App Store, men jeg får brukt
              den på min egen mobil. På backend siden legger jeg inn telling på
              vrak og hvor mange blad som er innom service. Dette oppdaterer seg
              automatisk når man legger inn det samme som jeg gjorde på Access
              appen. Mobil appen og webapplikasjonen er koblet til den samme
              databasen.
            </p>
            <img
              className="img mbl"
              src="https://lh3.googleusercontent.com/pw/AL9nZEWp3pEGCghZiQMQx4wr8FFcpPZio8MTu5yp55YzKy3jq0hkv9a1Lb2ONKEGmYlh1JHIji0fJ_fVro_AVKJWHWcrns2okWcuO3QM01OZ0QYpa5Fp4Wjye43KbuNY-neiGkg3KrMtJYPXg4difTPxM83i=w1920-h921-no?authuser=0"
              alt=""
            />
            </div>
            <div id='oppgradering'>
            <h1 className="header mb">Oppgradering</h1>
            <Column2Layout>
              <p>
                Med mer kunnskap på backend så begynner jeg på en ny sagblad
                app. Backend kode er nå med Node.js og Express som rammeverk.
                Bruker også Mongo DB kommandoer i Node. I den forrige appen så
                hentet jeg bare innholdet i databasen og brukte JavaScript til å
                filtrere ut data som skal vises.
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
            <div id='sagbladoversikt'>
            <h1 className="header mb">Sagbladoversikt</h1>
            <div>
              <p>
                I dag så bruker vi stort sett Kanefusa blad i vår saglinje.
                Kanefusa har uforutsigbare leveringstider. Vi har opplevd flere
                ganger at leveringstiden kan bli flere måneder lenger en antatt.
                Dette gjør det vanskelig å vite når man bør bestille blader.
                Noen ganger har vi nesten gått tom for noen bladtyper fordi
                levering var forsinket.
              </p>
              <br />
              <p className="mb">
                Løsningen på det ble at leverandør holder lager av bladene som
                vi trenger. De bestiller opp nye når vi henter ut. Men sånn som
                det er idag så forbruker vi blader til det begynner å bli lite
                og så henter vi ut fra lageret hos leverandør. Forbruket er
                forskjellig fra år til år og det er stor forskjell fra milde og
                kalde vintre. Det kan være litt vanskelig å vite hvor mye man
                bør ha på lager.
              </p>
            </div>
            <img
              className="img"
              src="https://lh3.googleusercontent.com/pw/AL9nZEVWKNA2WEwJn4C1sBYCHZ1NuttWMfDl7tDUjHCwSBQUecKy7SodO_HRhChvwxUQVAGWvnSMwBO2vFlZ2u9ydKCCz_ghYdjiFix-b8mVmWc2dccx9OVM8d2zmq7KV2FCfFuoRx4VSWFmSSKb3k209Ds-=w1440-h1080-no?authuser=0"
              alt=""
            />
            <p className="img-text mb">
              Sagbladene er også i omløp hele tiden og det er svært varierende
              for hvor mange blad som er inne til omlodding. også hvor mange
              blad som står på vent til å sendes. Dette gjør det uoversiktlig
              over hvor mye blad vi egentlig har til enhver tid. Da må man i så
              fall drive å telle opp blad rundt omkring.
            </p>
            <div>
              <img
                className="img mb"
                src="https://lh3.googleusercontent.com/pw/AL9nZEWZX39m9Jx7rbND-ZoY0yG4IjoI8FK6mI-YbGFb9-2JS_3ln0Z5FgevtI2r3hX791Ugg8VVvxhfg0K1sBm0kUUvm4bWjjxvkW_eNjnCCn4-fLeOT4lYDrfqwS2pU-J3sr-QMfj5hk7FJhuWNWANGfnT=w1920-h1080-no?authuser=0"
                alt=""
              />
              <p>
                Sagbladregisteret kan hjelpe oss med å ha litt mer kontroll hvor
                stort lager vi bør ha. Jeg har utviklet en applikasjon til
                leverandør som er denne appen her. Her er det oversikt over. Vi
                har sending hver 14 dag og det har vært snakk om å erstatte
                vrakede blade med nye i så korte intervaller hvis det er snakk
                om mye.
              </p>
              <br />
              <p>
                Sending/levering vil ende på vilkårlige datoer å det ble
                vanskelig å lage en oversikt over registrerte hendelser i de
                intervallene. Jeg endte opp med å lage en søkefunksjon som
                leverandør selv kan velge hvilken tidsperiode de vil hente data
                fra. Det ble da gjort med at en kan velge startdato og sluttdato
                i en oversiktlig kalender.
              </p>
            </div>
            </div>
          <div id="sagbladregister2">
            <h1 className="header mb mtl">Sagbladregister 2</h1>
            <p className="mb">
              En ny versjon blir laget med helt nytt design og nye teknologier
              på backend testes ut.
            </p>
            <img
              src="https://lh3.googleusercontent.com/pw/AL9nZEVlgcKwKqXc_BZ894cwj-drRVrVUSwznhFqjy3TBm-H7zSgM-1IjJzYyq_6NT_zIC0WLBJVDz957mFVUmqhcwI6Gb3k-pmtcxwfnVd_M-YefR0PFXXRZTXXQeDvSHZRzinYm_Pqg7vh0XXM8BBdgapX=w800-h450-no?authuser=0"
              alt=""
            />
            </div>
            <div id="verktoyregister">

            
            <h1 className="header mb mtl">Verktøyregister</h1>
            <Column2Layout>
              <div>
                <p>
                  Sagbladregister som jeg har laget tidligere, tar kun for seg
                  sagbladene som sendes til omlodding og har et eget id nummer.
                  Men Det er også flere bladtyper som ikke omloddes, men brukes
                  kun til de er utslitt og kastes. Det er også en del annet
                  verktøy som kniver og segmenter. Ikke noe av dette blir
                  omloddet men kastet etter at de er brukt opp.
                </p>
                <br />
                <p>
                  I sagbladregister registreres hvert enkelt blad med et id
                  nummer, dette gjør at antallet sagblad teller seg selv. Med
                  forøvrig verktøy så blir det annerledes da det ikke trenger å
                  ha egne id nummere men registrers i antall. Da blir det et
                  helt annet system enn sagbladregister, der hver type verktøy
                  må oppdateres med antall til eller fra. Man sletter altså ikke
                  noe fra databasen sånn som man gjør i sagbladregister. Det
                  ender med at jeg begynner å lage en ny app.
                </p>
              </div>
              <div>
                <img
                  className="img"
                  src="https://lh3.googleusercontent.com/pw/AL9nZEUpmUfjA7YpJSHIaCuHU5csPDUcFy-3BKtM4QC_jIlYv7eT1w2doi8bqDvYzeg09tpp6q_K4OiB5fiEyITAeCU7mXBS52ODFoMwQ2z3-eEIx_ubUACN6tvKR2g7KZCBRHNMYJJ-VF1vvrqbasOt3NIT=w800-h450-no?authuser=0"
                  alt=""
                />
                <p className="img-text">
                  Her ser man en side med oversikt over noe av verktøyet med
                  bilder. Noe som gjør det enklere å redigere data på riktig
                  verktøy, spesielt for noen som er ganske ferske i jobben.
                </p>
              </div>
            </Column2Layout>
            <img
              className="img"
              src="https://lh3.googleusercontent.com/pw/AL9nZEXq8wP1_Dcq1W1IDflscDmKtXXlXcaqm9PS2nFkuokkb6aHh9hAkkbjSSISMQ1OZsfcedEsljcSLkbp3wOzaLqT68tlwajQ1QqSXNe-phlq0DmgUzsnSUr2qWCt9k7vhBRnCai9XeIh-b-y2fIuDKGT=w800-h450-no?authuser=0"
              alt=""
            />
            <p className="img-text">
              På bildet over kan man søke etter bladene som har egen id nummer.
              Der man kan legge til en omlodding, kommentar eller slette bladet.
              Bladene som slettes eller lagt til en omlodding blir satt i listen
              til venstre. De sorteres etter måneder og man kan klikke på rød
              pil for å gå måneder tilbake å se hvilke blader som ble vraket
              eller omloddet i den aktuelle måneden.
            </p>
            </div>
            <div id="verktoyregister2">
            <h1 className="header mb mtl">Verktøyregister 2</h1>
            <p className="mb">
              Jeg begynner enda en gang med verktøyregister. Denne gangen er det
              et helt nytt design med menyer på venstre side på appen. Jeg var
              ikke helt fornøyd med den forrige appen da den kan virke noe mer
              uoversiktlig. Så jeg prøver meg enda en gang med en ny app.
            </p>
            <img
              className="img mb"
              src="https://lh3.googleusercontent.com/pw/AL9nZEWMuV6nxbfV2xhP6Vpg9P_-UBlSSh0i8C2xV9BIjJevm-thX_wRhvU_1k6ZjCJb0L2JJ8ExXfegpcweqL3RmgWdz0sTQtKvhywYD16s1MAd09fiPAVZ0llK4RwtDBNhtBc1Uon6G5JUCx5ECr8D-QqS=w800-h450-no?authuser=0"
              alt=""
            />
            <Column2Layout>
              <img
                className="img"
                src="https://lh3.googleusercontent.com/pw/AL9nZEVujqRinK-MZIskcEr138oJzD5AE8Rm6gluW5BqnlsZYPTF-JbbFpXhGFLp6hI2N6h2tno52DrKfbxoQP3aLQocDzqK-tGkxPsiwqBKdSku5ixY2Uj_RGcMrdoLXKM3G2pJDj-ezfyHQDGE5vgH24PT=w800-h450-no?authuser=0"
                alt=""
              />
              <img
                className="img"
                src="https://lh3.googleusercontent.com/pw/AL9nZEUrV0pi9kXY4v8xeszekrfVMAF-CwxQim8o_WbAUVAp6bqHxjagAQyGTic8cJFAQX6SBDoidC1LMg6KHc4Ei4EhVMK4czEg57LVdLSqS76vNiSisAiQ4TvTdQ5p0L0m2ViCvhkp8HgTofbwMpw1r5Hu=w800-h450-no?authuser=0"
                alt=""
              />
            </Column2Layout>
            </div>
          </div>
        </MarginLayout>
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
