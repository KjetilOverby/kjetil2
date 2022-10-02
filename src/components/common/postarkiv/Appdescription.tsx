import React from "react";
import MarginLayout from "../MarginLayout";

const Appdescription = () => {
  return (
    <>
      <MarginLayout>
        <div>
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
            <div className="text-imgcontainer3">
              <p>
                I 2018 så begynner jeg å lære meg å programmere. Jeg drømmer om
                å lage Postkalkulatoren som en app. Jeg ender til slutt opp med
                Javascript og webutvikling. Med mye prøving og feiling så ender
                jeg til slutt opp med en webapp som fungerer 8 februar 2020 tar
                webappen over for Excel systemet.
              </p>
              <img
                className="img"
                src="https://lh3.googleusercontent.com/pw/AL9nZEX3EBlXjIMw7ewiNa58F__ZJ8e-IVQsvqaFW3LWehx-Ak4AJnM_MPdaBiaJf5kjxZp22qaoId4HFtgA3pcE0hr7OF4Wuee6laNlidRouYT5Dn7XFhjKroFUw0WWiNmnySOSIUMZwIpxtHfQ3DW8Veez=w860-h578-no?authuser=0"
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
            grid-template-columns: 20rem 1fr;
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
