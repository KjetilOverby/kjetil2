import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Column2Layout = ({ children }: Props) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 2rem;
          margin-bottom: 4rem;
        }
        @media screen and (max-width: 900px) {
          .container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};
export default Column2Layout;
