import React from "react";
import MarginLayout from "../../MarginLayout";
import Appcards from "./Appcards";
import Image from "next/image";

const AppsectionMain: React.FC = () => {
  const bladpost =
    "https://lh3.googleusercontent.com/pw/AL9nZEWQ9tNUQethMFxI6l7__A6yY0NV09pJCNNHOad8oCa_oBoWPgX6O3yCbexjJkd71km_uHHAx9kStPeYR3uVBM087YWVptOEnRIuYd1XxLbU_-9uEimfbGZv20vXgBmolOTbw9kONZMl8pDYjE5WGE82=w1440-h1080-no?authuser=0";
  return (
    <>
      <div className="container">
        <MarginLayout>
          <div className="content-margins">
            <h1 className="header mb">Apper</h1>
            <div className="text-imgcontainer">
              <div>
                <p>
                  Jeg fant ut målene som jeg skulle bruke for å få mutterne helt
                  jevne når posten dras til. Så jeg begynte med å regne manuellt
                  for å finne utfyllingen bak. Dette ble tungvint hver gang vi
                  skulle lage ny utfylling bak så jeg starter med å lage et
                  utrgningsprogram i Microsoft Excel.
                </p>
                <br />
                <p>
                  På bildet ser man at en post er dratt til og at den siste
                  mutteren flykter helt jevnt med hylsa. I og med at jeg har
                  funnet et gitt mål av alle ringer og blader til sammen så vil
                  den siste mutteren bli helt lik på alle varianter av uttak, og
                  at posten da selvsagt havner i midten i saga.
                </p>
              </div>
              <div>
                <Image
                  alt="image"
                  src={bladpost}
                  loader={() => bladpost}
                  layout="responsive"
                  objectFit="cover"
                  width="100"
                  height="70"
                />
              </div>
            </div>
            <h1 className="header pro-app-header">
              Programmer og appliakasjoner
            </h1>
            <div className="appcards-container">
              <Appcards
                img="https://lh3.googleusercontent.com/pw/AL9nZEV5Dj5Ae_ckIm7eaFFDa8U7Xl9ynJdNc5xp7bZDNJVqB0CT4WQ80Uo46k8MDdiyxVSL3I0SA-LA9Z5uX7i96lQ7mc_RWTav4K8xBkVLXyhCHr_AnwGdPzbPIQ2SIjt4MgsKL4XIxkyqdPNJ7EkS3r2h=w1686-h1024-no?authuser=0"
                title="Microsoft Excel"
                text="Det første utregningsprogrammet ble laget med Microsoft Excel i april 2016"
                id="#excel"
              />
              <Appcards
                img="https://lh3.googleusercontent.com/pw/AL9nZEWkHPPA-3ew-ejj7jbTzggXqpvkFnt9IsGv9uCkIAg2OHt2wSSqLI71w-wV7xDKwJ1eMxsar3d24IM5JegFEeLRrlFHCNs1FFTyH6BB8wsnxSJE8jbnNFP3Q21wigbKmQJeBrGOOab6wWiAVEwY2rwr=w1920-h1080-no?authuser=0"
                title="Postkalkulator"
                text="Webapp ble utviklet. Denne har ikke database og kan ikke lagre data. Desember 2019"
                link="https://mkv-calculator-awcsqbdb7.vercel.app/"
                id="#postkalkulator"
                github='https://github.com/KjetilOverby/mkv-calculator'
              />
              <Appcards
                img="https://lh3.googleusercontent.com/pw/AL9nZEW4eNrcV7T6qsgrN06c-_Zy0KU26svbIX9bOUIardKNKZNC9mo0Y3pgYSYgIgCp7e6wHCqGE9_LOafN5DDspRj65mbjkbOAsNmJ8f-Uo_4OD4IbRMnFb2suHoy13bl8JtwKkP8J1Vp8Z9kYRuVd48tr=w1920-h1080-no?authuser=0"
                title="MKV Postarkiv"
                text="En ny versjon ble laget. Denne har database, inlogging og er responsiv."
                link="https://mkv-calculator-mobile.vercel.app/"
                id="#postarkiv"
                github='https://github.com/KjetilOverby/mobile-mkv-calculator'
              />

              <Appcards
                img="https://lh3.googleusercontent.com/pw/AL9nZEViC_KeFb6PO3P0fmFyfbHuiX660OyjIctoQZcBvlDhBHmucWtcQlYzbOQnjbeTRjN5eQUc3MnASSNHqwDrPfW8aP4MbLia1RPVNR74RxtX_t_veP90hHw-Jb-QqCr_qSGgo6rteV52QfEoDv7MNSPU=w800-h450-no?authuser=0"
                title="Postarkiv (skurliste)"
                text="Ble lagd først som kun skurliste man kunne velge fra. Utviklet seg etterhvert til en fullverdig postkalkulator app."
                link="https://postarkiv.vercel.app/"
                id="#postarkiv2"
                github='https://github.com/KjetilOverby/postarkiv'
              />
            </div>
          </div>
        </MarginLayout>
      </div>
      <style jsx>
        {`
          .appcards-container {
            margin-top: 8rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr)));
            grid-gap: 5rem;
            place-items: center
          }
          .container {
            background: #ebebeb;
            padding-bottom: 15rem;
            margin-bottom: 0rem;
          }
          .img {
              width: 100%
          }
          .pro-app-header {
            margin-top: 8rem;
          }
          .text-imgcontainer {
              display: grid;
              grid-template-columns: 25rem 1fr;
              grid-gap: 5rem
          }
          @media only screen and (max-width: 756px) {

          .appcards-container {
            grid-template-columns: 1fr;
          
           
          }
          .text-imgcontainer {
            grid-template-columns: 1fr;
          }

        `}
      </style>
    </>
  );
};

export default AppsectionMain;
