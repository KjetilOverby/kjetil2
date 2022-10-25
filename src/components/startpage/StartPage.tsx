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
          <div className="text-container">
            <p>
              42 år, koder og programmerer i jobb og på fritida. Jeg er selvlært
              i programmering og programmerer daglig. Jeg har ikke programmering
              som hovedjobb men jeg lager programmer som vi bruker på jobb. Jeg
              jobber som sliper på Moelven Våler, men programmerer også i
              arbeidstiden.
            </p>
            <br />
            <p>
              Jeg har brukt <a href="https://nextjs.org/">Next js</a> på alle
              prosjekter. Bruker <a href="https://www.mongodb.com/">Mongo DB</a>{" "}
              som database, Node Js som backend. Jeg bruker også React og
              Typescript.
            </p>
            <br />
            <p>
              Jeg har tatt en del kurs hovedsakelig på Udemy, men har vært innom
              Treehouse, Coursera, LinkedIn og uttalige youtube tutorials.
            </p>
            <Link href="/kurs">
              <p className="courses">Kurs</p>
            </Link>
          </div>
        </div>
        <hr
          style={{ borderBottom: 0, borderColor: "grey", marginTop: "5rem" }}
        />
        <h1 className="header">PROSJEKTER</h1>
        <div className="card-container">
          <Projectcards
            header="POSTARKIV"
            text="Webapplikasjon"
            link="/postarkiv"
            imgUrl="https://media.istockphoto.com/photos/pile-of-wooden-bars-wood-manufacturing-sawmill-carpentry-workshop-picture-id1097930262?k=20&m=1097930262&s=612x612&w=0&h=j6wcgkZE062jW5pHWZq2qRNApKcBjHHdt6_H2FRS2UY="
            btnTitle="LES MER"
          />
          <Projectcards
            header="VERKTØYREGISTER"
            text="Webapplikasjon"
            link="/verktoyregister"
            imgUrl="https://media.istockphoto.com/photos/new-circular-saw-blade-picture-id1352732022?k=20&m=1352732022&s=612x612&w=0&h=_SJXTMs-LAuERXOHknvgb0RApwW-qgjsmenYcHp5mpY="
            btnTitle="LES MER"
          />
          <Projectcards
            header="IMAGE CHRONICLES"
            text="Nettside"
            imgUrl="https://media.istockphoto.com/photos/camera-with-professional-lens-being-held-picture-id155393894?k=20&m=155393894&s=612x612&w=0&h=9E_x3HcZySwDs8zhH1Lvcn0zmlT9dYqF2i92w5Urj34="
            btnTitle="TIL NETTSIDEN"
            link="https://betsyphotos.vercel.app/"
          />
          <Projectcards
            header="FLISA BIL"
            text="Nettside"
            imgUrl="https://media.istockphoto.com/photos/american-muscle-car-picture-id108226513?k=20&m=108226513&s=612x612&w=0&h=48EZAv_a22R1NljASmgIXzxSkNnTbgqA-4-v_DYA8IE="
            btnTitle="LES MER"
            link="/flisabil"
          />
          <Projectcards
            header="STRIDSBERGS"
            text="Nettside"
            imgUrl="https://media.istockphoto.com/photos/blue-steel-disk-saw-at-construction-site-picture-id1125394932?k=20&m=1125394932&s=612x612&w=0&h=5xvWO6KbAhEaBSeL8xLqbhwNIuxRBDD3rYtlFK8G9zw="
            btnTitle="LES MER"
            link="/stridsbergs"
          />
          <Projectcards
            header="SOLØR 3DESIGN"
            text="Nettside"
            imgUrl="https://media.istockphoto.com/photos/interior-modern-kitchen-picture-id547521936?k=20&m=547521936&s=612x612&w=0&h=XL2eNYRv8pMniySjx3Nbc1Yrk6lvLz0gcVaIeP_1M30="
            btnTitle="LES MER"
            link="https://solor3design.vercel.app/"
          />
        </div>
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
            grid-row-gap: 3rem;
          }
          .courses {
            color: rgb(33, 129, 167);
            margin-top: 1rem;
          }
          .courses:hover {
            cursor: pointer;
          }

          .header {
            margin-top: 5rem;
            font-weight: 100;
            margin-bottom: 2rem;
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
          .text-container {
            width: 40rem;
          }
          @media only screen and (max-width: 756px) {
            .text-container {
              width: 100%;
            }
            .card-container {
              place-items: center;
            }
          }
        `}
      </style>
    </>
  );
};

export default StartPage;
