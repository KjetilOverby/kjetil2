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
        <h1 className="header">PROSJEKTER</h1>
<div className="card-container">

<Projectcards header='POSTARKIV' text='Lorem ipsum' link='/postarkiv' imgUrl='https://media.istockphoto.com/photos/pile-of-wooden-bars-wood-manufacturing-sawmill-carpentry-workshop-picture-id1097930262?k=20&m=1097930262&s=612x612&w=0&h=j6wcgkZE062jW5pHWZq2qRNApKcBjHHdt6_H2FRS2UY='/>
<Projectcards header='VERKTØYREGISTER' text='lorem ipsum' link='/verktoyregister' imgUrl='https://media.istockphoto.com/photos/circular-saw-picture-id158571094?k=20&m=158571094&s=612x612&w=0&h=PxZYGZv76Zk0K7kczGtja5aken0mmq7iMA72A2mbfSM='/>
<Projectcards header='IMAGE CHRONICLES' text='lorem ipsun' imgUrl='https://media.istockphoto.com/photos/camera-with-professional-lens-being-held-picture-id155393894?k=20&m=155393894&s=612x612&w=0&h=9E_x3HcZySwDs8zhH1Lvcn0zmlT9dYqF2i92w5Urj34='/>
<Projectcards header='FLISA BIL' text='lorem ipsun' imgUrl='https://media.istockphoto.com/photos/american-muscle-car-picture-id108226513?k=20&m=108226513&s=612x612&w=0&h=48EZAv_a22R1NljASmgIXzxSkNnTbgqA-4-v_DYA8IE='/>
<Projectcards header='STRIDSBERGS' text='lorem ipsun' imgUrl='https://media.istockphoto.com/photos/blue-steel-disk-saw-at-construction-site-picture-id1125394932?k=20&m=1125394932&s=612x612&w=0&h=5xvWO6KbAhEaBSeL8xLqbhwNIuxRBDD3rYtlFK8G9zw='/>
<Projectcards header='SOLØR 3DESIGN' text='lorem ipsun' imgUrl='https://media.istockphoto.com/photos/interior-modern-kitchen-picture-id547521936?k=20&m=547521936&s=612x612&w=0&h=XL2eNYRv8pMniySjx3Nbc1Yrk6lvLz0gcVaIeP_1M30='/>
</div>

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
          .card-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
            grid-row-gap: 3rem
          }

          .header {
            margin-top: 5rem;
            font-weight: 100;
            margin-bottom: 2rem
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
