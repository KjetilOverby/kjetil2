import React from "react";

const FooterComponent = () => {
  return (
    <>
      <div className="container">
        <div className="content-container">
          <div>
            <h3 className="footer-header">Kjetil Øverby</h3>
            <p className="footer-text">Tlf: 97541236</p>
            <p className="footer-text">E-mail: ktldesign80@gmail.com</p>
          </div>

          <div>
            <h3 className="footer-header">Postarkiv 2016-2022</h3>
            <p className="footer-text">Postkalkulator (Excel)</p>
            <p className="footer-text">Postkalkulator (webapp)</p>
            <p className="footer-text">MKV Postarkiv</p>
            <p className="footer-text">Postarkiv (skurliste)</p>
            <p className="footer-text"></p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            background: #3b5564;
            padding: 3rem;
          }
          .content-container {
            margin: 0 20rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
          }
          .footer-header {
            text-transform: uppercase;
            color: lightgrey;
            margin-bottom: 0.5rem;
            font-weight: 400;
          }
          .footer-text {
            color: lightgrey;
            margin-bottom: 0.5rem;
            font-weight: 100;
          }
        `}
      </style>
    </>
  );
};

export default FooterComponent;
