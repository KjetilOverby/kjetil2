import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import MarginLayout from "../src/components/common/MarginLayout";
import Appdescription from "../src/components/common/postarkiv/Appdescription";
import AppsectionMain from "../src/components/common/postarkiv/appsection/AppsectionMain";
import PostarkivMain from "../src/components/common/postarkiv/PostarkivMain";
import postarkivData from "../src/data/postarkivdata";

const postarkiv: React.FC = () => {
  return (
    <>
      <MarginLayout>
        <PostarkivMain />
      </MarginLayout>
      <AppsectionMain />

      <Appdescription />
      <FooterComponent data={postarkivData} header="Postarkiv 2016-2022" />
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
