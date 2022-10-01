import React from "react";

interface CardProps {
  img: string;
  title: string;
  text: string;
}

const Appcards = ({ img, title, text }: CardProps) => {
  return (
    <>
      <div className="container">
        <img
          className="img"
          src="https://lh3.googleusercontent.com/pw/AL9nZEV5Dj5Ae_ckIm7eaFFDa8U7Xl9ynJdNc5xp7bZDNJVqB0CT4WQ80Uo46k8MDdiyxVSL3I0SA-LA9Z5uX7i96lQ7mc_RWTav4K8xBkVLXyhCHr_AnwGdPzbPIQ2SIjt4MgsKL4XIxkyqdPNJ7EkS3r2h=w1686-h1024-no?authuser=0"
          alt=""
        />
        <div className="text-container">
          <h3 className="header mb">Microsoft Access</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            aliquam reprehenderit ut cum officia veritatis asperiores deleniti
            nemo vitae repellat. Possimus quisquam architecto saepe esse
            molestiae, in dignissimos vero est!
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 20rem;
            background: #fff;
          }
          .img {
            width: 100%;
          }
          .text-container {
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default Appcards;
