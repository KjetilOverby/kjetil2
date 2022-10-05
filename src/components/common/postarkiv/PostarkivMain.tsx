import React from "react";
import HeaderComponent from "../HeaderComponent";

const PostarkivMain: React.FC = () => {
  return (
    <>
      <div className="container">
        <HeaderComponent adr="Postarkiv" />
        <div className="content-container  content-margins">
          <h1 className="header">Postarkiv</h1>
          <h3 className="subheader mt mb">Hva gjør dette programmet?</h3>
          <div className="column2">
            <div>
              <p>
                Posten i denne sammenhengen skal dele opp en stokk til planker.
                På illustrasjonen under ser vi 5 planker og 4 sidebord. Posten
                skal dele opp plankene. Eksemplet i illustrasjonen kan være
                5x50x200. Sidebordene på over og undersiden er allerede sagd av
                når de kommer til denne posten. Posten bygges opp med ringer og
                blader på en hylse som gjør at det blir et fast uttak. Skal man
                ha andre dimensjoner så må posten byttes med en ny.
              </p>
              <div className="img-deling-container">
                <img
                  className="img"
                  src="https://lh3.googleusercontent.com/pw/AL9nZEWBqTfqaAIOQeZNn37ojtHD5GF-Jrp3cPLwsP_ZsH33n6rDHyZNCa3ufQs0GBv5Cd_DmhJBzVPsigCXOr681hgoz3Q_tNSfkvbVnaVUT_Bw-MFkD9Cr8O13oa91UznNy33Uh_kh4HRLfLkGHvi_PX9c=s791-no?authuser=0"
                  alt=""
                />
              </div>
            </div>
            <div>
              <img
                className="img"
                src="https://lh3.googleusercontent.com/pw/AL9nZEV9u4VLP5w997IVRtH6r5YCD6A8IrprNXmBCRQrNLe-jObuIWeHAMgkkaCUAhFq6nTWAmYVRQkp8uycwxo_KxeVObvEOmSQzCMP5GY7Mcdm6L8fxso1TRpL9jTq3bZJ3emLmTZYSeRVFoVbkYjdap60=w1440-h1080-no?authuser=0"
                alt=""
              />
              <p className="img-text">
                Her er en post som sitter i saga. Saga har 2 akslinger med 2
                identiske poster på. Bladene sager hver sin halvdel igjennom
                blokka.
              </p>
            </div>
          </div>

          <p className="mt illtext">
            på illustrasjonen under ser man hvordan posten skal bygges hvis det
            er 5x50. Her må man dele opp utfyllingen foran og bak med
            distanseringer vi har tilgjengelig.
          </p>
          <p className="last-text">
            På postningene som ble laget på det originale programmet regner kun
            ut utfyllingen foran for det er den som bestemmer at posten kommer i
            midten. utfyllingen bak er kun for å få skrudd fast posten og da
            spiller det ingen rolle om det er noen millimeter fra eller til. Men
            poenget med at jeg regner ut utfyllingen bak er at mutterene som
            skal skrus på hylsene flykter med kanten på hylsa nå den er dratt
            igjen. Da er det lett å se at posten inneholder feil for da vil
            mutterne stikke innen eller utenfor hylsa.
          </p>
          <div className="img-container">
            <img
              className="img"
              src="https://lh3.googleusercontent.com/pw/AL9nZEXo1AUULPvoNxwU1a1KNUlxMVPgOS12u1mAYxDbu6AYwdt2MBpmt_XAgmYqXSyOc9BkU_5zqvx41Dtu5BpAS7ScPxOn2b4NQWvocuYh7MVxLvzAHfSOKqAOVhq0HOZcYnejt9Wl55BqDKRKErrN-b6U=w1170-h729-no?authuser=0"
              alt=""
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .column2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 5rem;
          }
          .container {
          }
          .content-container {
          }
          .subheader {
          }

          .img {
            width: 100%;
          }
          .img-container {
            margin-top: 3rem;
            margin-bottom: 5rem;
          }
          .img-deling-container {
            width: 10rem;
            margin-top: 3rem;
            margin-bottom: 5rem;
          }
          .last-text {
            margin-bottom: 5rem;
            margin-top: 1rem;
          }
          @media only screen and (min-width: 2100px) {
            .img-container {
              margin-top: 10rem;
              width: 55rem;
            }
            .illtext {
              margin-top: 5rem;
            }
            .img-deling-container {
              width: 25rem;
            }
          }
          @media only screen and (max-width: 756px) {
            .img-container {
              width: 100%;
            }
            .column2 {
              grid-template-columns: 1fr;
              grid-gap: 5rem;
            }
            .img-deling-container {
              margin-bottom: 0rem;
            }
            .last-text {
              margin-bottom: 1rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default PostarkivMain;
