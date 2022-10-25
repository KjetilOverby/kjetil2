import React from "react";
import udemy from "../../data/udemydata";
import Image from "next/image";
import Link from "next/link";
import MarginLayout from "../common/MarginLayout";

const KursMainPage = () => {
  return (
    <>
      <MarginLayout>
        <>
          <h1 className="header mbl">Nettkurs</h1>
          <p className="mbl">
            Jeg har i hovedsak brukt Udemy.com som hovedkilde til å lære å kode.
            Men jeg har vært innom Treehouse, Coursera, linkedIN. Jeg har 57
            Udemy kurs. De fleste kursene er ikke fullført, det er fordi jeg var
            bare ute etter spesielle ting i kursene for å fordype kunnskap i
            spesielle felt. Det meste av det som ikke er fullført er noe jeg kan
            ganske godt. Klikk på kursene for å få mere info.
          </p>
        </>
      </MarginLayout>
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
