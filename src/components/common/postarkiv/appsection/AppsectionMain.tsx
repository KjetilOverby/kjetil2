import React from "react";
import MarginLayout from "../../MarginLayout";
import Appcards from "./Appcards";

const AppsectionMain: React.FC = () => {
  return (
    <>
      <div className="container">
        <MarginLayout>
          <div>
            <h1 className="header">Apper</h1>
            <p>Flere apper har blitt laget.</p>
            <div>
              <Appcards img="" title="" text="" />
            </div>
          </div>
        </MarginLayout>
      </div>
      <style jsx>
        {`
          .container {
            background: #d8d8d8;
          }
        `}
      </style>
    </>
  );
};

export default AppsectionMain;
