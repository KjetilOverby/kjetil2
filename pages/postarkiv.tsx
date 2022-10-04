import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import MarginLayout from "../src/components/common/MarginLayout";
import Appdescription from "../src/components/common/postarkiv/Appdescription";
import AppsectionMain from "../src/components/common/postarkiv/appsection/AppsectionMain";
import PostarkivMain from "../src/components/common/postarkiv/PostarkivMain";

const postarkiv: React.FC = () => {
  return (
    <>
      <MarginLayout>
        <PostarkivMain />
      </MarginLayout>
      <AppsectionMain />

      <Appdescription />
      <FooterComponent />
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default postarkiv;
