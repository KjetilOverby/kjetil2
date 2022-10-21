import React from "react";
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
