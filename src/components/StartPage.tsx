import React from "react";

const StartPage: React.FC = () => {
  return (
    <>
      <div className="container">
        <h3 className="name">
          Kjetil Øverby ˚ <span className="portfolio">Portfolio </span>
        </h3>
        <p>
          42 år, koder og programmerer på fritida. Jobber som sliper på Moelven
          Våler.
        </p>
        <h1 className="header mb">Mine hovedprosjekt</h1>

        <div>
          <h2 className="mbs">Postarkiv</h2>
          <div className="text-box">
            <p>
              Postarkiv er et verktøy som brukes til å regne ut utfylling for å
              sentrere sagblader på en hylse. Prosjektet ble startet i 2016 på
              excel regneark og har ettehvert utviklet seg til en webapplikasjon
              med database.
            </p>
          </div>
          <h4 className="btn">LES MER</h4>
          <div className="img-container">
            <img
              className="img mt"
              src="https://lh3.googleusercontent.com/pw/AL9nZEW2ocY1jlQq0inPXf5SzPuS1Ak8JAnlMywSKHKlNZgPBhoMfcEJGtX35xQ2oW9_x94zPkrtM2WEuI25LmCq2ZWYbJJ5_fBe0ZFTWdB55G28AZ1WRW5EW8BCDDBllTts2ECnVENEeOGcmunBzfili5wb=w800-h666-no?authuser=0"
              alt="timber"
            />
          </div>
        </div>
        <div className="project-box">
          <h2 className="mbs">Verktøyregister</h2>
          <div className="text-box">
            <p>
              Verktøyregister er et prosjekt som jeg startet med i 2016 for å ha
              kontroll på hvor mange omloddinger et blad har. Et system ble
              først laget i Microsoft Access der vi kun så registreringsdato og
              antall omloddinger og dato på omloddingene. Senere har dette
              utviklet seg til å bli en webapplikasjon med database. Og mer
              detaljert statistikk.
            </p>
          </div>
          <h4 className="btn">LES MER</h4>
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
      </div>
      <style jsx>
        {`
          .container {
          }
          .btn {
            margin-top: 3rem;
          }
          .header {
            margin-top: 3rem;
            font-weight: 300;
          }
          .img {
            width: 100%;
          }
          .img-container {
            width: 30rem;
          }
          .name {
            color: grey;
            margin-bottom: 5rem;
            font-weight: 400;
          }
          .portfolio {
            color: darkblue;
          }
          .project-box {
            margin-top: 3rem;
          }
          .text-box {
          }
        `}
      </style>
    </>
  );
};

export default StartPage;
