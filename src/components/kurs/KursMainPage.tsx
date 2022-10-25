import React from "react";
import udemy from "../../data/udemydata";
import Image from "next/image";
import Link from "next/link";

const KursMainPage = () => {
  return (
    <>
      <div className="content-margins img-container">
        {udemy.map((item) => {
          return (
            <>
              <Link href={`${item.link}`}>
                <div key="item.img">
                  <Image
                    alt="course-img"
                    layout="intrinsic"
                    width="250"
                    height="300"
                    objectFit="cover"
                    src={item.img}
                    loader={() => item.img}
                  />
                </div>
              </Link>
            </>
          );
        })}
      </div>
      <style jsx>
        {`
          .img-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
            place-items: center;
            grid-gap: 4rem;
          }
        `}
      </style>
    </>
  );
};

export default KursMainPage;
