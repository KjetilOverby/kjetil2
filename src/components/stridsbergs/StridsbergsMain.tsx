import React from "react";
import MarginLayout from "../common/MarginLayout";
import Appcards from "../common/postarkiv/appsection/Appcards";

const StridsbergsMain = () => {
  return (
    <>
      <MarginLayout>
        <>
          <div className="content-margins">
            <h1 className="header mb">Stridsbergs</h1>

            <p className="mb">
              Stridsbergs er service og leverandør til sliperiet på Moelven
              Våler. Jeg så at deres nettside ikke var optimal for mobiler og at
              det er en del ting ellers med nettsiden som ikke ser så bra ut.
              Jeg bestemte meg for å lage nettside til de for å trene litt på
              Css. Etterhvert ble det vist fram til Stridsbergs og de var
              interessert i å få en ny nettside. Nettsiden er ikke helt klar
              enda og det har stoppet opp litt. Vet ikke enda om det blir ny
              nettside fra meg. Men mye er klart for det hvis de skulle bestemme
              seg for det.
            </p>

            <div className="appcards-container">
              <Appcards
                title="Stridsbergs"
                text="Flisa Bil hadde en nettside som ikke var særlig tilpasset dagens skjermer. Jeg begynte å lage en nettside for Flisa Bil som ikke ble helt ferdig før jeg begynte på en ny."
                img="https://lh3.googleusercontent.com/pw/AL9nZEUefLBjRhWyNaXVotqZWzRkoP2lWxVdPFN2q51dOa9UC0uSZYEkMSiRdJFjefLo9tGB6Vet0LJzgRQAJ4zOqVkQRyEuqqPJbrmMzn-5aUT6OjOjW9cFEbDj4iVjgbE8TuSOPecO5oAFMG51hhcZAUQY=w948-h594-no?authuser=0"
                link="https://stridsbergs.vercel.app/"
              />
              <Appcards
                title="Stridsbergs 2"
                text="Flisa Bil hadde en nettside som ikke var særlig tilpasset dagens skjermer. Jeg begynte å lage en nettside for Flisa Bil som ikke ble helt ferdig før jeg begynte på en ny."
                img="https://lh3.googleusercontent.com/pw/AL9nZEVnRldbWQ2gaVLD6sVWNSmnWkLEYKCXlDTFy7WUvMHhDmjrTKCJmetaQi_eS7cht0zQ-JeW-lJMYje4Z4qDITUju_nFkjthJuQAoyvl6Nn4KCuU8Xq4uaHOTr09OrLcxm72ghGzMCzeKrLE2kdm6UL1=w1024-h576-no?authuser=0"
                link="https://stridsbergs2.vercel.app/"
              />
              <Appcards
                title="Stridsbergs 3"
                text="Flisa Bil hadde en nettside som ikke var særlig tilpasset dagens skjermer. Jeg begynte å lage en nettside for Flisa Bil som ikke ble helt ferdig før jeg begynte på en ny."
                img="https://ktldesign.net/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fprosjekter%2Fstridsbergs.f0cc5d62f21daa823b18e843ef4f610f.png&w=1920&q=75"
                link="https://stridsbergs3.vercel.app/"
              />
            </div>
          </div>
        </>
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

export default StridsbergsMain;
