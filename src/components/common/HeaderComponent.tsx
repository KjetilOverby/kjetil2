import React from "react";
import Link from "next/link";

interface HeaderProps {
  adr: string;
}

const HeaderComponent = ({ adr }: HeaderProps) => {
  return (
    <>
      <div className="container">
        <h3 className="name">
          Kjetil Øverby •{" "}
          <Link href="/">
            <span className="portfolio">Portfolio</span>
          </Link>
          {adr && <span> • {adr}</span>}
        </h3>
      </div>
      <style jsx>
        {`
          .container {
          }
          .name {
            color: grey;
            margin-bottom: 5rem;
            font-weight: 400;
          }
          .portfolio {
            color: darkblue;
          }
          .portfolio:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default HeaderComponent;
