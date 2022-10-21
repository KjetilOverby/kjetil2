import React from "react";
import MarginLayout from "../common/MarginLayout";
import Appcards from "../common/postarkiv/appsection/Appcards";

const FlisabilMain = () => {
  return (
    <>
      <MarginLayout>
        <div className="content-margins">
          <h1 className="header mb">Flisa Bil</h1>
          <p className="mbl">
            Flisa Bil hadde en veldig utdatert nettside som var nesten ubrukelig
            på mobil. Jeg bestemte meg for å lage en nettside for Flisa Bil for
            å trene litt på å lage nettside. Da jeg hadde laget min andre Flisa
            Bil nettside så spurte jeg de om de var interessert i en ny
            nettside. Det var de så jeg publiserte etterhvert en nettside på
            deres domene. Senere kom det nye versjoner og oppgraderinger.
          </p>
          <div className="appcards-container">
            <Appcards
              title="Flisa Bil"
              text="Flisa Bil hadde en nettside som ikke var særlig tilpasset dagens skjermer. Jeg begynte å lage en nettside for Flisa Bil som ikke ble helt ferdig før jeg begynte på en ny."
              img="https://lh3.googleusercontent.com/pw/AL9nZEVImLnczopZp6URmJxtS2mCBmhacWQ8_c4tGEGi63cKyFCarD71iTpHTk_OgSpOTNpIo5I7TYmn4j91YfvjLclOWJWSEYQM9bWWW6nHptZuca95NgZRHqtoRvZ-drb4cYV7VzGJUtRyxzjdDxcPMSxX=w1913-h991-no?authuser=0"
            />
            <Appcards
              title="Flisa Bil 2"
              text="Jeg begynte på en ny nettside for Flisa Bil. Denne ble publisert på Flisa Bil sitt domene etter at jeg presenterte siden for dem."
              img="https://lh3.googleusercontent.com/pw/AL9nZEW1NwKlcc5TRu-7zcgStcj3nhsAu_wkll99ODtNJmanOaJy4ug1NP5Dho-nfBwPaCjbbiIZMztPOmd6EwMzT9xDe_PMsBrMGmFs6PxP_xf8DOpMzAN_0cbQNtyTZWtnByhbqloLDyIEmdsrHE7LyrG1=w948-h594-no?authuser=0"
              link="https://flisabil2.vercel.app"
            />
            <Appcards
              title="Flisa Bil 3"
              text="En ny versjon ble laget for Flisa Bil med mere innhold i nettsiden."
              img="https://ktldesign.net/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fprosjekter%2Fflisabil.14ee19596b466b88b1c837f8de9bcc8d.png&w=1920&q=75"
              link="https://flisabil3.vercel.app"
            />
            <Appcards
              title="Flisa Bil 4"
              text="Da jeg ikke er helt fornøyd enda så oppgraderer jeg nettsiden til det den er idag. Det har kommet på mere bilder og text som gjør at nettsiden ser mer ferdig ut."
              img="https://lh3.googleusercontent.com/pw/AL9nZEWjCBn9RuXjPeiN0Rl3lBAu-gW462HLYlxlq5_l_8jfFobmQ4wRucWD9hWCmajrF1CzogqUZQtSAOBLsFtq71afEKWAXTW6YOeFUGjOJpo6otX7zWBr4Z0CeWTh1Pp36YlZLzEg62gyXxODkClbNr2d=w1024-h576-no?authuser=0"
              link="https://flisabil.no"
            />
          </div>
        </div>
      </MarginLayout>

      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default FlisabilMain;
