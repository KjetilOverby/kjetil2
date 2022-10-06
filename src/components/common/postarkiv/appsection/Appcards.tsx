import React from "react";
import ButtonComponent from "../../ButtonComponent";

interface CardProps {
  img: string;
  title: string;
  text: string;
  link?: string;
}

const Appcards = ({ img, title, text, link }: CardProps) => {
  return (
    <>
      <div className="container">
        <img className="img" src={img} alt="" />
        <div className="text-container">
          <h3 className="card-header mb">{title}</h3>
          <p className="card-text">{text}</p>
          <p className="btn">LES MER</p>
          {link && <ButtonComponent title="Til nettsiden" link={link} />}
        </div>
      </div>
      <style jsx>
        {`
          .btn {
            margin-top: 2rem;
            color: #537a94;
          }
          .btn:hover {
            cursor: pointer;
          }
          .card-header {
            color: #537a94;
            font-weight: 100;
          }
          .card-text {
            color: grey;
          }
          .container {
            background: #fff;
            border-radius: 5px;
            min-height: 30rem;
          }
          .img {
            width: 100%;
          }
          .text-container {
            padding: 0.5rem;
          }
          @media only screen and (max-width: 600px) {
            .container {
              width: 90vw;
            }
          }
        `}
      </style>
    </>
  );
};

export default Appcards;
