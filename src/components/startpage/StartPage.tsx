import React from "react";
import Link from "next/link";
import HeaderComponent from "../common/HeaderComponent";
import Projectcards from "./Projectcards";

const StartPage: React.FC = () => {
  return (
    <>
      <div className="container">
        <div>
          <HeaderComponent adr="" />

          <p>
            42 år, koder og programmerer på fritida. Jobber som sliper på
            Moelven Våler.
          </p>
          <div className="logo-main-container">
            <div className="react-container">
              <img
                className="img"
                src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                className="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
                alt=""
              />
            </div>
            <div className="logo-container">
              <img
                className="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
                alt=""
              />
            </div>
            <div className="mongo-container">
              <img
                className="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <hr
          style={{ borderBottom: 0, borderColor: "grey", marginTop: "5rem" }}
        />

<Projectcards />

       {/*  <div className="content-margins">
          <h1 className="header mb">Mine hovedprosjekt</h1>

          <div>
            <div className="project-box">
              <h2 className="mbs">Postarkiv</h2>
              <div className="text-box">
                <p>
                  Postarkiv er et verktøy som brukes til å regne ut utfylling
                  for å sentrere sagblader på en hylse. Prosjektet ble startet i
                  2016 på excel regneark og har ettehvert utviklet seg til en
                  webapplikasjon med database.
                </p>
              </div>
              <Link href="postarkiv">
                <h4 className="btn">LES MER</h4>
              </Link>
              <div className="img-container">
                <img
                  className="img mt"
                  src="https://lh3.googleusercontent.com/pw/AL9nZEW2ocY1jlQq0inPXf5SzPuS1Ak8JAnlMywSKHKlNZgPBhoMfcEJGtX35xQ2oW9_x94zPkrtM2WEuI25LmCq2ZWYbJJ5_fBe0ZFTWdB55G28AZ1WRW5EW8BCDDBllTts2ECnVENEeOGcmunBzfili5wb=w800-h666-no?authuser=0"
                  alt="timber"
                />
              </div>
            </div>
          </div>
          <div className="project-box">
            <h2 className="mbs">Verktøyregister</h2>
            <div className="text-box">
              <p>
                Verktøyregister er et prosjekt som jeg startet med i 2016 for å
                ha kontroll på hvor mange omloddinger et blad har. Et system ble
                først laget i Microsoft Access der vi kun så registreringsdato
                og antall omloddinger og dato på omloddingene. Senere har dette
                utviklet seg til å bli en webapplikasjon med database. Og mer
                detaljert statistikk.
              </p>
            </div>
            <Link href="verktoyregister">
              <h4 className="btn">LES MER</h4>
            </Link>
            <div className="img-container">
              <img
                className="img mt"
                src="https://www.nicepng.com/png/full/48-487679_saw-blade-png-large-wood-cutting-blade-png.png"
                alt="timber"
              />
            </div>
          </div>
          <div className="project-box">
            <h2 className="mbs">Flisa Bil</h2>
            <div className="text-box">
              <p>Jeg har laget nettsiden til Flisa Bil.</p>
            </div>
            <h4 className="btn">LES MER</h4>
            <div className="img-container">
              <img
                className="img mt"
                src="https://down.imgspng.com/download/0720/mercedes_PNG80135.png"
                alt="timber"
              />
            </div>
          </div>
        </div> */}
      </div>
      <style jsx>
        {`
          .container {
          }
          .btn {
            margin-top: 3rem;
          }
          .btn:hover {
            cursor: pointer;
          }

          .header {
            margin-top: 15rem;
            font-weight: 100;
          }
          .img {
            width: 100%;
          }
          .img-container {
            width: 20rem;
          }
          .logo-container {
            width: 5rem;
          }
          .react-container {
            width: 6rem;
          }
          .logo-main-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(8rem, 8rem));
            margin-top: 1rem;
          }

          .project-box {
            margin-top: 3rem;
            background: white;
            margin-bottom: 10rem;
          }
          .text-box {
          }
        `}
      </style>
    </>
  );
};

export default StartPage;
