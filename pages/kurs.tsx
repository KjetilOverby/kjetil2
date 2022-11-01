import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import MarginLayout from "../src/components/common/MarginLayout";
import KursMainPage from "../src/components/kurs/KursMainPage";

const kurs = () => {
  return (
    <>
      <div className="container">
        <MarginLayout>
          <>
            <HeaderComponent adr="Kurs" />
            <KursMainPage />
          </>
        </MarginLayout>
            <FooterComponent data={[]} header='' />
      </div>
      <style jsx>
        {`
          .container {
            background: lightgrey;
          }
        `}
      </style>
    </>
  );
};

export default kurs;
