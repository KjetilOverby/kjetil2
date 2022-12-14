import React from "react";
import Column2Layout from "../common/Column2Layout";
import MarginLayout from "../common/MarginLayout";
import AppsectionTools from "./AppsectionTools";
import Image from "next/image";

const retipImg =
  "https://lh3.googleusercontent.com/pw/AL9nZEUR6kXtpxhQNrH2L4yRvapPhMzUdRoPySX9YpCeFlYx8iMWiRlgY0BLBjNDYnIn4h4s200HCcOeEduKxVJaq_hUYsGiaUGFiXYXcJXgTRbLbzQssRmmugySkojwNFHVWvTq3bQs1krNpELD-QBHG2a1=w800-h600-no?authuser=0";
const sawbladeImg =
  "https://lh3.googleusercontent.com/pw/AL9nZEXUnH60jfOkubwRcJz2Y1rlKfLOfGPvuf3sLoaWgzlv8iWEMOC8plw0XnW0_2E4ffQf8e14KkoQoa5hzv2EixsZMS_vuRBQ6qri-kY1PqmeXIN_S_cKAJsIZvuVsHfHoYYMHGhrvIA3AlrMhA0fEe0P=w1440-h1080-no?authuser=0";
const access =
  "https://lh3.googleusercontent.com/pw/AL9nZEU-yzM9i9ftSMtPQSdECmV3yNe9WYJ3Af5NKe5q4w-Rh1kKt1tAd7X9CiMuGQw4KfWHwZdtVTjzABvwI1_d6WsWPZ76Qd1hjg1C4tzR07OqsVOlqeqmsapGI5XdxQoilqDWVUi9zDIkWzo0iet5HVYq=w1824-h1080-no?authuser=0";
const access2 =
  "https://lh3.googleusercontent.com/pw/AL9nZEW5W0pnOEX_sTU1w9LGf5f9k_fdBAD5Ke-w8ETWg76S8RmeolzQggt2kL2PEonhbNhcNvvbOVqZluMQy28CAhljKJJc8ew0XHKhTYXAHNPMgXEVo8VfQF_EzChjCQ2AQgOV9Kg8KPvl8OmLe8JTo4bc=w1824-h1080-no?authuser=0";

const sagbladregister2Img =
  "https://lh3.googleusercontent.com/pw/AL9nZEVlgcKwKqXc_BZ894cwj-drRVrVUSwznhFqjy3TBm-H7zSgM-1IjJzYyq_6NT_zIC0WLBJVDz957mFVUmqhcwI6Gb3k-pmtcxwfnVd_M-YefR0PFXXRZTXXQeDvSHZRzinYm_Pqg7vh0XXM8BBdgapX=w800-h450-no?authuser=0";
const access3 =
  "https://lh3.googleusercontent.com/pw/AL9nZEU5QSAKDMUZ4hLG_VMua7OXc1tsuyVE1gFLITSScMK_yg6Zoa25nIeu-65KEBdRkQ4ffHI8W70ARhuLZDlBYHJid_KWasRII01xYX3VdU6G1Sn2TRmSU0tYluJN1HqhZL_W6CbHLNLeNOV58tp6x_Vt=w1824-h1080-no?authuser=0";
const webAppImg =
  "https://lh3.googleusercontent.com/pw/AL9nZEWCENEKNjxIO1g6sohDOtM5gjNwnCrSUJJRxvorZDrQ9IgA737Hhi1e1o19OIJi_TDsnhF6QOUxWB_p6cC9ZeeJGXjkIOzO2CHCc17vET86Uk_37KBRq0qnLQ0gtcJtLGmFqIhYFNYm65hQhzDDoFPJ=w1920-h1080-no?authuser=0";
const mobilAppImg =
  "https://lh3.googleusercontent.com/pw/AL9nZEWp3pEGCghZiQMQx4wr8FFcpPZio8MTu5yp55YzKy3jq0hkv9a1Lb2ONKEGmYlh1JHIji0fJ_fVro_AVKJWHWcrns2okWcuO3QM01OZ0QYpa5Fp4Wjye43KbuNY-neiGkg3KrMtJYPXg4difTPxM83i=w1920-h921-no?authuser=0";
const Section1 = () => {
  return (
    <>
      <div className="container">
        <MarginLayout>
          <div className="content-margins">
            <h1 className="header mb">Verkt??yregister</h1>
            <p className="mbl">
              Verkt??yregister er en utvikling av Sagbladregister som det startet
              med. Poenget med programmet var f??rst ?? ha kontroll p?? antall
              omloddinger bladet har. F??r ble det tatt en visuell vurdering om
              et blad skal omloddes eller ikke, men et blad som ser bra ut
              trenger ikke ?? v??re s?? bra. Etter hver omlodding s?? blir bladets
              stamme d??rligere s?? vi bruker ?? ligge p?? 3-5 omloddinger, etter
              det skal bladet kasseres uansett hvor bra det skulle se ut. Med
              programmet fikk vi ogs?? oversikt over n??r et blad var registrert
              og n??r de ble omloddet.
            </p>
            <Column2Layout>
              <Image
                layout="responsive"
                height="45"
                width="60"
                loader={() => retipImg}
                unoptimized={true}
                src={retipImg}
                alt=""
              />
              <p>
                Bladet blir slipt mange ganger til det ikke er igjen noe av
                hardmetallklossen. Da byttes den gamle klossen med en ny en.
              </p>
            </Column2Layout>
            <Column2Layout>
              <p>
                Men for ?? lage et system med registrering av blad s?? m?? man ha
                et id nummer for ?? vite hvilket blad man har med ?? gj??re. De
                fleste bladene som blir brukt i denne forbindelse er fra
                produsenten Kanefusa, og de har et eget unikt id nummer p?? hvert
                blad. Dette gj??r det enkelt ?? registrere bladene i en database.
                p?? bildet ser man at det er et id nummer som starter p?? 8J. Vi
                bruker da 8J pluss de fire siste sifrene, alts?? 8J00102
              </p>
              <Image
                layout="responsive"
                height="45"
                width="60"
                loader={() => sawbladeImg}
                src={sawbladeImg}
                unoptimized={true}
                alt=""
              />
            </Column2Layout>
          </div>
        </MarginLayout>
        <AppsectionTools />
        <MarginLayout>
          <div className="content-margins">
            <div id="access">
              <h1 className="header mb">Microsoft Access</h1>
              <p className="mb">
                Jeg fors??kte ?? lage et system i Microsoft Excel, men jeg ville
                ha noe som kunne minne mer om en app der man kan klikke seg inn
                p?? forskjellige blader. S?? jeg begynte ?? utvikle et system i
                Microsoft Access. Der kunne vi legge inn registreringsdato,
                hvilke datoer som de ble omloddet p?? og da hadde vi ogs?? telling
                p?? hvor mange ganger de har blitt omloddet. Man kunne legg inn
                en kommentar. Og vi kunne legge inn hvor mange stokker som
                sagbladet har saget. Senere s?? fjernet jeg stokkantall p??
                bladene da dette var mye jobb ?? f?? lagt inn korrekt og at dataen
                p?? dette var meningsl??se og ikke ble brukt til noe. Mars 2016
                begynner vi med ?? legge inn bladene v??re i Access databasen. Det
                var heller ikke noe lettvint ?? bruke dataen til statistikk. Jeg
                lagde et opplegg der vi kunne se hvor mange blad som ble vraket
                eller lagt til. Men hver gang vi vraket et blad s?? m??tte vi
                legge det til i vrakstatistikken manuelt. Det beste er at et
                program automatiserer det meste ellers blir det ikke gjort
                ordentlig til slutt og det endte med at vi bare registrerte
                antall omloddinger, for det m??tte vi ha. Og statistikken ble
                skrotet.
              </p>
              <Image
                layout="responsive"
                height="45"
                width="70"
                loader={() => access}
                src={access}
                unoptimized={true}
                alt=""
              />
              <p className="img-text mb">
                Her er et skjermbilde av hvordan forsiden s?? ut p?? Access appen.
              </p>
              <Column2Layout>
                <Image
                  layout="responsive"
                  height="45"
                  width="60"
                  loader={() => access2}
                  src={access2}
                  unoptimized={true}
                  alt=""
                />
                <Image
                  layout="responsive"
                  height="45"
                  width="60"
                  loader={() => access3}
                  src={access3}
                  unoptimized={true}
                  alt=""
                />
              </Column2Layout>
            </div>
            <div id="webapplikasjon">
              <h1 className="header mb">Webapplikasjon</h1>
              <p className="mbl">
                Mai 2020 starter prosjektet med ?? lage en webapplikasjon for
                sagbladregistrering. Men for ?? f?? all data in i databasen p??
                webapplikasjonen s?? ender det med at jeg legger inn alle blad p??
                nytt og f??rer over dataen fra Microsoft Access databasen til den
                nye databasen manuelt. Jeg bruker MongoDB og ?? logge seg p?? der
                ?? legge inn data er meget tungvint s?? jeg designet et lite
                program for ?? gj??re overf??ringen lettere. Med all data p?? plass
                s?? blir Microsoft access skrotet og vi g??r over til den nye
                sagbladregisteret.
              </p>
              <Column2Layout>
                <p>
                  Microsoft Access hadde en del begrensninger for hva man kan
                  gj??re i forhold til programmering. For ?? legge inn service og
                  dato s?? m??tte man skrive inn informasjonen manuelt og n??r man
                  f??r inn kanskje 30 blad p?? en gang s?? blir det litt jobb. Med
                  det nye s?? kan man bare med et klikk f?? inn service info og
                  dagens dato automatisk. En annen fordel med den nye
                  applikasjonen er at man kan sjekke bladinfo fra mobilen og
                  trenger ikke alltid og g?? til datamaskinen for ?? gj??re det.
                  Men appen f??les treg og man m?? ??pne en helt ny side bare for ??
                  f.eks slette et blad. Dette fordi jeg har begrenset kunnskap
                  om backend programmering. S?? denne applikasjonen blir ikke den
                  eneste. Nye versjoner av appen kommer.
                </p>
                <div>
                  <Image
                    layout="responsive"
                    height="34"
                    width="60"
                    loader={() => webAppImg}
                    src={webAppImg}
                    unoptimized={true}
                    objectFit="contain"
                    alt=""
                  />
                </div>
              </Column2Layout>
            </div>
            <div id="mobil">
              <h1 className="header mb">Mobil App</h1>
              <p className="mb">
                Jeg har ogs?? drevet litt med React Native der man kan lage
                Native apper til mobil og legge ut p?? App store eller Google
                play. Jeg lagde sagbladregister ogs?? med React Native. Native
                appen blir aldri lagt ut p?? Google Play eller App Store, men jeg
                f??r brukt den p?? min egen mobil. P?? backend siden legger jeg inn
                telling p?? vrak og hvor mange blad som er innom service. Dette
                oppdaterer seg automatisk n??r man legger inn det samme som jeg
                gjorde p?? Access appen. Mobil appen og webapplikasjonen er
                koblet til den samme databasen.
              </p>
              <div style={{ background: "yellow" }}>
                <Image
                  layout="responsive"
                  height="45"
                  width="100"
                  loader={() => mobilAppImg}
                  src={mobilAppImg}
                  unoptimized={true}
                  alt=""
                />
              </div>
            </div>
            <div id="oppgradering">
              <h1 className="header mb mt">Oppgradering</h1>
              <Column2Layout>
                <p>
                  Med mer kunnskap p?? backend s?? begynner jeg p?? en ny sagblad
                  app. Backend kode er n?? med Node.js og Express som rammeverk.
                  Bruker ogs?? Mongo DB kommandoer i Node. I den forrige appen s??
                  hentet jeg bare innholdet i databasen og brukte JavaScript til
                  ?? filtrere ut data som skal vises.
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
            <div id="sagbladoversikt">
              <h1 className="header mb">Sagbladoversikt</h1>
              <div>
                <p>
                  I dag s?? bruker vi stort sett Kanefusa blad i v??r saglinje.
                  Kanefusa har uforutsigbare leveringstider. Vi har opplevd
                  flere ganger at leveringstiden kan bli flere m??neder lenger en
                  antatt. Dette gj??r det vanskelig ?? vite n??r man b??r bestille
                  blader. Noen ganger har vi nesten g??tt tom for noen bladtyper
                  fordi levering var forsinket.
                </p>
                <br />
                <p className="mb">
                  L??sningen p?? det ble at leverand??r holder lager av bladene som
                  vi trenger. De bestiller opp nye n??r vi henter ut. Men s??nn
                  som det er idag s?? forbruker vi blader til det begynner ?? bli
                  lite og s?? henter vi ut fra lageret hos leverand??r. Forbruket
                  er forskjellig fra ??r til ??r og det er stor forskjell fra
                  milde og kalde vintre. Det kan v??re litt vanskelig ?? vite hvor
                  mye man b??r ha p?? lager.
                </p>
              </div>
              <img
                className="img"
                src="https://lh3.googleusercontent.com/pw/AL9nZEVWKNA2WEwJn4C1sBYCHZ1NuttWMfDl7tDUjHCwSBQUecKy7SodO_HRhChvwxUQVAGWvnSMwBO2vFlZ2u9ydKCCz_ghYdjiFix-b8mVmWc2dccx9OVM8d2zmq7KV2FCfFuoRx4VSWFmSSKb3k209Ds-=w1440-h1080-no?authuser=0"
                alt=""
              />
              <p className="img-text mb">
                Sagbladene er ogs?? i oml??p hele tiden og det er sv??rt varierende
                for hvor mange blad som er inne til omlodding. ogs?? hvor mange
                blad som st??r p?? vent til ?? sendes. Dette gj??r det uoversiktlig
                over hvor mye blad vi egentlig har til enhver tid. Da m?? man i
                s?? fall drive ?? telle opp blad rundt omkring.
              </p>
              <div>
                <img
                  className="img mb"
                  src="https://lh3.googleusercontent.com/pw/AL9nZEWZX39m9Jx7rbND-ZoY0yG4IjoI8FK6mI-YbGFb9-2JS_3ln0Z5FgevtI2r3hX791Ugg8VVvxhfg0K1sBm0kUUvm4bWjjxvkW_eNjnCCn4-fLeOT4lYDrfqwS2pU-J3sr-QMfj5hk7FJhuWNWANGfnT=w1920-h1080-no?authuser=0"
                  alt=""
                />
                <p>
                  Sagbladregisteret kan hjelpe oss med ?? ha litt mer kontroll
                  hvor stort lager vi b??r ha. Jeg har utviklet en applikasjon
                  til leverand??r som er denne appen her. Her er det oversikt
                  over. Vi har sending hver 14 dag og det har v??rt snakk om ??
                  erstatte vrakede blade med nye i s?? korte intervaller hvis det
                  er snakk om mye.
                </p>
                <br />
                <p>
                  Sending/levering vil ende p?? vilk??rlige datoer ?? det ble
                  vanskelig ?? lage en oversikt over registrerte hendelser i de
                  intervallene. Jeg endte opp med ?? lage en s??kefunksjon som
                  leverand??r selv kan velge hvilken tidsperiode de vil hente
                  data fra. Det ble da gjort med at en kan velge startdato og
                  sluttdato i en oversiktlig kalender.
                </p>
              </div>
            </div>
            <div id="sagbladregister2">
              <h1 className="header mb mtl">Sagbladregister 2</h1>
              <p className="mb">
                En ny versjon blir laget med helt nytt design og nye teknologier
                p?? backend testes ut.
              </p>
              <Image
                layout="responsive"
                height="40"
                width="70"
                objectFit="contain"
                loader={() => sagbladregister2Img}
                src={sagbladregister2Img}
                unoptimized={true}
                alt=""
              />
            </div>
            <div id="verktoyregister">
              <h1 className="header mb mtl">Verkt??yregister</h1>
              <Column2Layout>
                <div>
                  <p>
                    Sagbladregister som jeg har laget tidligere, tar kun for seg
                    sagbladene som sendes til omlodding og har et eget id
                    nummer. Men Det er ogs?? flere bladtyper som ikke omloddes,
                    men brukes kun til de er utslitt og kastes. Det er ogs?? en
                    del annet verkt??y som kniver og segmenter. Ikke noe av dette
                    blir omloddet men kastet etter at de er brukt opp.
                  </p>
                  <br />
                  <p>
                    I sagbladregister registreres hvert enkelt blad med et id
                    nummer, dette gj??r at antallet sagblad teller seg selv. Med
                    for??vrig verkt??y s?? blir det annerledes da det ikke trenger
                    ?? ha egne id nummere men registrers i antall. Da blir det et
                    helt annet system enn sagbladregister, der hver type verkt??y
                    m?? oppdateres med antall til eller fra. Man sletter alts??
                    ikke noe fra databasen s??nn som man gj??r i sagbladregister.
                    Det ender med at jeg begynner ?? lage en ny app.
                  </p>
                </div>
                <div>
                  <img
                    className="img"
                    src="https://lh3.googleusercontent.com/pw/AL9nZEUpmUfjA7YpJSHIaCuHU5csPDUcFy-3BKtM4QC_jIlYv7eT1w2doi8bqDvYzeg09tpp6q_K4OiB5fiEyITAeCU7mXBS52ODFoMwQ2z3-eEIx_ubUACN6tvKR2g7KZCBRHNMYJJ-VF1vvrqbasOt3NIT=w800-h450-no?authuser=0"
                    alt=""
                  />
                  <p className="img-text">
                    Her ser man en side med oversikt over noe av verkt??yet med
                    bilder. Noe som gj??r det enklere ?? redigere data p?? riktig
                    verkt??y, spesielt for noen som er ganske ferske i jobben.
                  </p>
                </div>
              </Column2Layout>
              <img
                className="img"
                src="https://lh3.googleusercontent.com/pw/AL9nZEXq8wP1_Dcq1W1IDflscDmKtXXlXcaqm9PS2nFkuokkb6aHh9hAkkbjSSISMQ1OZsfcedEsljcSLkbp3wOzaLqT68tlwajQ1QqSXNe-phlq0DmgUzsnSUr2qWCt9k7vhBRnCai9XeIh-b-y2fIuDKGT=w800-h450-no?authuser=0"
                alt=""
              />
              <p className="img-text">
                P?? bildet over kan man s??ke etter bladene som har egen id
                nummer. Der man kan legge til en omlodding, kommentar eller
                slette bladet. Bladene som slettes eller lagt til en omlodding
                blir satt i listen til venstre. De sorteres etter m??neder og man
                kan klikke p?? r??d pil for ?? g?? m??neder tilbake ?? se hvilke
                blader som ble vraket eller omloddet i den aktuelle m??neden.
              </p>
            </div>
            <div id="verktoyregister2">
              <h1 className="header mb mtl">Verkt??yregister 2</h1>
              <p className="mb">
                Jeg begynner enda en gang med verkt??yregister. Denne gangen er
                det et helt nytt design med menyer p?? venstre side p?? appen. Jeg
                var ikke helt forn??yd med den forrige appen da den kan virke noe
                mer uoversiktlig. S?? jeg pr??ver meg enda en gang med en ny app.
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
