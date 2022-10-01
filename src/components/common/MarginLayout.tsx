import React from "react";
type Props = {
  children: JSX.Element;
};
const MarginLayout = ({ children }: Props) => {
  return (
    <>
      <div className="container">{children}</div>{" "}
      <style jsx>{`
        .container {
          margin: 0rem 35rem;
          padding-top: 5rem;
        }
        @media screen and (max-width: 2100px) {
          .container {
            margin: 0rem 25rem;
            padding-top: 5rem;
          }
          @media screen and (max-width: 1775px) {
            .container {
              margin: 0rem 15rem;
              padding-top: 5rem;
            }
          }
          @media screen and (max-width: 1550px) {
            .container {
              margin: 0rem 10rem;
              padding-top: 5rem;
            }
          }
          @media screen and (max-width: 1265px) {
            .container {
              margin: 0rem 3rem;
              padding-top: 5rem;
            }
          }
          @media screen and (max-width: 800px) {
            .container {
              margin: 0rem 0.5rem;
              padding-top: 5rem;
            }
          }
        }
      `}</style>
    </>
  );
};
export default MarginLayout;
