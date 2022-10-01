import React from "react";
import MarginLayout from "../src/components/common/MarginLayout";
import AppsectionMain from "../src/components/common/postarkiv/appsection/AppsectionMain";
import PostarkivMain from "../src/components/common/postarkiv/PostarkivMain";

const postarkiv: React.FC = () => {
  return (
    <>
      <MarginLayout>
        <PostarkivMain />
      </MarginLayout>
      <AppsectionMain />
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
