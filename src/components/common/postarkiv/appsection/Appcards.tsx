import React from "react";
import ButtonComponent from "../../ButtonComponent";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  img: string;
  title: string;
  text: string;
  link?: string;
  id?: string;
  github?: string;
}

const Appcards = ({ img, title, text, link, id, github }: CardProps) => {
  return (
    <>
      <div className="container">
        <div style={{ position: "relative", height: "16rem" }}>
          <Image
            className="img"
            src={img}
            loader={() => img}
            alt="Image"
            layout="responsive"
            height="55"
            width="100"
            objectFit="cover"
          />
        </div>
        <div className="text-container">
          <h3 className="card-header mb">{title}</h3>
          <p className="card-text">{text}</p>
          <div className="mt">
            {id && (
              <a href={id} className="btn">
                LES MER
              </a>
            )}
          </div>
          {link && <ButtonComponent title="Til nettsiden" link={link} />}
        </div>
        <Link href={`${github}`}>
          <div className="github-container">
            {github && (
              <div>
                <BsGithub
                  style={{
                    color: "dodgerblue",
                    fontSize: "1.5rem",
                    marginRight: ".5rem",
                  }}
                />{" "}
                Github
              </div>
            )}
          </div>
        </Link>
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
            min-height: 35rem;
            box-shadow: 5px 5px 10px lightgrey;
          }
          .github-container {
            margin-left: 0.5rem;
          }
          .github-container:hover {
            cursor: pointer;
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
