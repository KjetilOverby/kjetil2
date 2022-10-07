import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import MarginLayout from "../src/components/common/MarginLayout";
import VerktoyregisterMain from "../src/components/verktoyregister/VerktoyregisterMain";
import verktoydata from "../src/data/verktoydata";

const verktoyregister = () => {
  return (
    <>
      <MarginLayout>
        <HeaderComponent adr="Verktøyregister" />
      </MarginLayout>
      <VerktoyregisterMain />

      <FooterComponent header="Vertøyregister" data={verktoydata} />
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default verktoyregister;
