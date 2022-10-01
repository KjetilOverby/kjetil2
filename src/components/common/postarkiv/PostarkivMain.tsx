import React from "react";
import HeaderComponent from "../HeaderComponent";

const PostarkivMain: React.FC = () => {
  return (
    <>
      <div className="container">
        <HeaderComponent adr="Postarkiv" />
        <div className="content-container">
          <h1 className="header">Postarkiv</h1>
          <h3 className="subheader mt mb">Hva gjør dette programmet?</h3>
          <p>
            Posten i denne sammenhengen skal dele opp en stokk til planker. På
            illustrasjonen under ser vi 5 planker og 4 sidebord. Posten skal
            dele opp plankene. Eksemplet i illustrasjonen kan være 5x50x200.
            Sidebordene på over og undersiden er allerede sagd av når de kommer
            til denne posten.
          </p>
          <div className="img-deling-container">
            <img
              className="img"
              src="https://lh3.googleusercontent.com/pw/AL9nZEWBqTfqaAIOQeZNn37ojtHD5GF-Jrp3cPLwsP_ZsH33n6rDHyZNCa3ufQs0GBv5Cd_DmhJBzVPsigCXOr681hgoz3Q_tNSfkvbVnaVUT_Bw-MFkD9Cr8O13oa91UznNy33Uh_kh4HRLfLkGHvi_PX9c=s791-no?authuser=0"
              alt=""
            />
          </div>
          <p className="mt">
            på illustrasjonen under ser man hvordan posten skal bygges hvis det
            er 5x50.
          </p>
          <div className="img-container">
            <img
              className="img"
              src="https://lh3.googleusercontent.com/pw/AL9nZEVtNOnOqhcaBHwkK4lfxl7VVk6xm-q7KJlkiKn7Zo02-P2GhZQM_Ebk-AdcG7HUaY7XnXhpVaXnBSVZ_mNAkq9b46kz65KGeeALbsoDzHOoigPs523N9JuazUHMmIGDrO6rDPHM2y52K_JTnf1D3PKS=w1039-h695-no?authuser=0"
              alt=""
            />
            <p className="img-text">
              Her ser man en 5x50 post. Her må man dele opp utfyllingen foran og
              bak med distanseringer vi har tilgjengelig.
            </p>
          </div>
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
        </div>
      </div>
      <style jsx>
        {`
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
            width: 45rem;
            margin-top: 5rem;
          }
          .img-deling-container {
            width: 15rem;
            margin-top: 3rem;
          }
          .last-text {
            margin-bottom: 10rem;
            margin-top: 10rem;
          }
        `}
      </style>
    </>
  );
};

export default PostarkivMain;
