import React from "react";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import Link from "next/link";

interface data {
  title: string;
}

interface DataProps {
  data: data[];
  header: string;
}

const FooterComponent: React.FC<DataProps> = ({ header, data }) => {
  return (
    <>
      <div className="container">
        <div className="content-container">
          <div>
            <h3 className="footer-header">Kjetil Øverby • Portfolio</h3>
            <div className="icon-text-container">
              <FaPhoneAlt
                style={{
                  verticalAlign: "middle",
                  color: "lightgrey",
                  marginRight: ".5rem",
                  fontSize: ".9rem",
                  marginTop: ".2rem",
                }}
              />
              <p className="footer-text"> 97541236</p>
            </div>
            <div className="icon-text-container">
              <GrMail
                style={{
                  color: "lightgrey",
                  marginRight: ".5rem",
                  fontSize: "1.1rem",
                  marginTop: ".2rem",
                }}
              />
              <p className="footer-text"> ktldesign80@gmail.com</p>
            </div>
            <Link href="https://github.com/KjetilOverby">
              <div className="icon-text-container">
                <BsGithub
                  style={{
                    color: "lightgrey",
                    marginRight: ".5rem",
                    fontSize: "1.1rem",
                    marginTop: ".1rem",
                  }}
                />
                <p className="footer-text"> Github</p>
              </div>
            </Link>
            <div className="icon-text-container">
              <AiFillFacebook
                style={{
                  color: "lightgrey",
                  marginRight: ".5rem",
                  fontSize: "1.1rem",
                  marginTop: ".1rem",
                }}
              />
              <p className="footer-text"> Facebook</p>
            </div>
          </div>

          <div>
            <h3 className="footer-header">{header}</h3>

            {data.map((item) => (
              <p key={item.title} className="footer-text">
                {item.title}
              </p>
            ))}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            background: rgba(20, 20, 20);
            padding: 6rem 16rem;
            margin-top: 5rem;
          }
          .content-container {
            margin: 0 20rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
          }
          .icon-text-container {
            display: flex;
            vertical-align: "middle";
          }
          .icon-text-container:hover {
            cursor: pointer;
          }
          .footer-header {
            text-transform: uppercase;
            color: lightgrey;
            margin-bottom: 0.5rem;
            font-weight: 400;
            font-size: 1rem;
          }
          .footer-text {
            color: lightgrey;
            margin-bottom: 0.5rem;
            font-weight: 100;
            font-size: 0.8rem;
          }
          @media only screen and (max-width: 800px) {
            .container {
              padding: 6rem 3rem;
            }
            .content-container {
              grid-template-columns: repeat(auto-fill, minmax(1fr, 1fr));
              grid-gap: 5rem;
              margin: 0;
            }
          }
          @media only screen and (max-width: 1400px) {
            .content-container {
              margin: 0 0rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default FooterComponent;
